import React from 'react'

function DropDown(props) {
    const options=props.options;
    const title=props.title
    const func=props.func
  return (
    <div className='select'>
        <select name="format" onChange={func} defaultValue={0} id="format">
            <option value="0" disabled>
                {title}
            </option>
            {options.map((one,i)=>(
                <option value={one}>
                    {one.toUpperCase()}
                </option>
            ))}

        </select>
      
    </div>
  )
}

export default DropDown
