type Modla = {
  open: boolean;
  props?: any;
  listeners: Function[];
}

const modals = new Map<string, Modla>()

const modalStore = {
  openModal(key: string, modalProps: any) {
    const modal = modals.get(key);
    if (modal) {
      modal.open = true;
      modal.props = {
        ...modal.props,
        ...modalProps
      };
      emitChange(key);
    }
  },
  subscribe(key: string, listener: Function) {
    const modal = modals.get(key);
    if (modal) {
      modal.listeners = [...modal.listeners, listener];
    } else {
      modals.set(key, { open: false, listeners: [listener] });
    }
    return () => {
      if (modal) {
        modal.listeners = modal.listeners.filter(l => l !== listener);
      }
    };
  },
  getSnapshot() {
    return modals;
  }
};

function emitChange(key: string) {
  const modal = modals.get(key);
  if (modal) {
    for (let listener of modal.listeners) {
      listener();
    }
  }
}

export default modalStore;