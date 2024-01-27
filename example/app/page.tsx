"use client"

import useModal from '../../src'
import Modal from '../component/modal'

export default function Page() {
  const { openModal } = useModal('modal-id')
  
  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal />
    </div>
  )
}