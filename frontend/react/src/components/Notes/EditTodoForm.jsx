import React, {useState} from 'react'
import { Flex, Input, Button } from "@chakra-ui/react";
export const EditTodoForm = ({editTodo,task}) => {
  const[value, setValue] = useState(task.task)
  const handleSubmit = e =>{
    e.preventDefault();
    editTodo(value,task.id);
    setValue("")
  }
  return (
      <Flex
          as="form"
          onSubmit={handleSubmit}
          direction="column" // Adjust the direction as needed
          align="center"
          padding={'30px'}
      >
          <Input
              type='text'
              className='todo-input'
              value={value}
              onChange={(e) => setValue(e.target.value)}
              mb={2}
          />
          <Button
              type='submit'
              className='todo-btn'
              variant="solid"
              colorScheme="teal"
              disabled={!value}
          >
              Update Task
          </Button>
      </Flex>
  )
}
