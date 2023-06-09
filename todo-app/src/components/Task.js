import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, editTodo } from '../redux/actions';

const Task = ({ todo }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleEdit = (e) => {
    const newDescription = e.target.textContent;
    dispatch(editTodo(todo.id, newDescription));
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.isDone}
        onChange={handleToggle}
      />
      <span contentEditable onBlur={handleEdit}>
        {todo.description}
      </span>
    </li>
  );
};

export default Task;
