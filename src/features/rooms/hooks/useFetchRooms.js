import { useEffect, useReducer } from 'react';

const ACTIONS = {
  ERROR: 'error',
  LOADING: 'loading',
  UPDATE: 'update'
};

const ROOMS_API_URL = 'https://wetransfer.github.io/rooms.json';

const useFetchRooms = () => {
  const initialState = {
    error: false,
    loading: false,
    rooms: [],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case ACTIONS.ERROR: {
        return {
          ...state,
          error: true,
          loading: false,
        };
      }
      case ACTIONS.LOADING: {
        return {
          ...state,
          error: false,
          loading: true,
        };
      }
      case ACTIONS.UPDATE: {
        return {
          ...state,
          error: false,
          loading: false,
          rooms: action.data,
        };
      }
      default:
        return state;
    }
  };

  const [{ error, loading, rooms }, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    dispatch({ type: ACTIONS.LOADING });

    async function fetchRooms() {
      try {
        const response = await fetch(ROOMS_API_URL, { signal });
        const json = await response.json();
        if (json?.rooms) {
          dispatch({ type: ACTIONS.UPDATE, data: json.rooms });
        } else {
          throw Error('Something bad happened');
        }
      } catch (err) {
        console.error(`Failed to fetch rooms: ${err.message}`);
        dispatch({ type: ACTIONS.ERROR });
      }
    }

    fetchRooms();

    return () => {
      controller.abort();
    };
  }, []);

  return {
    hasError: error,
    isLoading: loading,
    rooms,
  };
};

export default useFetchRooms;
