const initialState = {
    data: [{
        "name": "fork",
        "price": "3",
        "description": "its a fork",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTDTu-8YF1QJpG5YPfLPGtc7xWuw3AeJWHdckuEEGmnA&s"
        },
        {
        "name": "spoon",
        "price": "4",
        "description": "its a spoon",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTDTu-8YF1QJpG5YPfLPGtc7xWuw3AeJWHdckuEEGmnA&s"
      }],
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
        default:
          return state;
      }
}

export default rootReducer;