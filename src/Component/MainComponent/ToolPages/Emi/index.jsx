import React, { useState } from "react";

function index() {
  const [loanAmount, setLoanAmount] = useState(10000);
  const [interestRate, setInterestRate] = useState(4);
  const [loanTenure, setLoanTenure] = useState(1);

  const calculateEMI = () => {
    const r = interestRate / (12 * 100); // Monthly interest rate
    const n = loanTenure * 12; // Loan tenure in months

    const emi =
      (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

    return Math.round(emi);
  };

  const calculateTotalInterest = () => {
    const emi = calculateEMI();
    const totalPayment = emi * (loanTenure * 12); // Total payment over loan tenure

    const totalInterest = totalPayment - loanAmount;
    return Math.round(totalInterest);
  };

  const calculateTotalPayment = () => {
    const totalInterest = calculateTotalInterest();
    return loanAmount + totalInterest;
  };

  return (
    <div id="pagee" className="clearfix">
      <section
        className="flat-agencies-detail wg-tabs"
        style={{ marginTop: "30px" }}
      >
        <div className="container">
          <div>
            <div className="container">
              <div className="header">
                <h2 style={{ fontSize: "30px" }} className="titles title-2">
                  EMI Calculation
                </h2>
              </div>
              <div className="sub-container">
                <div className="view">
                  <div className="details row">
                    <div className="col-12" style={{ marginBottom: "20px" }}>
                      <div className="detail ">
                        <p style={{ fontSize: "18px" }}>Loan Amount</p>
                        <p id="loan-amt-text" style={{ fontSize: "18px" }}></p>
                      </div>
                      <input
                        type="number"
                        className="form-control wizard-required"
                        name="number"
                        placeholder="Enter Loan Amount"
                        style={{
                          color: "#000",
                          background: "#fff",
                          border: "1px solid #E5E5EA",
                          padding: "10px 20px",
                          marginTop: "10px",
                        }}
                        onChange={(e) => setLoanAmount(Number(e.target.value))}
                      />
                    </div>
                    <div className="col-12" style={{ marginBottom: "20px" }}>
                      <div className="detail">
                        <p style={{ fontSize: "18px" }}>Loan Tenure {"(Annual)"}</p>
                        <p
                          id="loan-period-text"
                          style={{ fontSize: "18px" }}
                        ></p>
                      </div>
                      <input
                        type="number"
                        className="form-control wizard-required"
                        name="number"
                        placeholder="Enter Loan Tenure"
                        style={{
                          color: "#000",
                          background: "#fff",
                          border: "1px solid #E5E5EA",
                          padding: "10px 20px",
                          marginTop: "10px",
                        }}
                        onChange={(e) => setLoanTenure(Number(e.target.value))}
                      />
                    </div>

                    <div className="col-12" style={{ marginBottom: "20px" }}>
                      <div className="detail ">
                        <p style={{ fontSize: "18px" }}>Interest Rate</p>
                      </div>
                      <input
                        type="number"
                        className="form-control wizard-required"
                        name="number"
                        placeholder="Enter Interest Rate"
                        style={{
                          color: "#000",
                          background: "#fff",
                          border: "1px solid #E5E5EA",
                          padding: "10px 20px",
                          marginTop: "10px",
                        }}
                        onChange={(e) =>
                          setInterestRate(Number(e.target.value))
                        }
                      />
                    </div>
                  </div>

                  <div className="footer">
                    <p
                      style={{
                        fontSize: "18px",
                        display: "block",
                        marginBottom: "10px",
                        color: "#FFA920",
                        marginTop: "10px",
                      }}
                    >
                      Monthly Payable
                    </p>
                    <p id="price-container">
                      <span style={{ fontSize: "25px", color: "#000" }}>
                        {" "}
                        {`₹ ${calculateEMI()}.00`}
                      </span>
                      /month
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="row" style={{ margin: "40px 0" }}>
                  <div
                    className="chart-details col-lg-4 col-sm-12 d-flex justify-content-center flex-column"
                    style={{ margin: "10px 0" }}
                  >
                    <p style={{ marginBottom: "10px", fontSize: "18px" }}>
                      Principal
                    </p>
                    <p style={{ color: "#130F31", fontSize: "25px" }}>
                      {`₹ ${loanAmount}.00`}
                    </p>
                  </div>
                  <div
                    className="chart-details  col-lg-4 col-sm-12 d-flex justify-content-center flex-column"
                    style={{ margin: "10px 0" }}
                  >
                    <p style={{ marginBottom: "10px", fontSize: "18px" }}>
                    Total Interest Payable
                    </p>
                    <p
                      style={{ color: "#130F31", fontSize: "25px" }}
                    >{`₹ ${calculateTotalInterest()}.00`}</p>
                  </div>
                  <div
                    className="chart-details  col-lg-4 col-sm-12 d-flex justify-content-center flex-column"
                    style={{ margin: "10px 0" }}
                  >
                    <p style={{ marginBottom: "10px", fontSize: "18px" }}>
                    Total Payment (Principal + Interest)
                    </p>
                    <p
                      style={{ color: "#130F31", fontSize: "25px" }}
                    >{`₹ ${calculateTotalPayment()}.00`}</p>
                  </div>
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
