import './App.css';

import Setting from './component/Payment/Setting';
import CombineEmptyandFilled from './component/Products/CombineEmptyandFilled';
import EmptyProjects from './component/Products/EmptyProjects';
import Loading from './component/Products/Loading';

import OuterLayout from './component/Products/OuterLayout';
import Routing from './component/Routing';



function App() {
  return <div className="App">
    {/* <OuterLayout/> */}
    {/* <Setting/> */}
    {/* <CombineEmptyandFilled/> */}
    {/* <Loading/> */}
    <Routing/>
  </div>;

}
export default App;
