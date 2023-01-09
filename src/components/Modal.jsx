import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  ModalBody,
  Button,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { clearTask, deleteToDoList } from "../features/todolist/todolistSlice";
import { closeModal } from "../features/modal/modalSlice";
function DeleteModal() {
  const { isOpen, message, heading, id } = useSelector((store) => store.modal);
  const dispatch = useDispatch();
  return (
    <Modal isOpen={isOpen} isCentered onClose={() => dispatch(closeModal())}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{heading}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{message}</ModalBody>
        <ModalFooter>
          <Button mr={3} onClick={() => dispatch(closeModal())}>
            Cancel
          </Button>
          <Button
            colorScheme="red"
            onClick={() => {
              if (id) {
                dispatch(deleteToDoList(id));
              } else {
                dispatch(clearTask());
              }
              dispatch(closeModal());
            }}
          >
            Delete
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default DeleteModal;
