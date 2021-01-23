import Store from './Contexts/AppStore';
import './App.scss';

const App = (props) => {
  return (
    <Store>
      <div className='app'>
        <div className='app__container'>{props.children}</div>
      </div>
    </Store>
  );
};

export default App;
