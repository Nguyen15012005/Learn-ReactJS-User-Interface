import React from "react";

export const ContactCard = ({ contact, onDelete }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg border border-gray-200 flex flex-row">
      <div className="grow p-6">
        <h3 className="font-bold text-lg">{contact.name}</h3>
        <p className="italic text-gray-600">{contact.phone}</p>
      </div>
      <div
        onClick={() => onDelete(contact.id)}
        className="h-full bg-red-500 hover:bg-red-600 cursor-pointer flex justify-center items-center p-4 rounded-r-lg text-white text-xl font-bold"
      >
        X
      </div>
    </div>
  );
};
