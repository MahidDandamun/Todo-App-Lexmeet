import React, { useState } from 'react'

export default function ListItem({ todo, id, checkComplete, handleEditTodos }) {
  const [onEdit, setOnEdit] = useState(false)
  const [editValue, setEditValue] = useState(todo.name)

  const handleOnEdit = () => {
    setOnEdit(true)
  }
  const handleSave = (id) => {
    setOnEdit(false)
    if (editValue) {
      handleEditTodos(editValue, id)
    }
    else {
      setEditValue(todo.name)
    }
  }
  if (onEdit) {
    return (
      <li>
        <input type="text" id="editValue" className='editInput' value={editValue} name="editValue"
          onChange={e => setEditValue(e.target.value.toLowerCase())} />

        <button onClick={() => handleSave(id)} class="saveButton">Save</button>
      </li >
    )
  }

  else {
    return (
      <li >
        <label htmlFor={id} className={todo.complete ? "active" : ""} class="todoLabel">

          <input type="checkbox" id={id} checked={todo.complete}
            onChange={() => checkComplete(id)} />
          <span className='todoText'>{todo.name}</span>

        </label>
        {/* <button disabled={todo.complete} onClick={handleOnEdit} class="editButton">Edit</button> */}

        <button type="button" class="btn btn-outline-light radius" disabled={todo.complete} onClick={handleOnEdit}
          data-bs-toggle="tooltip" data-bs-placement="right" title="Edit">
          <span class="btn-label"><i class="bi bi-pen-fill"></i></span>
        </button>


      </li>
    )
  }
}