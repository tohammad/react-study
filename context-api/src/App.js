import './App.css';
import Message from './components/using-props/Message';
import Button from './components/using-props/Button';
import CMessage from './components/using-context-api/CMessage';
import CButton from './components/using-context-api/CButton';
import React, {useState} from 'react';
import Context from './components/using-context-api/Context';
function App() {
  const [count, setCount] = useState(0);
  const [state, setState] = useState({
    count: 0,
    updateState: (count) => {
      setState(({count, updateState}) => {
        return { count: count + 1, updateState: updateState};
      });
    }
  });
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Using props</h1>
          <Message count={count}></Message>
          <Button count={count} onUpdate={(count) => setCount(count)} />
        </div>
        <Context.Provider value={state}>
          <h1>Using Context API</h1>
          <CMessage/>
          <CButton/>
        </Context.Provider>



      </header>
    </div>
  );
}

export default App;
