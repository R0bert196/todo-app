import Modal from "react-modal";
import CreateTaskComponent from "./CreateTaskComponent";


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

function ModalComponent({ modalIsOpen, setIsOpen }) {



  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

return (
  <div>
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <CreateTaskComponent />
    </Modal>
  </div>
);
}

export default ModalComponent;
