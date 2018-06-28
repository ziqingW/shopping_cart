export function addItem (data) {
  return {
    type: 'ADD_ITEM',
    data: data
  };
}

export function callModal (data) {
    return {
    type: 'CALL_MODAL',
    data: data
  };
}

export function cancelModal () {
    return {
    type: 'CANCEL_MODAL',
  };
}
