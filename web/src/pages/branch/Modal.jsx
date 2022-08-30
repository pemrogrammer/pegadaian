import React, { useState } from "react";

import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const Modal = ({ titleForm, modal, toggle }) => {
  return (
    <>
      <Modal size="lg" isOpen={modal} toggle={toggle}>
        <ModalHeader
          toggle={toggle}
          close={
            <button className="close" onClick={toggle}>
              <Icon name="cross" />
            </button>
          }
        >
          {titleForm}
        </ModalHeader>
        <ModalBody>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem similique earum necessitatibus nesciunt!
            Quia id expedita asperiores voluptatem odit quis fugit sapiente assumenda sunt voluptatibus atque facere
            autem, omnis explicabo.
          </p>
        </ModalBody>
        <ModalFooter className="bg-light">
          <span className="sub-text">Modal Footer Text</span>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default Modal;
