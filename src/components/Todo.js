import{useState} from 'react'

function Todo(props) {
    const [showmodel,setmodelisopen]=useState(false)
    function deleteHandler() {
        setmodelisopen()
     }
    return (
        <div className="class">
            srikanth
            <div>{props.text}</div>
            <button onClick={deleteHandler}>Delete</button>
        </div>
    );
}

export default Todo;
