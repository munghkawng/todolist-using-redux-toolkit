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
  useToast,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { closeModal, editToDoList } from "../features/modal/modalSlice";
import { updateTodoList } from "../features/todolist/todolistSlice";
function UpdateModal() {
  const dispatch = useDispatch();
  const { updateTask, todoUpdate, editValue } = useSelector(
    (store) => store.modal
  );

  const toast = useToast();

  const handleChange = (e) => {
    dispatch(editToDoList(e.target.value));
  };

  const handleUpdate = () => {
    if (editValue.trim() === "") {
      toast({
        position: "top",
        title: "Input is Empty",

        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    dispatch(updateTodoList({ id: todoUpdate.id, task: editValue }));

    dispatch(closeModal());
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
            <Input value={editValue} onChange={handleChange} />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button onClick={() => dispatch(closeModal())}>Cancel</Button>
          <Button colorScheme="purple" ml={3} onClick={handleUpdate}>
            Update
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default UpdateModal;
