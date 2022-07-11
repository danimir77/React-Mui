import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import SideBar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <SideBar />
      <Feed />
      <Rightbar />
    </div>
  );
}

export default App;
