import React from 'react'

const Dropdown = ({id, name, data= [], onChange = () => {}}) => {
  return (
    <select id={id || name} name={name || id} onChange={onChange}>
        {data.map(({label, value})=>{
          return (<option key={value} value={value}>{label}</option>)
        })}
    </select>
  );
}

export default Dropdown