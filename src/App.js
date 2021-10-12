import SideBar from "components/SideBar";
import MyProject from "features/MyProject";
import { Route } from "react-router";
import "./App.scss";

function App() {
  return (
    <div className='app'>
      <SideBar />

      <Route path='/my-project' component={MyProject} />
    </div>
  );
}

export default App;
