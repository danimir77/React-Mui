import { Stack } from "@mui/material";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import SideBar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      {/* center  space-evenly */}
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <SideBar />
        <Feed />
        <Rightbar />
      </Stack>
    </div>
  );
}

export default App;
