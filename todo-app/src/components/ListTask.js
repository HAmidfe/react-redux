import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const ListTask = () => {
  const todos = useSelector((state) => state.todos);
  const showDoneTasks = useSelector((state) => state.showDoneTasks);

  const filteredTodos = todos.filter((todo) => showDoneTasks || !todo.isDone);

  return (
    <ul>
      {filteredTodos.map((todo) => (
        <Task key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default ListTask;
