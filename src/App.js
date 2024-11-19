import './App.css';
import {Square, SquareList,DoubleCircle} from './Square';
import Tree from './Tree';

function App() {
 return <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', minHeight: '100vh' }}>
  <Square size={100}/>
  <SquareList number={4}/> 
  <DoubleCircle />
  <Tree />
 </div>
}

export default App;
