import React from 'react';

import PropTypes from 'prop-types';

import classes from './todoBtns_style';


export const TaskListBtn = ({ priority, id, removeTask, changePriority }) => {
  if(priority === 10) {
    return(
      <div className={classes.btnItem}>
        <button onClick={() => removeTask(id)} className={`${classes.btn} ${classes.btnTaskList}`} >Удалить</button>
        <button name='decrease' onClick={(e) => changePriority(id, e.target.name)} className={`${classes.btn} ${classes.btnTaskList}`} >Понизить приоритет</button>
      </div>
    );
  } else if (priority === 0) {
    return(
      <div className={classes.btnItem}>
        <button onClick={() => removeTask(id)} className={`${classes.btn} ${classes.btnTaskList}`} >Удалить</button>
        <button name='increase' onClick={(e) => changePriority(id, e.target.name)} className={`${classes.btn} ${classes.btnTaskList}`} >Повысить приоритет</button>
      </div>
    );
  } else {
    return(
      <div className={classes.btnItem}>
        <button onClick={() => removeTask(id)} className={`${classes.btn} ${classes.btnTaskList}`} >Удалить</button>
        <button name='increase' onClick={(e) => changePriority(id, e.target.name)} className={`${classes.btn} ${classes.btnTaskList}`} >Повысить приоритет</button>
        <button name='decrease' onClick={(e) => changePriority(id, e.target.name)} className={`${classes.btn} ${classes.btnTaskList}`} >Понизить приоритет</button>
      </div>
    );
  }
}

export const InputBtn = ({ onClick }) => (
  <button onClick={onClick}  className={`${classes.btn} ${classes.btnAddTask}`}>Добавить задачу</button>
);

TaskListBtn.propTypes = {
  id: PropTypes.number,
  priority: PropTypes.number,
  removeTask: PropTypes.func,
  changePriority: PropTypes.func,
}
TaskListBtn.defaultProps = {
  id: 0,
  priority: 0,
  removeTask: () => {},
  changePriority: () => {},
}

InputBtn.propTypes = {
  onClick: PropTypes.func,
}
InputBtn.defaultProps = {
  onClick: () => {},
}
