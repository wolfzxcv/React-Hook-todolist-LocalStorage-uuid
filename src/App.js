import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Todo from './Todo';
import Filter from './Filter';
import uuid from 'uuid';

const App = ({ className }) => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [display, setDisplay] = useState([]);

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem('localStorageTodos')) || []);
    setDisplay(JSON.parse(localStorage.getItem('localStorageTodos')) || []);
  }, []);

  const setLocalStorage = (dataSaveInLS) => {
    setTodos(dataSaveInLS);
    setDisplay(dataSaveInLS);
    localStorage.setItem('localStorageTodos', JSON.stringify(dataSaveInLS));
  };

  const addTodo = (e) => {
    e.preventDefault();
    if (input.trim().length < 3) return alert('please add more than 3 letters');
    const newTodo = { id: uuid.v4(), title: input, completed: false };
    const dataSaveInLS = [...todos, newTodo];
    setInput('');
    setLocalStorage(dataSaveInLS);
  };

  const removeTodo = (id) => {
    const dataSaveInLS = todos.filter((todo) => todo.id !== id);
    setLocalStorage(dataSaveInLS);
  };

  const markCom = (id) => {
    const dataSaveInLS = todos.map((todo) => {
      if (todo.id === id) return { ...todo, completed: !todo.completed };
      return todo;
    });
    setLocalStorage(dataSaveInLS);
  };

  const all = () => setDisplay(todos);

  const active = () =>
    setDisplay(todos.filter((todo) => todo.completed === false));

  const done = () =>
    setDisplay(todos.filter((todo) => todo.completed === true));

  return (
    <div className={className}>
      <div className='title'>
        <div>The things that you forget,</div>
        <div>are the things not that important...</div>
      </div>

      <div className='add-something'>
        <div>Add something</div>
        <div className='computer'>, and press 'ENTER' to input</div>
      </div>

      <div className='body'>
        <form onSubmit={addTodo}>
          <input
            className='inputbox'
            type='text'
            placeholder='What should I do later...'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className='add'>Add</button>
        </form>
      </div>

      <div>
        {display.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            todos={todo.title}
            completed={todo.completed}
            removeTodo={removeTodo}
            markCom={markCom}
          />
        ))}
      </div>
      <Filter all={all} active={active} done={done} />
    </div>
  );
};

App.propTypes = {
  className: PropTypes.string
};

const StyledApp = styled(App)`
  text-align: center;
  font-size: 32px;
  letter-spacing: 2px;

  .title {
    font-family: oblique, serif;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffe4c4;
    background-color: #5f9ea0;
    div {
      display: flex;
    }
  }

  .add-something {
    height: 100px;
    font-size: 20px;
    font-family: 'Comic Sans MS', cursive, sans-serif;
    padding-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #483d8b;
    background-color: #5f9ea0;
  }

  .body {
    color: #5f9ea0;
    background-color: #ffe4c4;
    display: flex;
    flex-direction: column;
  }

  .inputbox {
    padding: 10px;
    width: 300px;
    height: 30px;
    border-radius: 5px;
    border: 2px solid gray;
    background: rgba(4, 93, 93, 0.7);
    color: white;
    font-size: 24px;
  }

  @media (min-width: 769px) {
    input {
      margin: 50px 20px;
    }

    .add {
      display: none;
    }
  }

  @media (max-width: 768px) {
    input {
      margin: 50px 20px 20px 20px;
    }

    .add {
      margin-top: 20px;
      margin-bottom: 50px;
      width: 330px;
      height: 50px;
      border-radius: 10px;
      font-size: 20px;
      color: #ffe4c4;
      background-color: #8b4513;
    }

    .computer {
      display: none;
    }
  }

  @media (min-width: 900px) {
    .title {
      flex-direction: row;
    }
  }

  @media (max-width: 899px) {
    .title {
      flex-direction: column;
    }
  }
`;
StyledApp.displayName = 'App';

export default StyledApp;
