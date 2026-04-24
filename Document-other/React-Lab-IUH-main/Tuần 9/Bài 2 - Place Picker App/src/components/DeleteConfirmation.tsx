import { useEffect } from "react";
import ProgressBar from "./ProgressBar";

type Props = {
  onConfirm: () => void;
  onCancel: () => void;
};

const TIMER = 3000;

const DeleteConfirmation: React.FC<Props> = ({ onConfirm, onCancel }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onConfirm();
    }, TIMER);

    return () => clearTimeout(timer);
  }, [onConfirm]);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <ProgressBar></ProgressBar>
    </div>
  );
};

export default DeleteConfirmation;
