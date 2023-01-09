import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  Input,
  Button,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../features/modal/modalSlice";
import {
  handleInput,
  updateTodoList,
} from "../features/todolist/todolistSlice";
function UpdateModal() {
  const dispatch = useDispatch();
  const { updateTask, todoUpdate } = useSelector((store) => store.modal);
  const { value } = useSelector((store) => store.todolist);

  const handleChange = (e) => {
    dispatch(handleInput(e.target.value));
  };

  return (
    <Modal
      isOpen={updateTask}
      onClose={() => dispatch(closeModal())}
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Update Your Task</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <Input value={value} onChange={handleChange} />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button onClick={() => dispatch(closeModal())}>Cancel</Button>
          <Button
            colorScheme="purple"
            ml={3}
            onClick={() => {
              dispatch(updateTodoList(todoUpdate.id));
              dispatch(closeModal());
            }}
          >
            Update
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default UpdateModal;
