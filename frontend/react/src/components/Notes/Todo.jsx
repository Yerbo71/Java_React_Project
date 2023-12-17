import React from 'react'
import { Box, Text, IconButton } from "@chakra-ui/react";
import { FaPenSquare, FaTrash } from "react-icons/fa";


export const Todo = ({task,toggleComplete ,deleteTodo,editTodo}) => {
    return (
        <Box
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p={4}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            bg={task.completed ? "gray.200" : "white"}
        >
            <Text
                onClick={() => toggleComplete(task.id)}
                className={task.completed ? "completed" : ""}
                flex="1"
            >
                {task.task}
            </Text>
            <Box>
                <IconButton
                    className="Edit"
                    icon={<FaPenSquare />}
                    onClick={() => editTodo(task.id)}
                    mr={2}
                    _hover={{ bg: "blue.300" }}
                />
                <IconButton
                    className="Trash"
                    icon={<FaTrash />}
                    onClick={() => deleteTodo(task.id)}
                    _hover={{ bg: "red.300" }}
                />
            </Box>
        </Box>
    )
}
