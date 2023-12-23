import * as React from 'react'
import modalStore from './modal-store'

const useModal = (key: string) => {
  const modals = React.useSyncExternalStore(modalStore.subscribe, modalStore.getSnapshot);

  return {
    openModal: (modalProps: any) => modalStore.openModal(key, modalProps),
    open: modals.get(key).isOpen,
    modalProps: modals.get(key).props,
  }
}

export default useModal