import React, { useState, useEffect } from "react";
import Faq from "./Faq";
import ToolServices from "../../../../services/ToolServices";
//import { showMessage } from "../../../../Utils/AppFunction";

function index() {
  const [show, setShow] = useState('');
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

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = () => {
    ToolServices.getAllFaq()
      .then(response => {
        setFaqList(response.data.data);
        //showMessage('info', 'Info message');
      })
      .catch(e => {
        console.log(e);
      });
  };
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
                <Faq list={list} keys={i} show={show} setShow={setShow}/>
              ))
             }
          </div>
        </div>
      </section>
    </div>
  );
}

export default index;
