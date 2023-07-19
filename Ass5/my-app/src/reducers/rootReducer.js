const initialState = {
    data: [],
    isPopoverVisible: false
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'add':
          return {
            ...state, 
            data: [...state.data, action.payload]
        }
        case 'del':
          const updatedList = [...state.data];
          const updatedItems = updatedList.splice(action.payload, 1);
          return {
            ...state, 
            data: updatedItems
        }
        case 'load':
          return {
            ...state,
            data: action.payload
          };
        default:
          return state;
      }
}

export default rootReducer;