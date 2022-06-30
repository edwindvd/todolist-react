import React, {useState} from 'react';

export const ToDo = () => {
    const [taskList, setTaskList] = useState([]);
    const [task, setTask] = useState("");
    const handlerTask = (event) => {
        setTask(event.target.value)
    }
    const handlerKeyPress = (event) => {
        // event.preventDefault();

        if(event.key === "Enter") {
        if(task != ""){
            setTaskList([...taskList,task])
            setTask("")
        }
        }
    }
        
return (
    <div className='row mt-5'>
        <div className='col-3'></div>
            <div className='col-6'>
                <div className='Card' id="card">
                    <div className="form-floating mb-3">
                        <input onChange={handlerTask} value={task} onKeyDown={handlerKeyPress} type="text" className="form-control" id="floatingInput" placeholder="Tasks to do"/>
                        <label for="floatingInput">Tarea por hacer</label>
                            {
                                taskList.map((tarea, i)=>{
                                    return ( <h2 key={i} >{tarea}</h2> )
                                })
                            }
                    </div>
                </div>
            </div>
    </div>
)
}

export default ToDo;
