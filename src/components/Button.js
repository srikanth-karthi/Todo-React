

export const Button = ({color,text,showtask}) => {

  return (
    <button onClick={showtask}style={{backgroundColor:color}}className='btn'>{text}</button>
  )
}
