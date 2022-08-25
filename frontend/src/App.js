import './App.css';
import OuterLayout from './component/Products/OuterLayout';
import Product from './component/Products/Product';
import ProjectCreation from './component/Products/ProjectCreation';
import StopWatch from './component/Products/Timer/StopWatch';
import Routing from './component/Routing';

function App() {
  return <div className="App">
    {/* <Routing/> */}
    {/* <ProjectCreation/> */}
    <OuterLayout/>
  </div>;
}

export default App;
