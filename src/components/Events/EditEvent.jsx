import { Link, useNavigate } from "react-router-dom";

import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";

export default function EditEvent() {
  const navigate = useNavigate();

  function handleClose() {
    navigate("../");
  }

  return (
    <Modal onClose={handleClose}>
      <EventForm inputData={null}>
        <Link to="../" className="button-text">
          Cancel
        </Link>
        <button type="submit" className="button">
          Update
        </button>
      </EventForm>
    </Modal>
  );
}
