import React from 'react';
import {Button, Modal} from "@mui/material";

export default function BasicModal({cusClass, openState, closeState, children}) {
  return (
    <Modal
      className={cusClass}
      open={openState}
      onClose={closeState}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {children}
    </Modal>

  );
}


