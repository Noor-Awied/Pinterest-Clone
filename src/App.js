import { useEffect, useRef } from "react";
import "./App.css";

function App() {
  const getImageUrl = () => {
    const width = Math.floor(Math.random() * (700 - 200 + 1) + 200);
    const height = Math.floor(Math.random() * (500 - 200 + 1) + 200);
    let url = `https://picsum.photos/${width}/${height}`;
    return url;
  };
  let Posts = [];

  for (let x = 1; x <= 40; x++) {
    let imgObject = {};
    imgObject.image = getImageUrl();
    imgObject.description = "This is description for image " + x;
    Posts.push(imgObject);
  }
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
          <div className="maisonary" id="itemlist">
            {Posts.map((post) => {
              return (
                <div className="item flex-col">
                  <div className="content">
                    <figure className="post-img-ctnr">
                      <img
                        className="post-img"
                        src={post.image}
                        alt={post.description}
                      />
                      <div id="post-overlay" className="overlay flex-col">
                        <div className="overlay__top-menu flex-row">
                          <select>
                            <option value="One">One</option>
                            <option value="Two">Two</option>
                            <option value="Three">Three</option>
                          </select>
                          <p>Top menu</p>
                        </div>
                        <div className="overlay__bottom-menu flex-row">
                          <p>Bottom menu</p>
                        </div>
                      </div>
                    </figure>
                    <div className="post-desc-ctnr">
                      <p className="post-desc">{post.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
