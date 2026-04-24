import React from "react";
import { createPortal } from "react-dom";

export const Modal = ({ children, title, onClose }) => {
  const container = document.getElementById("modal");

  return createPortal(
    <dialog
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="h-screen w-full fixed inset-0 flex justify-center items-center bg-black/50 z-50"
    >
      <div className="w-1/2 border-2 border-black p-4 rounded-lg bg-white min-h-[300px]">
        <div className="flex justify-between items-center">
          <p></p>
          <h2 className="text-2xl font-bold">{title}</h2>
          <button
            onClick={onClose}
            className="size-12 text-white font-bold bg-red-500 hover:bg-red-600 rounded-full cursor-pointer"
          >
            X
          </button>
        </div>
        {children}
      </div>
    </dialog>,
    container
  );
};
