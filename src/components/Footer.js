import React, { useContext, useState } from 'react'
import { DataContext } from './DataProvider'
import { Modal, Button } from 'react-bootstrap';

export default function Footer() {
  const [checkAll, setCheckAll] = useState(false)
  const [todos, setTodos] = useContext(DataContext)

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };


  const handleCheckAll = () => {
    const newTodos = [...todos]
    newTodos.forEach(todo => {
      todo.complete = !checkAll
    })
    setTodos(newTodos)
    setCheckAll(!checkAll)
  }


  const newTodosComplete = () => {
    return todos.filter(todo => todo.complete === false)
  }


  const deleteTodo = () => {
    setTodos(newTodosComplete())
    setCheckAll(false)
    setShow(false);
  }

  const handleClickDelete = () => {
    todos.filter(todo => todo.complete === true).length > 0 ? setShow(true) : setShow(false);
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete these item/s?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} >Cancel</Button>
          <Button variant="danger" onClick={deleteTodo} >Delete</Button>
        </Modal.Footer>
      </Modal>
      {
        todos.length === 0 ? <h2 className='nothingTodo'>Congrats! you have no tasks left.</h2>
          : <div className="row" >
            <label htmlFor="all" className="labelFooter">
              <input type="checkbox" name="all" id="all" data-bs-toggle="tooltip" data-bs-placement="top" title="Select all"
                onChange={handleCheckAll} checked={checkAll} />
              <span className="allText">All</span>
            </label>
            <p className="remainingTodo mb-0 text-center">You have <span class="remainingTodoNum">{todos.filter(todo => todo.complete === false).length}</span>  task/s.</p>
            <button class="btn btn-labeled btn-danger btnDelete" id="delete" onClick={handleClickDelete} data-bs-toggle="tooltip" data-bs-placement="top" title="delete task">
              <span class="btn-label"><i class="bi bi-trash"></i></span></button>
          </div>
      }
    </>


  )
}