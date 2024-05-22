import React from "react";

function Faq(props) {
  const { list, keys, show, setShow } = props;

  function handleClick() {
    setShow(keys);
  }

  return (
    <div className="col-lg-6" key={keys}>
      <div id="pagee" className="clearfix">
        <section className="flat-accordion fl-faq-content">
          <div className="container">
            <div className="flat-toggle">
              <div
                className={`toggle-title flex align-center ${show === keys ? 'active' : ''}`}
                onClick={handleClick}
              >
                <i className="fal fa-question-circle"></i>
                <div className="fw-6">{list.faq_question}</div>
                <div className="btn-toggle"></div>
              </div>
              <div
                className="toggle-content section-desc"
                style={{ display: show === keys ? 'block' : 'none' }}
              >
                <p className="texts text-color-2">{list.faq_answer}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Faq;
