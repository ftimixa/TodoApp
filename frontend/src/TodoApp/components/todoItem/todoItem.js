import React from 'react';
import PropTypes from 'prop-types';

import { TaskListBtn } from '../todoBtns/todoBtns';

import classes from './todoItem_style';

const TodoItem = ({ description, executor, priority, removeTask, id, changePriority}) => (
  <div className={classes.bodyList}>
    <div className={classes.bodyItem}>{description}</div>
    <div className={classes.bodyItem}>{executor}</div>
    <div className={classes.bodyItem}>{priority}
      <TaskListBtn
        priority={priority}
        changePriority={changePriority}
        removeTask={removeTask}
        id={id}
      />
    </div>
  </div>
);


TodoItem.propTypes = {
  id: PropTypes.number,
  description: PropTypes.string,
  executor: PropTypes.string,
  priority: PropTypes.number,
  removeTask: PropTypes.func,
  changePriority: PropTypes.func,
}
TodoItem.defaultProps = {
  id: 0,
  description: '',
  executor: '',
  priority: 0,
  removeTask: () => {},
  changePriority: () => {},
}

export default TodoItem;
