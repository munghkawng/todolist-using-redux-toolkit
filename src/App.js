import "./App.css";
import UpdateModal from "./components/UpdateModal";
import theme from "./theme";
import moment from "moment";
import {
  ChakraProvider,
  Box,
  Center,
  Text,
  Input,
  Button,
  HStack,
  Flex,
  Spacer,
  Checkbox,
  useToast,
  ScaleFade,
} from "@chakra-ui/react";

import { useSelector, useDispatch } from "react-redux";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import DeleteModal from "./components/Modal";
import {
  openModal,
  openUpdateTaskModal,
  editToDoList,
} from "./features/modal/modalSlice";
import {
  addToDoList,
  handleInput,
  checkFinishedTask,
} from "./features/todolist/todolistSlice";
import ColorModeToggler from "./components/ColorModeToggler";

function App() {
  const { todolists, value } = useSelector((store) => store.todolist);
  const { isOpen, updateTask } = useSelector((store) => store.modal);

  const toast = useToast();

  const dispatch = useDispatch();

  const addTaskHandler = (e) => {
    e.preventDefault();
    if (value.trim() === "") {
      toast({
        position: "top",
        title: "Input is Empty",

        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    dispatch(
      addToDoList({
        id: Math.random().toString(),
        task: value,
        completed: false,
      })
    );
  };

  const handleChange = (e) => {
    dispatch(handleInput(e.target.value));
  };

  return (
    <ChakraProvider theme={theme}>
      <Flex justify="flex-end" mx="1" mt="1">
        <ColorModeToggler />
      </Flex>

      {updateTask && <UpdateModal />}
      {isOpen && <DeleteModal />}
      <Box>
        <Center>
          <Text
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontSize="5xl"
            fontWeight="extrabold"
          >
            ToDo List
          </Text>
        </Center>
        <Flex justify="center" mb="5">
          <Text color="purple">{moment().format("dddd MMMM Do YYYY")}</Text>
        </Flex>
        {/* add goal section */}
        <Box w={{ base: "90%", md: "25%" }} m="auto">
          <form>
            <HStack mb="10">
              <Input
                placeholder="Enter Your Task"
                size="lg"
                value={value}
                onChange={handleChange}
              />
              <Button
                type="submit"
                colorScheme="purple"
                size="md"
                px={7}
                py="6"
                onClick={addTaskHandler}
              >
                Add
              </Button>
            </HStack>
          </form>
        </Box>
        {todolists.map((task) => {
          return (
            <ScaleFade initialScale={0.5} in={true}>
              <Box
                key={task.id}
                m="auto"
                w={{ base: "90%", md: "30%" }}
                border="1px"
                borderColor="gray.300"
                py="2"
                px="6"
                borderRadius="6"
                my="4"
              >
                <Flex my="2">
                  <HStack>
                    <Checkbox
                      size="md"
                      colorScheme="green"
                      onChange={() => dispatch(checkFinishedTask(task))}
                    />
                    <div className={`${task.completed ? "todo" : ""}`}>
                      {task.task}
                    </div>
                  </HStack>
                  <Spacer />
                  <HStack>
                    <Button
                      size="sm"
                      onClick={() => {
                        dispatch(editToDoList(task.task));
                        dispatch(openUpdateTaskModal(task));
                      }}
                    >
                      <EditIcon color="purple.500" />
                    </Button>
                    <Button
                      size="sm"
                      onClick={() =>
                        dispatch(
                          openModal({
                            heading: "Do You Really Want To Delete",
                            task: task.task,
                            id: task.id,
                          })
                        )
                      }
                    >
                      <DeleteIcon color="red.500" />
                    </Button>
                  </HStack>
                </Flex>
              </Box>
            </ScaleFade>
          );
        })}
        {todolists.length !== 0 && (
          <Center>
            <Button
              color="red"
              onClick={() => {
                dispatch(
                  openModal({ heading: "Do You Really Want To Delete All" })
                );
              }}
            >
              Delete All
            </Button>
          </Center>
        )}
      </Box>
    </ChakraProvider>
  );
}

export default App;
