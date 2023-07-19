const fetchData = () => {
    return async (dispatch) => {
      try {
        const response = await fetch('/default');
        const data = await response.json();
  
        dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data });
      } catch (error) {
        dispatch({ type: 'FETCH_DATA_ERROR', payload: error.message });
      }
    };
  };

export default fetchData;