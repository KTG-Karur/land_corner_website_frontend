import React, { useState } from "react";
import Faq from "../Faq/Faq";

function index() {
  const [gendralInfoList, setGendralInfoList] = useState([
    {
      title: "What is the capital city of France?",
      desc: " The capital city of France is Paris.",
    },
    {
      title: "Which planet is known as the 'Red Planet'?",
      desc: " Proin sed tellus porttitor, varius mauris vitae, tinciduntaugue. Sed consectetur magna elit, sit amet faucibus tortorsodales vitae. Maecenas quis arcu est. Nam sit amet neque vestibulum, fringilla elit sit amet, volutpat nunc",
    },
    {
      title: "What is the chemical symbol for water?",
      desc: "  The chemical symbol for water is H2O",
    },
    {
      title: "What is the tallest mountain in the world?",
      desc: " Mount Everest is the tallest mountain in the world.",
    },
  ]);
  return (
    <div id="pagee" class="clearfix">
      <section class="flat-faq flat-accordion fl-faq-content">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="heading-section center">
                <h2>Gendral Information</h2>

                <span class="text-color-4">
                  Quick answers to questions you may have.
                </span>
              </div>
            </div>
            {gendralInfoList.map((list, i) => (
              <Faq list={list} keys={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default index;
