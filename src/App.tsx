import { useState } from "react";
import { Container, Box, Heading } from "@chakra-ui/react";
import { ITodos } from "./interface";

import TodoForm from "./components/todoForm";
import TodoList from "./components/todoList";

function App() {
  const [todos, setTodos] = useState<ITodos[]>([]);
  const [count, setCount] = useState<number>(0);

  return (
    <Container p="2em">
      <Box mx="auto" px="auto" sx={{ color: "white" }}>
        <Box>
          <Heading size="lg" textAlign="center" mb="2rem">
            Chores ToDo List
          </Heading>
        </Box>
        <Box>
          <TodoList
            todos={todos}
            setTodos={setTodos}
            count={count}
            setCount={setCount}
          />
          <TodoForm todos={todos} setTodos={setTodos} count={count} />
        </Box>
      </Box>
    </Container>
  );
}

export default App;
