import React, { useState } from "react";
import "../LeftMenu/styles.scss";
import employees from "../../assets/images/employees.png";
import addIcon from "../../assets/images/add.png";
import { Button, Modal } from "react-bootstrap";

const LeftMenu = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const setLink = (val) => {
    console.log("val", val);
  };
  return (
    <>
      <div className="left-menu">
        <div>
          <div className="btn-left-menu" onClick={handleShow}>
            <img src={addIcon} alt="Add" height="30" width="30" />
            <span className="add-text">Add Link</span>
          </div>
        </div>
        <a
          className="link-prop"
          href="https://docs.google.com/spreadsheets/d/1eiDkS8qm18cCUiEK3_DGivopNJLlaAXK/edit#gid=110395156"
          target="_blank"
        >
          <div className="label-group">
            <img src={employees} alt="Link" />
            <span className="label-text">Time Sheet</span>
          </div>
        </a>
        <a className="link-prop" href="https://www.google.com/">
          <div className="label-group">
            <img src={employees} alt="Link" />
            <span className="label-text">Gemini Solutions</span>
          </div>
        </a>
        <a className="link-prop" href="https://www.google.com/">
          <div className="label-group">
            <img src={employees} alt="Link" />
            <span className="label-text">Amazon</span>
          </div>
        </a>
        <a className="link-prop" href="https://www.google.com/">
          <div className="label-group">
            <img src={employees} alt="Link" />
            <span className="label-text">GLA University</span>
          </div>
        </a>
      </div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add a Link</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Label=
          <input type="text" onChange={(e) => setLink(e.target.value)} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LeftMenu;
