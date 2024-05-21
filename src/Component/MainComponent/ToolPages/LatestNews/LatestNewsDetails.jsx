import React, { useState } from "react";
import imgs from "../../../../assets/assets/images/img-box/blog-list-1.jpg";
import LatestNews from "./LatestNews";
import { useLocation } from "react-router-dom";
function LatestNewsDetails() {

    const location = useLocation();
    const { newsDetails} = location.state;


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
                      Latest News Details
                    </div>
                  </div>
                </div>

                <div className="flat-blog">
                  <div className="box-heading ">
                    <div className="image relative">
                      <img
                        src={newsDetails.newsImg}
                        alt="images" style={{width: "100%",height:"411px",borderRadius: "10px"}}
                      />
                    </div>

                    <div className="contents center">
                      <div className="title-heading fs-30 fw-7 lh-45">
                       {newsDetails.title}
                      </div>
                      <h4 className="fw-4">
                       {newsDetails.desc}
                      </h4>
                    </div>
                  </div>
                </div>

                {newsList.map((newsList, i) => (
                  <LatestNews newsList={newsList} keys={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LatestNewsDetails;
