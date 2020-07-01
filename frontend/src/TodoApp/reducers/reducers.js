import {USERS_LOADED, USERS_ERROR, TASKS_LOADED, TASKS_ERROR, TASKS_REQUESTED } from '../../constants';
import {usersLoaded, tasksLoaded, usersError, tasksError} from '../actions/actionCreator';

const initialStateUsers = {
  users: [],
  error: null
}

export const usersReducer = (state = initialStateUsers, {type, users, error}) => {
  switch (type) {
    case USERS_LOADED:
      return {
        users,
        error: null,
      }
    case USERS_ERROR:
      return {
        users: [],
        error: error,
      }
    default:
      return state;
  }
}

const initialStateTasks = {
  tasks: [],
  loaded: true,
  error: null
}

export const tasksReducer = (state = initialStateTasks, { type, tasks, error }) => {
  switch (type) {
    case TASKS_REQUESTED:
      return {
        tasks: [],
        loaded: true,
        error: null,
      }
    case TASKS_LOADED:
      return {
        tasks,
        loaded: false,
        error: null,
      }
    case TASKS_ERROR:
      return {
        tasks: [],
        loaded: false,
        error,
      }
    default:
      return state;
  }
}

export const loadUsers = () => async (dispatch) => {
  await fetch("/api/users")
  .then(res => res.json())
  .then(users => dispatch(usersLoaded(users)))
  .catch(err => dispatch(usersError(err)))
}

export const loadTasks = () => async (dispatch) => {
  await fetch("/api/tasks")
  .then(res => res.json())
  .then(tasks => dispatch(tasksLoaded(tasks)))
  .catch(err => dispatch(tasksError(err)))
}

export const saveTask = (task) => async (dispatch) => {
  await fetch("/api/tasks", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json'
    },
    body: JSON.stringify(task)
  })
  .then(res => res.json())
  .then(tasks => dispatch(tasksLoaded(tasks)))
}

export const changePriority = (id, nameAction) => async (dispatch) => {
  await fetch(`/api/tasks/${id}`, {
    method: "PUT",
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json'
    },
    body: JSON.stringify({nameAction})
  })
  .then(res => res.json())
  .then(tasks => dispatch(tasksLoaded(tasks)))
}

export const removeTask = (id) => async (dispatch) => {
  await fetch(`/api/tasks/${id}`, {
    method: "DELETE",
  })
  .then(res => res.json())
  .then(tasks => dispatch(tasksLoaded(tasks)))
}
