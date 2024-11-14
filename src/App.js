import './App.css';
import {Square, SquareList,DoubleCircle} from './Square';


function App() {
 return <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', minHeight: '100vh' }}>
  <Square size={100}/>
  <Square size={100}/>
  <SquareList number={4}/> 
  <SquareList number={3}/>
  <DoubleCircle />
 </div>
}

export default App;
