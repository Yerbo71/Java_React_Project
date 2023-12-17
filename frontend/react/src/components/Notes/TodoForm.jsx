import React, {useState} from 'react'
import { Input, Button, Flex } from '@chakra-ui/react';
export const TodoForm = ({addTodo}) => {
    const[value, setValue] = useState("")
    const handleSubmit = e =>{
        e.preventDefault();
        addTodo(value);
        setValue("")
    }
    return (
        <Flex
            as="form"
            onSubmit={handleSubmit}
            align="center"
            padding={'30px'}
        >
            <Input
                type='text'
                className='todo-input'
                value={value}
                placeholder='What is the task today?'
                onChange={(e) => setValue(e.target.value)}
                mb={0}
            />
            <Button
                type='submit'
                className='todo-btn'
                variant="solid"
                colorScheme="teal"
                disabled={!value}
                marginLeft={2}
            >
                Add Task
            </Button>
        </Flex>
    )
}
