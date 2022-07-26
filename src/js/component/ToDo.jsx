import React, { useState } from "react";

export const ToDo = () => {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState("");
  const [isShown, setIsshown] = useState(-1);

  const handlerTask = (event) => {
    setTask(event.target.value);
  };
  const handlerKeyPress = (event) => {
    // event.preventDefault();

    if (event.key === "Enter") {
      if (task != "") {
        setTaskList([...taskList, task]);
        setTask("");
      }
    }
  };

  const handlerButtomDelete = (indexid) =>
    setTaskList(taskList.filter((tarea, index) => index != indexid));
  // factorizando el codigo

  return (
    <div className="row mt-5">
      <div className="col-3"></div>
      <div className="col-6">
        <div className="Card " id="card">
          <div className="form-floating mb-3 form-control border-primary">
            <input
              onChange={handlerTask}
              value={task}
              onKeyDown={handlerKeyPress}
              type="text"
              className="form-control text-primary text-opacity-75"
              id="floatingInput"
              placeholder="Tasks to do"
            />
            <label
              htmlFor="floatingInput"
              className="text-primary text-opacity-50"
            >
              {" "}
              <h6>
              {taskList.length != 0 ? (
                <>Tienes {taskList.length} tareas pendientes</>
              ) : (
                <> No tienes tareas pendientes, agrega una</>
              )}
            </h6>{" "}
            </label>
            {taskList.map((tarea, i) => {
              return (
                <div className="Card card m-1" key={1} 
                onMouseEnter={()=>{setIsshown(i)}} onMouseLeave={()=>{setIsshown(-100)}}>
                  <div className="modal-header">
                    <h4 className="modal-title text-primary fw-bolder">
                      {" "}
                      {tarea}
                    </h4>
                    { isShown == i &&
                    <button
                      type="button"
                      className="elem btn-close btn-primary"
                      onClick={(event) => handlerButtomDelete(i)}
                    ></button>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
