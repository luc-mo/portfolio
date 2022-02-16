import { useSelector } from 'react-redux';

export default function useReducers(reducer = 'default') {
  const reducers = useSelector(state => {
    if(reducer === 'default') {
      return state;
    } else {
      return state[reducer];
    }
  });
  return reducers;
}