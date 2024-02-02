import { useState } from "react"

export const Addtask = ({Addtask}) => {
   
    const [text, settext] = useState('')
    const [day, setday] = useState('')
    const [reminder, setreminder] = useState(false)
const onSubmit=(e)=>
{
    e.preventDefault()
    if(!text.trim())
    {
        alert('pleas add text')
        return
    }
    Addtask({text,day,reminder})
    settext('')
    setreminder('')
    setday('')
}
    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className='form-control'>
                <label> Task</label>
                <input type="text" placeholder="add task" value={text} onChange={(e) => {
                    settext(e.target.value)
                }} />

            </div>
            <div className='form-control '>
                <label> DAy and Time</label>
                <input type="text" placeholder="add task" value={day} onChange={(e) => {
                    setday(e.target.value)}}
                />

            </div>
            <div className='form-control form-control-check'>
                <label> Reminder</label>
                <input type="checkbox" placeholder="add task" value={reminder} onChange={(e) => {
                    setreminder(e.currentTarget.checked)
                }} />

            </div>
            <button type='submit'  className="btn btn-block" >save</button>
        </form>
    )
}
