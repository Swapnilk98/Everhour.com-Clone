import './App.css';
import Login from './component/login/Login';
import OuterLayout from './component/Products/OuterLayout';
import Product from './component/Products/Product';
import ProjectCreation from './component/Products/ProjectCreation';
import StopWatch from './component/Products/Timer/StopWatch';
import Routing from './component/Routing';

function App() {
  return (
    <div className="App">
      {/* <Routing/> */}
      {/* <ProjectCreation/> */}
      <Login />
    </div>
  );
}
export default App;
