import { Box, Checkbox, Stack, Text } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { ITodos } from "../interface";

function todoList({
  todos,
  setTodos,
  count,
  setCount,
}: {
  todos: ITodos[];
  setTodos: React.Dispatch<React.SetStateAction<ITodos[]>>;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}) {
  const checked = (input: ITodos) => {
    if (input.isChecked) {
      input.isChecked = false;
      setCount(count - 1);
    } else {
      input.isChecked = true;
      setCount(count + 1);
    }
  };

  const deleteTask = (input: ITodos) => {
    const newArr = todos.filter((i) => i.task !== input.task);
    setTodos(newArr);
    if (input.isChecked) setCount(count - 1);
  };
  return (
    <Box>
      {todos.length > 0 &&
        todos.map((item, idx) => (
          <Box key={idx} mb="0.6rem">
            <Stack direction="row" alignItems="center" justifyContent="center">
              <Box sx={{ width: "80%" }}>
                <Checkbox
                  isChecked={item.isChecked}
                  onChange={() => checked(item)}
                  spacing={10}
                  borderColor="green"
                  colorScheme="green"
                >
                  {item.isChecked ? (
                    <Text sx={{ textDecoration: "line-through" }}>
                      {" "}
                      {item.task}
                    </Text>
                  ) : (
                    <Text>{item.task}</Text>
                  )}
                </Checkbox>
              </Box>
              <DeleteIcon
                boxSize={8}
                padding={2}
                sx={{
                  color: "#ffb3b3",
                  borderRadius: "5px",
                  borderColor: "#ffb3b3",
                  borderStyle: "Solid",
                  borderWidth: "1px",
                }}
                onClick={() => deleteTask(item)}
              />
            </Stack>
          </Box>
        ))}
    </Box>
  );
}

export default todoList;
