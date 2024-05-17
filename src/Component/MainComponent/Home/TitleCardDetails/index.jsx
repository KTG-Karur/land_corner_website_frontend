import React from 'react';
import newsImage from '../../../../assets/assets/images/img-box/blog-1.jpg';

function Index({ type, colNo }) {
    const details = [{
        title: "Tamil Nadu Govt Urged",
        shortDesp: "Building gains into housing stocks and how to trade the sector",
        date: "02/04/2024 05:20PM",
        image: newsImage,
        type: "News"
    }, {
        title: "Guindy, ST Thomas Mount",
        shortDesp: "Building gains into housing stocks and how to trade the sector",
        date: "02/04/2024 05:20PM",
        image: newsImage,
        type: "News"
    }, {
        title: "Chennai iconic Crowne",
        shortDesp: "Building gains into housing stocks and how to trade the sector",
        date: "02/04/2024 05:20PM",
        image: newsImage,
        type: "News"
    }, {
        title: "EMI Calculation",
        shortDesp: '',
        date: '',
        image: 'https://www.mswipe.com/assets/images/blog_images/EMI-calculator-copy.jpg',
        type: "Tool"
    }, {
        title: "Land Area Calculation",
        shortDesp: '',
        date: '',
        image: 'https://media.istockphoto.com/photos/illustration-land-plot-management-real-estate-concept-with-a-vacant-picture-id1356401023?k=20&m=1356401023&s=612x612&w=0&h=H8PeV9Diwuoz3qBHHHXhI3gEHKMTLRb79NpzgARn6bA=',
        type: "Tool"
    }, {
        title: "General Information",
        shortDesp: '',
        date: '',
        image: 'https://newkashipublicschool.com/uploads/gi.jpg',
        type: "Tool"
    }, {
        title: "Land Area Calculation",
        shortDesp: '',
        date: '',
        image: 'https://static.vecteezy.com/system/resources/previews/005/412/356/non_2x/new-update-logo-template-illustration-free-vector.jpg',
        type: "Tool"
    }];

    return (
        <React.Fragment>
            {details
                .filter(item => item.type === type)
                .map((item, index) => (
                    <div className={`col-lg-${colNo} col-md-${colNo}`} key={index}>
                        <div className="box hover-img">
                            <div className="images img-style relative">
                                <a href="news_details.php"><img src={item.image} alt="images" style={{ objectFit: 'cover', height: '200px' }} /></a>
                                <div className="sub-box flex align-center fs-13 fw-6" style={{ width: "230px", display: "flex", justifyContent: "center" }}>
                                    <div className="title-1">{item.title}</div>
                                </div>
                            </div>
                            <div className="content">
                                {item.date ? (<div> ${item.date} </div>) : null}
                                {item.shortDesp ? (
                                    <h3 className="link-style-1" style={{ marginTop: 10 }}>
                                        <a href="news_details.php">{item.shortDesp ? item.shortDesp : null}</a>
                                    </h3>) : null}

                                <div className="meta">
                                    <a href="#" className="btn-button fs-13 fw-6 text-color-3">
                                        <span>Read more </span>
                                        <svg width={13} height={12} viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.875 6H12.125M12.125 6L7.0625 0.9375M12.125 6L7.0625 11.0625" stroke="#FFA920" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
        </React.Fragment>
    );
}

export default Index;
