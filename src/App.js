import {useSelector, useDispatch} from 'react-redux';
import {setStatus} from './store/gameSlice';
import Board from './components/Board';

function App() {

  const {buttonStatus} = useSelector(store => store.game);
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(setStatus('Resume'));
  }

  return (
    <div className="App">
      <Board />
      <button className="start-button" onClick={clickHandler}>{buttonStatus}</button>
    </div>
  );
}

export default App;
