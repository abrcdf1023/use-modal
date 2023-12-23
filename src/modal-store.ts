const modals = new Map()
let listeners: Function[] = [];

const modalStore = {
  openModal(key: string, modalProps: any) {
    const modal = modals.get(key);
    modal.isOpen = true;
    modal.props = {
      ...modal.props,
      ...modalProps
    };
    emitChange();
  },
  subscribe(listener: Function) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  },
  getSnapshot() {
    return modals;
  }
};

function emitChange() {
  for (let listener of listeners) {
    listener();
  }
}

export default modalStore;