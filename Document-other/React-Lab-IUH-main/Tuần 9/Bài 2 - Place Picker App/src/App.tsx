import logoImg from "./assets/logo.png";
import { AVAILABLE_PLACES } from "./data";
import PlaceList from "./components/PlaceList";
import { Place } from "./types/Place";
import { useEffect, useRef, useState, useCallback } from "react";
import Modal from "./components/Modal";
import DeleteConfirmation from "./components/DeleteConfirmation";
import { sortPlacesByDistance } from "./loc";

const storedIds: string[] = JSON.parse(
  localStorage.getItem("selectedPlaces") || "[]"
);
const storedPlaces: Place[] = storedIds
  .map((x) => AVAILABLE_PLACES.find((y) => y.id === x))
  .filter((place): place is Place => place !== undefined);

function App() {
  const [pickedPlaces, setPickedPlaces] = useState<Place[]>(storedPlaces);
  const [availabelPlaces, setAvailablePlaces] = useState<Place[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const selectedPlace = useRef<string>();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(
        AVAILABLE_PLACES,
        position.coords.latitude,
        position.coords.longitude
      );

      setAvailablePlaces(sortedPlaces);
    });
  }, []);

  const handleStartRemovePlace = (id: string) => {
    setIsOpen(true);
    selectedPlace.current = id;
  };

  const handleStopRemovePlace = () => {
    setIsOpen(false);
  };

  const handleSelectPlace = (id: string) => {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      if (!place) return prevPickedPlaces;
      return [place, ...prevPickedPlaces];
    });

    const storedIds: string[] = JSON.parse(
      localStorage.getItem("selectedPlaces") || "[]"
    );
    if (storedIds.includes(id)) return;
    localStorage.setItem("selectedPlaces", JSON.stringify([id, ...storedIds]));
  };

  const handleRemovePlace = useCallback(() => {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
    setIsOpen(false);

    const storedIds: string[] = JSON.parse(
      localStorage.getItem("selectedPlaces") || "[]"
    );
    localStorage.setItem(
      "selectedPlaces",
      JSON.stringify(storedIds.filter((x) => x !== selectedPlace.current))
    );
  }, []);

  return (
    <>
      <Modal open={isOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>
      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <PlaceList
          title="I'd like to visit ..."
          fallBackText={"Select the places you would like to visit below."}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <PlaceList
          title="Available Places"
          places={availabelPlaces}
          fallBackText="Fetching available places by distance..."
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
