import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {loadUsers, loadTasks, saveTask, removeTask, changePriority} from '../reducers/reducers';
import { tasksRequested } from '../actions/actionCreator';

import TodoInput from '../components/todoInput/todoInput';
import TodoList from '../components/todoList/todoList';
import AppTitle from '../components/appTitle/appTitle';

import classes from './todoBody_style';


const TodoBody = () => {
  
  const users = useSelector(state => state.usersReducer.users);
  const userError = useSelector(state => state.usersReducer.error);
  const tasks = useSelector(state => state.tasksReducer.tasks);
  const tasksLoading = useSelector(state => state.tasksReducer.loaded);
  const tasksError = useSelector(state => state.tasksReducer.error);
  
  const dispatch = useDispatch();
  
  const onAddTask = (task) => {
    dispatch(saveTask(task))
  }

  const onChangePriority = (id, nameAction) => {
    dispatch(changePriority(id, nameAction))
  }

  const onRemoveTask = (id) => {
    dispatch(removeTask(id))
  }

  useEffect(() => {
    dispatch(loadUsers())
    dispatch(tasksRequested())
    dispatch(loadTasks())
  }, [dispatch])
    
  return (
    <div className={classes.todoBody}>
      <AppTitle title='Список задач' /> 
      <TodoInput error={userError} users={users} addTask={onAddTask} />
      {tasksLoading? <p>Загрузка задач</p>: tasksError? <p>Ошибка загрузки</p>: <TodoList tasks={tasks} changePriority={onChangePriority} removeTask={onRemoveTask} />} 
    </div>
  );
}

export default TodoBody;