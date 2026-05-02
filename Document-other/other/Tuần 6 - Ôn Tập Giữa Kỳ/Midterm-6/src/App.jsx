import { InputForm } from "./components/InputForm";
import { PhoneCard } from "./components/PhoneCard";
import { usePhoneHook } from "./hooks/PhoneHook";

function App() {
  const { data, addPhone, removePhone } = usePhoneHook();

  return (
    <>
      <InputForm addPhone={addPhone} />

      <div className="w-11/12 mx-auto grid grid-cols-4 gap-4">
        {data.map((x) => (
          <PhoneCard item={x} key={x.id} onRemove={removePhone} />
        ))}
      </div>
    </>
  );
}

export default App;
