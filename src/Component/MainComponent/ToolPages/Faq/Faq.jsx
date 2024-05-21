import React from "react";

function Faq(props) {
   const {list,keys}=props;
 
  return (
        <div class="col-lg-6" key={keys}>
          <div id="pagee" class="clearfix">
            <section class="flat-accordion fl-faq-content">
              <div class="container">
                <div class="flat-toggle">
                  <div class="toggle-title flex align-center">
                    <i class="fal fa-question-circle"></i>
                    <div class="fw-6">{list.title}</div>
                    <div class="btn-toggle"></div>
                  </div>
                  <div class="toggle-content section-desc">
                    <p class="texts text-color-2">{list.desc}</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
  );
}

export default Faq;
