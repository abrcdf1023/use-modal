"use client"

import useModal from 'use-modal'

const Modal = () => {
  const { open, modalProps } = useModal('modal-id')

  if (!open) return null
  
  return (
    <div>modalProps: {JSON.stringify(modalProps)}</div>
  )
}

export default Modal