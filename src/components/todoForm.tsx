import { useState } from "react";
import { Box, Button, Input, Text, Heading } from "@chakra-ui/react";
import { ITodos } from "../interface";

function TodoFrom({
  todos,
  setTodos,
  count,
}: {
  todos: ITodos[];
  setTodos: React.Dispatch<React.SetStateAction<ITodos[]>>;
  count: number;
}) {
  const [input, setInput] = useState<string>("");

  const addTask = () => {
    if (input) {
      const checkDups = todos.filter(
        (i) => i.task.toLowerCase() === input.toLowerCase()
      );
      if (checkDups.length > 0) {
        alert("Task sudah ada");
      } else {
        const newArr: ITodos[] = [...todos, { task: input, isChecked: false }];
        setTodos(newArr);
      }
    }
  };
  return (
    <Box>
      <hr />
      <Heading size="lg" textAlign="center" mb="2rem" mt="0.5rem">
        Done: {count}
      </Heading>
      <Text mb="0.25rem" sx={{ fontSize: "14px" }}>
        Add todo
      </Text>
      <Input size="md" mb="1rem" onChange={(e) => setInput(e.target.value)} />
      <Button sx={{ backgroundColor: "#90cdf4" }} onClick={() => addTask()}>
        ADD TASK
      </Button>
    </Box>
  );
}
export default TodoFrom;
