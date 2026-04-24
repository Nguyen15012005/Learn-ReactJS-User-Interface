import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

type Props = {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
};

const Modal: React.FC<Props> = ({ children, open, onClose }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (open) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [open]);

  const container = document.getElementById("modal");
  if (!container) return null;

  return createPortal(
    <dialog className="modal" ref={dialogRef} onClose={onClose}>
      {open && children}
    </dialog>,
    container
  );
};

export default Modal;
