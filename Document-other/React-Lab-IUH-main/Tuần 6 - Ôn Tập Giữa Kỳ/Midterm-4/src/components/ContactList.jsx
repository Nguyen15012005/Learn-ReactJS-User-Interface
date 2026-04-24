import React from "react";
import { ContactCard } from "./ContactCard";

export const ContactList = ({ contacts, handleDelete }) => {
  return (
    <div className="my-12 w-11/12 mx-auto grid grid-cols-4 gap-4">
      {contacts &&
        contacts.map((contact) => (
          <ContactCard
            key={contact.id}
            contact={contact}
            onDelete={handleDelete}
          />
        ))}
    </div>
  );
};
