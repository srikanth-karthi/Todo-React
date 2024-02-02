
import {Task} from "./Taks"

export const Tasks = ({tasks,deletetask,tooglereminder}) => {

    return (

        <>
            {tasks.map((tasks) => (
                <Task key={tasks.id} tooglereminder={tooglereminder} deletetask={deletetask} task={tasks}/>
            ))}
        </>

    )
}
