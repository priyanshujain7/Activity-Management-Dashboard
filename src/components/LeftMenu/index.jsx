import React, { useState } from "react";
import "../LeftMenu/styles.scss";
import employees from "../../assets/images/employees.png";
import addIcon from "../../assets/images/add.png";
import { Button, Modal } from "react-bootstrap";
import leftMenuData from "../../utils/constants/config";

const LeftMenu = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const setLink = (val) => {
    console.log("val", val);
  };
  return (
    <>
      <div className="left-menu d-md-block d-sm-none">
        <div className="btn-left-menu" onClick={handleShow}>
          <img src={addIcon} alt="Add" height="30" width="30" />
          <span className="add-text">Add Link</span>
        </div>
        <div className="link-main">
          {leftMenuData.map((item, idx) => {
            const { href, src, label } = item || {};
            return (
              <a className="link-prop" href={href} target="_blank" key={idx}>
                <div className="label-group">
                  <img src={src} alt="Link" />
                  <span className="label-text">{label}</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      <div className="m-left-menu d-block d-sm-none">
        <a className="m-link-prop" href="www.google.com">
          <div className="m-label-group">
            <img src={employees} alt="Link" />
            <span className="m-label-text">Google</span>
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
