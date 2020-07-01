import {USERS_LOADED, USERS_ERROR, TASKS_LOADED, TASKS_REQUESTED, TASKS_ERROR } from '../../constants';

export const usersLoaded = (users) => ({
  type: USERS_LOADED,
  users
});

export const usersError = (error) => ({
  type: USERS_ERROR,
  error
});


export const tasksLoaded = (tasks) => ({
  type: TASKS_LOADED,
  tasks
});

export const tasksError = (error) => ({
  type: TASKS_ERROR,
  error
});

export const tasksRequested = () => ({
  type: TASKS_REQUESTED
});
