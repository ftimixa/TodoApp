import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { InputBtn } from '../todoBtns/todoBtns';

import classes from './todoInput_style';

class TodoInput extends Component {
   state = {
     description: '',
     executor: '',
     priority: '',
     descrError: 'initial',
     execError: 'initial',
     priorError: 'initial',
   };

   handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
   };

   validateDescription = () => {
     const {description} = this.state;
     let descrError = (description === '')? 'Введите описание': '';
      this.setState({ descrError });
   };
   validateExecutor = () => {
     const {executor} = this.state;
     let execError = (executor === '' || executor === 'Не выбрано' )? 'Выберите исполнителя': '';
      this.setState({ execError });
   };
   validatePriority = () => {
     const {priority} = this.state;
     let priorError = (priority.length > 0 && priority.length <= 2 && priority >= 0 && priority <= 10)? '': 'Задайте приоритет от 0 до 10';
       this.setState({ priorError });
   };
   hintError = (name) => {
     return(name === 'initial'? '': name !== '' ? classes.hintError :classes.hintValid);
   };


   addTask = (e) => {
     e.preventDefault();
     const {description, executor, priority, descrError, execError, priorError} = this.state;
     const {addTask} = this.props;
     
      if((!descrError && description !== '') && (!execError && executor !== '') && (!priorError && priority !== '')) {
        
        const id = (new Date()).getTime()
        const priority = Number(this.state.priority)
        const task = {id, description, executor, priority};
        addTask(task);

        this.setState({
          description: '',
          executor: '',
          priority: '',
          descrError: 'initial',
          execError: 'initial',
          priorError: 'initial',
        })
      }
      if(description === '') {
        this.setState({descrError: 'Введите описание' })
      }
      if(executor === '') {
        this.setState({execError: 'Выберите исполнителя' })
      }
      if(priority === '') {
        this.setState({priorError: 'Задайте приоритет от 0 до 10' })
      }
    };

   render(){
     const {users, error} = this.props;
     const {description, executor, priority, descrError, execError, priorError} = this.state;

     return(
       <div className={classes.bodyForm} >
         <form>
           <textarea
           name='description'
           placeholder='Описание'
           value={description}
           onKeyUp={this.validateDescription}
           onBlur={this.validateDescription}
           onChange={this.handleChange}
           className={`${this.hintError(descrError)} ${classes.textarea} ${classes.textareaDescription}`}
           />
           <select 
            onBlur={this.validateExecutor} 
            name='executor' 
            onChange={this.handleChange} 
            value={executor} 
            className={`${this.hintError(execError)} ${classes.select}`}
            >
           {error? <option>Ошибка загрузки списка пользователей</option>: users.map(({id, name}) => (
                <option key={id}>{name}</option>
             ))}
           </select>
           <textarea
           name='priority'
           placeholder='Приоритет'
           onKeyUp={this.validatePriority}
           onBlur={this.validatePriority}
           onChange={this.handleChange}
           value={priority}
           className={`${this.hintError(priorError)} ${classes.textarea} ${classes.textareaPriority}`}
           />
           <InputBtn onClick={this.addTask}/>
         </form>
       </div>
     );
   }
}

TodoInput.propTypes = {
  users = PropTypes.array,
}
TodoInput.defaultProp = {
  users = [],
}

export default TodoInput;
