import React, { useState } from "react";
import Faq from "./Faq";

function index() {
  const [faqlist, setFaqList] = useState([
    {
      title: "How to post your property?",
      desc: " Proin sed tellus porttitor, varius mauris vitae, tinciduntaugue. Sed consectetur magna elit, sit amet faucibus tortorsodales vitae. Maecenas quis arcu est. Nam sit amet neque vestibulum, fringilla elit sit amet, volutpat nunc",
    },
    {
      title: "How to post your property?",
      desc: " Proin sed tellus porttitor, varius mauris vitae, tinciduntaugue. Sed consectetur magna elit, sit amet faucibus tortorsodales vitae. Maecenas quis arcu est. Nam sit amet neque vestibulum, fringilla elit sit amet, volutpat nunc",
    },
    {
      title: "How to post your property?",
      desc: " Proin sed tellus porttitor, varius mauris vitae, tinciduntaugue. Sed consectetur magna elit, sit amet faucibus tortorsodales vitae. Maecenas quis arcu est. Nam sit amet neque vestibulum, fringilla elit sit amet, volutpat nunc",
    },
    {
      title: "How to post your property?",
      desc: " Proin sed tellus porttitor, varius mauris vitae, tinciduntaugue. Sed consectetur magna elit, sit amet faucibus tortorsodales vitae. Maecenas quis arcu est. Nam sit amet neque vestibulum, fringilla elit sit amet, volutpat nunc",
    },
  ]);
  return (
    <div id="pagee" class="clearfix">
      <section class="flat-faq flat-accordion fl-faq-content">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="heading-section center">
                <h2>Frequently asked questions</h2>

                <span class="text-color-4">
                  Quick answers to questions you may have.
                </span>
              </div>
            </div>
             {
              faqlist.map((list,i)=>(
                <Faq list={list} keys={i} />
              ))
             }
          </div>
        </div>
      </section>
    </div>
  );
}

export default index;
