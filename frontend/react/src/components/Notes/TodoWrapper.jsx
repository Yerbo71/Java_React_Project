import React, {useState} from 'react'
import { v4 as uuidv4} from 'uuid';
import { TodoForm } from './TodoForm';
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';
import {Heading, Stack} from "@chakra-ui/react";


uuidv4();

export const TodoWrapper = () => {
    const[todos, setTodos] = useState([])

    const addTodo = todo =>{
        setTodos([...todos, {id: uuidv4(), task: todo, completed:false, isEditing:false}])
        console.log(todos)
    }

    const toggleComplete = id =>{
        setTodos(todos.map(todo=> todo.id === id ? {...todo, completed: !todo.completed}: todo))
    }
    // DELETE
    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !==id))
    }
    // PUT
    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? {... todo, isEditing: !todo.isEditing}: todo))
    }
    const editTask = (task, id) =>{
        setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing}: todo))
    }
    return (
        <Stack>

            wrap={'wrap'}>
            <Heading
                alignSelf={'center'}
                marginTop={'15px'}
            >Get Things Done
            </Heading>

            <TodoForm addTodo={addTodo} />
            {todos.map((todo, index) =>
                todo.isEditing
                    ? <EditTodoForm editTodo={editTask} task={todo} />
                    : <Todo
                        task={todo}
                        key={index}
                        toggleComplete={toggleComplete}
                        deleteTodo={deleteTodo}
                        editTodo={editTodo}
                    />
            )}
        </Stack>
    );

};
