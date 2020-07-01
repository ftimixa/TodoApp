import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import TodoItem from '../todoItem/todoItem';

const TodoList = ({ tasks, removeTask, changePriority }) => (
  <Fragment>
    {tasks.sort((a, b) => {return b.priority - a.priority}).map(({ id, description, executor, priority }) => (
        <TodoItem
          changePriority={changePriority}
          removeTask={removeTask}
          id={id}
          key={id}
          description={description}
          executor={executor}
          priority={priority}
        />
    ))}
  </Fragment>
);

TodoList.propTypes = {
  tasks: PropTypes.array,
  removeTask: PropTypes.func,
  changePriority: PropTypes.func,
}
TodoList.defaultProps = {
  tasks: [],
  removeTask: () => {},
  changePriority: () => {},
}

export default TodoList;
