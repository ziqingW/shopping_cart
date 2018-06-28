const clone = require('clone');

var initialState = {
            items : [{
                id : 1,
                name : 'carrot',
                price : 1.20,
                number : 0,
                description: "regular carrots, rabbits' favorite."
            }, {
                id : 2,
                name : 'cherry',
                price : 4.50,
                number : 0,
                description: "sweet and lovely, you can't miss it."
            }, {
                id : 3,
                name : 'tofu',
                price : 2.35,
                number : 0,
                description: "delicious and nutritious."
            }],
            modal : false,
            currentItem : 0
        };

export function items (state, action) {
  if (state === undefined) {
      console.log("nihao");
    return initialState;
  }
  var new_state;
    switch (action.type) {
    case 'ADD_ITEM':
        new_state = clone(state);
        new_state.items[new_state.currentItem].number += parseInt(action.data, 10);
        new_state.modal = false;
        return new_state;
    case 'CALL_MODAL':
        new_state = clone(state);
        new_state.modal = true;
        new_state.currentItem = action.data;
        return new_state;
    case 'CANCEL_MODAL':
        new_state = clone(state);
        new_state.modal = false;
        return new_state;
    default:
      return state;
  }
}

export default items;