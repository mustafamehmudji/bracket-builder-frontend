import React from "react";
import { Button, ModalProps } from "react-bootstrap";
import { Modal } from "react-bootstrap";

interface IProps extends ModalProps {
  selectedImage?: string;
}

const FixtureImageModal: React.FC<IProps> = ({
  show,
  onHide,
  selectedImage,
}) => {
  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Fixtures</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {selectedImage && (
          <div>
            <img className="w-100" src={selectedImage} alt="Fixture Image" />
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FixtureImageModal;
