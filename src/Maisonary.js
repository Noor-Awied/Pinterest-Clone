import { useEffect, useState } from "react";
import React from "react";

export default function Maisonary() {
  let Posts = [];

  const [loading, setLoading] = useState({ LoadingImages: true });

  const getImageUrl = () => {
    const width = Math.floor(Math.random() * (700 - 200 + 1) + 200);
    const height = Math.floor(Math.random() * (500 - 200 + 1) + 200);
    let url = `https://picsum.photos/${width}/${height}`;
    return url;
  };

  const generatePosts = () => {
    for (let x = 1; x <= 40; x++) {
      let imgObject = {};
      imgObject.image = getImageUrl();
      imgObject.description = "This is description for image " + x;
      Posts.push(imgObject);
    }
  };
  generatePosts();
  useEffect(() => {
    const resizeGridItem = (item) => {
      const myGrid = document.querySelector(".maisonary");
      let rowHeight = parseInt(
        window.getComputedStyle(myGrid).getPropertyValue("grid-auto-rows")
      );

      let rowGap = parseInt(
        window.getComputedStyle(myGrid).getPropertyValue("grid-row-gap")
      );
      let contentHeight = item.querySelector(".content").clientHeight;
      let newSpan = Math.ceil(contentHeight / (rowHeight + rowGap));
      item.style.gridRowEnd = "span " + newSpan;
    };

    const resizeAllGridItems = () => {
      let allItems = document.querySelectorAll(".item");
      var allItemsArr = Array.from(allItems);
      for (let x = 0; x < allItemsArr.length; x++) {
        resizeGridItem(allItemsArr[x]);
      }
    };
    Promise.all(
      Array.from(document.images)
        .filter((img) => !img.complete)
        .map(
          (img) =>
            new Promise((resolve) => {
              img.onload = img.onerror = resolve;
            })
        )
    )
      .then(() => {
        console.log("all images loaded");
        console.log("before resizing " + loading.LoadingImages);
        resizeAllGridItems();
        console.log("images resized ");
      })
      .then(() => {
        //loading.LoadingImages = false; //update without rendering
        setLoading(!loading.LoadingImages);
        console.log("after resizing" + loading.LoadingImages);
      });

    window.addEventListener("resize", resizeAllGridItems());
  }, []);

  return (
    <div
      style={{ visibility: !loading.LoadingImages ? "visible" : "hidden" }}
      className="maisonary"
      id="itemlist"
    >
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
  );
}
