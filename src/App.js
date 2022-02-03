import { useEffect, useState } from "react";
import "./App.css";
import Maisonary from "./Maisonary";

function App() {
  // const [loaded, setLoaded] = useState(false);

  // useEffect(() => {
  //   Promise.all(
  //     Array.from(document.images)
  //       .filter((img) => !img.complete)
  //       .map(
  //         (img) =>
  //           new Promise((resolve) => {
  //             img.onload = img.onerror = resolve;
  //           })
  //       )
  //   ).then(() => {
  //     setLoaded(true);
  //   });
  // }, []);
  return (
    <div className="App">
      <header className="App-header">
        <nav className="nav flex-row">
          <div className="logo flex-row">G</div>
          <div className="menu flex-row">
            <div className="search-bar"></div>
            <div className="notification-ico">noti</div>
            <div className="message-ico">mess</div>
            <div className="profile-ico">prof</div>
            <div className="dropdown-ico">drop</div>
          </div>
        </nav>
        <div className="outer-container" id="container">
          {/* <div style={{ visibility: loaded ? "visible" : "hidden" }}> */}
          <Maisonary />
          {/* </div> */}
        </div>
      </header>
    </div>
  );
}

export default App;
