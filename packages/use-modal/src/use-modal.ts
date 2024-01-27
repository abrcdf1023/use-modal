import * as React from 'react'
import modalStore from './modal-store'

const useModal = (key: string) => {
  const modals = React.useSyncExternalStore(l => modalStore.subscribe(key, l), modalStore.getSnapshot, modalStore.getSnapshot);
  return {
    openModal: (modalProps: any) => modalStore.openModal(key, modalProps),
    get open() {
      return modals.get(key)?.open ?? false;
    },
    get modalProps() {
      return modals.get(key)?.props ?? {};
    },
  }
}

export default useModal