import {Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";

export const InfoModal = ({ title, bodyText, setShow, show }:{ title: string, bodyText: string, setShow: any, show: boolean }) => {

    const handleModal = () => {
        setShow(false)
        window.location.reload()
    }

  return (
      <Modal show={show}>
          <Modal.Header closeButton>
              <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{bodyText}</Modal.Body>
          <Modal.Footer>
              <Button variant="secondary" onClick={handleModal}>
                  Close
              </Button>
          </Modal.Footer>
      </Modal>
  )
}
