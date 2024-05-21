import React, { useState } from "react";
import imgs from "../../../../assets/assets/images/img-box/blog-list-1.jpg";
import LatestNews from "./LatestNews";

function index() {
  const [newsList, setNewsList] = useState([
    {
      title: "  We are hiring ‘moderately,’ says Compass CEO",
      desc: " Proin sed tellus porttitor, varius mauris vitae, tinciduntaugue. Sed consectetur magna elit, sit amet faucibus tortorsodales vitae. Maecenas quis arcu est. Nam sit amet neque vestibulum, fringilla elit sit amet, volutpat nunc",
      newsImg: imgs,
    },
    {
      title: "  We are hiring ‘moderately,’ says Compass CEO",
      desc: " Proin sed tellus porttitor, varius mauris vitae, tinciduntaugue. Sed consectetur magna elit, sit amet faucibus tortorsodales vitae. Maecenas quis arcu est. Nam sit amet neque vestibulum, fringilla elit sit amet, volutpat nunc",
      newsImg: imgs,
    },
    {
      title: "How to post your property?",
      desc: " Proin sed tellus porttitor, varius mauris vitae, tinciduntaugue. Sed consectetur magna elit, sit amet faucibus tortorsodales vitae. Maecenas quis arcu est. Nam sit amet neque vestibulum, fringilla elit sit amet, volutpat nunc",
      newsImg: imgs,
    },
    {
      title: "How to post your property?",
      desc: " Proin sed tellus porttitor, varius mauris vitae, tinciduntaugue. Sed consectetur magna elit, sit amet faucibus tortorsodales vitae. Maecenas quis arcu est. Nam sit amet neque vestibulum, fringilla elit sit amet, volutpat nunc",
      newsImg: imgs,
    },
  ]);

  return (
    <div id="pagee" className="clearfix">
      <section
        className="tf-section2 flat-blog-grid flat-blog-list flat-property style4"
        style={{ marginTop: "30px" }}
      >
        <div className="container">
          <div className="row flex">
            <div className="col-lg-12">
              <div className="post">
                <div className="category-filter flex  justify-space">
                  <div className="box-1 ">
                    <div className="heading-listing fs-30 lh-45 fw-7">
                      Latest News
                    </div>
                  </div>
                </div>

                {newsList.map((newsList, i) => (
                  <LatestNews newsList={newsList} keys={i} />
                ))}

                <div class="themesflat-pagination clearfix center">
                  <ul>
                    <li>
                      <a href="#" class="page-numbers style">
                        <i class="far fa-angle-left"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="page-numbers">
                        1
                      </a>
                    </li>
                    <li>
                      <a href="#" class="page-numbers">
                        2
                      </a>
                    </li>
                    <li>
                      <a href="#" class="page-numbers current">
                        3
                      </a>
                    </li>
                    <li>
                      <a href="#" class="page-numbers">
                        4
                      </a>
                    </li>
                    <li>
                      <a href="#" class="page-numbers">
                        ...
                      </a>
                    </li>
                    <li>
                      <a href="#" class="page-numbers style">
                        <i class="far fa-angle-right"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default index;
