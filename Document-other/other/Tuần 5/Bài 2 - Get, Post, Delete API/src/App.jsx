import { useEffect, useState } from "react";
import { ContactList } from "./components/ContactList";
import { InputForm } from "./components/InputForm";
import {
  createContact,
  deleteContact,
  fetchContact,
} from "./api/contactService";

function App() {
  const [data, setData] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const dataFetched = await fetchContact();
      setData(dataFetched);
    };

    fetchData();
  }, [reload]);

  const handleDelete = async (id) => {
    const { message } = await deleteContact(id);

    if (message === "Xóa thành công") {
      setReload(!reload);
    }
  };

  const handleCreate = async (contact) => {
    const { message } = await createContact(contact);

    if (message === "Tạo thành công") {
      setReload(!reload);
    }
  };

  return (
    <div className="min-h-screen py-12">
      <InputForm onSubmit={handleCreate} />
      <ContactList contacts={data} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
