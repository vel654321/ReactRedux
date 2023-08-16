import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import {increment,decrement } from './actions';

function App() {
  const counter = useSelector(state=>state.counter);
  const isLogged = useSelector(state=> state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>counter: {counter}</h1>
      <button onClick ={() => dispatch(increment(5))}>+</button>
      <button onClick ={() => dispatch(decrement())}>-</button>
       {isLogged ?
      <h3>Valuable Information I Shouldn't see </h3> :''}
    </div>
  );
}

export default App;
