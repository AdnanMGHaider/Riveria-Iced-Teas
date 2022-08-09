import { useState } from "react";
import Homepage from "./Pages/Homepage/Homepage";
import NavBar from "./Components/NavBar/NavBar";
import MobileNavBar from "./Components/MobileNavBar/MobileNavBar";

function App() {
  const [mobileNavBarIsOpen, setMobileNavBarIsOpen] = useState(false);

  function toggleMobileNavBar() {
    setMobileNavBarIsOpen(!mobileNavBarIsOpen);
  }

  return (
    <div className="App">
      <NavBar toggle={toggleMobileNavBar} />
      <MobileNavBar
        toggle={toggleMobileNavBar}
        mobileNavBarIsOpen={mobileNavBarIsOpen}
      />
      <Homepage />
    </div>
  );
}

export default App;
