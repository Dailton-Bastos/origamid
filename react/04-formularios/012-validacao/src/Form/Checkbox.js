import React from 'react'

const Checkbox = ({ options, value, setValue }) => {

  function handleChange({ target }) {
    if(target.checked) {
      return setValue([...value, target.value])
    } else {
      return setValue(value.filter((itemValue) => itemValue !== target.value))
    }
  }

  return (
    <>
      {options.map((option) => (
        <label key={option}>
          <input
            type="checkbox"
            value={option}
            checked={value.includes(option)}
            onChange={handleChange}
          />
          {option}
        </label>
      ))}
    </>
  )
}

export default Checkbox
