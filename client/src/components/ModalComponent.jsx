import Modal from "react-modal";
import CreateTaskComponent from "./CreateTaskComponent"


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
  },
};
Modal.setAppElement("#root");

function ModalComponent({ modalIsOpen, setIsOpen }) {

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

return (
  <div>
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <CreateTaskComponent closeModal={closeModal} />
      {/* <CreateTaskComponent /> */}

    </Modal>
  </div>
);
}

export default ModalComponent;
