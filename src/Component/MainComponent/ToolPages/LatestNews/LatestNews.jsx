import React from "react";
import { Link } from "react-router-dom";

function LatestNews(props) {
  const { newsList, keys } = props;
  return (
    <div className="flat-blog" key={keys}>
      <div className="wrap-blog ">
        <div className="box hover-img flex">
          <div className="images img-style relative flex-none">
            <img src={newsList.newsImg} alt="images" />
          </div>
          <div className="content">
            <h3>
              <Link
                to={"/Tools/LatestNews/NewsDetails"}
                state={{ newsDetails: newsList }}
              >
                {newsList.title}
              </Link>
            </h3>
            <p className="text-color-2">{newsList.desc}</p>
            <div className="meta">
              <Link
                to={"/Tools/LatestNews/NewsDetails"}
                state={{ newsDetails: newsList }}
                className="btn-button flex align-center fs-13 fw-6 text-color-3"
              >
                <span>Read more </span>
                <svg
                  width="13"
                  height="12"
                  viewbox="0 0 13 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.875 6H12.125M12.125 6L7.0625 0.9375M12.125 6L7.0625 11.0625"
                    stroke="#FFA920"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestNews;
