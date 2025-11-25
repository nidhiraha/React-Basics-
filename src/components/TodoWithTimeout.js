import React, { useState, useEffect } from "react";

function TodoWithTimeout() {
 
    const [list, setList] = useState([]);
    const [input, setInput] = useState('');

   useEffect(() => {
  const intervals = [];

  list.forEach((lt, index) => {
    if (lt.running === true) {
      const interval = setInterval(() => {
        setList(prev => {
          const updatedList = [...prev];
          const current = updatedList[index];
          const newCount = current.count + 1;

          updatedList[index] = {
            ...current,
            count: newCount,
            format: `${Math.floor(newCount / 60)
              .toString()
              .padStart(2, "0")}:${Math.floor(newCount % 60)
              .toString()
              .padStart(2, "0")}`,
          };

          return updatedList;
        });
      }, 1000);

      intervals.push(interval);
    }
  });

  return () => {
    intervals.forEach(clearInterval);
  };
}, [list]);



const handleAdd = () => {
        if (input.trim() != '') {
            const newList = [...list, {
                name: input,
                running: false,
                count: 0,
              format: "00:00",
                buttonText:'Start'
            }];
          setList(newList);
          setInput("");
        }
    }

    const handleDelete = (id) => {
        const updatedList = [...list];
        updatedList.splice(id, 1);
        setList(updatedList);
    }
   const handleReset = (id) => {
  const updatedList = list.map((lt, i) => {
    if (i === id) {
      return {
        ...lt,
        count: 0,
        format: "00:00",
        running: false,
        buttonText: "Start",
      };
    }
    return lt;
  });
  setList(updatedList);
};


     const handleStart = (id) => {
        const updatedList = list.map((lt, index) => {
            if (index == id) {
                const obj = {
                    ...lt,
                  running: !lt.running,
                    buttonText:lt.buttonText == 'Start' ? 'Pause':'Start'
                };
                return obj;
            }
            return lt;
        });
       setList(updatedList);
    }


  return (
    <div className="todo-container">
      <h2>Todo with Timer</h2>
      <div className="input-container">
        <input
          type="text"
          className="todo-input"
          data-testid="todo-input"
          placeholder="Enter todo"
          value={input}
         onChange = {
                (e) => {
                    setInput(e.target.value);
                }
            }
        />
        <button
          className="add-button"
          data-testid="add-button"
          onClick={() => { handleAdd() }}
        >
          Add
        </button>
      </div>
      {list.length > 0 && <ul className="todo-list">
        {/* Map through your todos here */}
        {list.map((lt, index) => {
          return (
            <li data-testid="todo-item" className="todo-item" key={index}>
              <span className="todo-text">{lt.name}</span>
              <div className="timer">{lt.format}</div>
              <div className="button-group">
                <button className="timer-button start" onClick={() => { handleStart(index) }}>{lt.buttonText}</button>
                <button className="timer-button reset" onClick={() => { handleReset(index) }}>Reset</button>
                <button className="delete-button" onClick={() => { handleDelete(index) }}>Delete</button>
              </div>
            </li>
          );
        })}
      </ul>}
    </div>
  );
}

export default TodoWithTimeout;
