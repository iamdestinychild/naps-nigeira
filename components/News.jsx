import React from "react";
import Newscard from "./Newscard";

function News() {
  return (
    <div className="news-section">
      <h1>Latest News</h1>
      <span className="section-line"></span>

      <div className="card-scroll">
        <Newscard
          image="/assets/images/card1.jpg"
          title="The Return Of Physics Department"
          paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
          possimus suscipit. Voluptatem itaque fugit, natus hic cupiditate iure
          minima velit beatae provident totam ea harum aspernatur fugiat?
          Eligendi, atque ipsam?"
        />
        <Newscard
          image="/assets/images/card2.jpg"
          title="The Return Of Physics Department"
          paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
          possimus suscipit. Voluptatem itaque fugit, natus hic cupiditate iure
          minima velit beatae provident totam ea harum aspernatur fugiat?
          Eligendi, atque ipsam?"
        />
        <Newscard
          image="/assets/images/card3.jpg"
          title="The Return Of Physics Department"
          paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
          possimus suscipit. Voluptatem itaque fugit, natus hic cupiditate iure
          minima velit beatae provident totam ea harum aspernatur fugiat?
          Eligendi, atque ipsam?"
        />
      </div>

      <div className="paginate">
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default News;
