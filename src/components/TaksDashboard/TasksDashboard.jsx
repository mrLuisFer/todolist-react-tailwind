import React, { useEffect, useState } from 'react'

import Modal from 'components/Modal/Modal'
import TaskDashBoardModal from './TaskDashboardModal/TaskDashBoardModal'
import ListTodos from '../ListTodos/ListTodos.jsx'

import { TasksDashboardContainer, TasksDashboardButton } from './TasksDashboard.styles'

export default function TasksDashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [taskValue, setTaskValue] = useState([
    {
      task: 'Example',
      description: 'Add a new task',
      id: '0',
    },
  ])

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const getTaskValue = () => {
    const taskValues = localStorage.getItem('tasksValues')

    if (taskValues !== null && taskValues !== undefined) {
      console.log(taskValues)
      setTaskValue(JSON.parse(taskValues))
    }
    return
  }

  useEffect(() => {
    handleCloseModal()
    getTaskValue()
  }, [])

  return (
    <TasksDashboardContainer>
      <TasksDashboardButton type='button' onClick={handleOpenModal}>
        <i className='fas fa-plus' title='Click to add a task' />
        Add task
      </TasksDashboardButton>
      {isModalOpen ? (
        <Modal
          jsxComponent={
            <TaskDashBoardModal taskValue={taskValue} setTaskValue={setTaskValue} />
          }
          elementId='task-modal'
          closeFunc={handleCloseModal}
        />
      ) : (
        ''
      )}

      <ListTodos tasksValue={taskValue} />
    </TasksDashboardContainer>
  )
}
