import React, { Component } from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

export default class CustomArrows extends Component {
  render() {
    const settings = {
      dots: false,
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,

          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true
          }
        }
      ]
    };
    return (
      <div>
        <Slider {...settings}>
          <div>

            <a href={this.props.package1Link}>
              <div className="trend-item1">
                <div className="trend-image position-relative rounded">

                  <img src={this.props.package1Image} alt={this.props.alt1} />
                  <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                    <div className="trend-content-title">
                      <h4 className="mb-0 white">{this.props.package1Name}</h4>
                      <h4 className="mb-0 white">{this.props.package1Designation}</h4>
                      <h4 className="mb-0 white">{this.props.package1Exeripence}</h4>
                    </div>
                  </div>
                  <div className="color-overlay"></div>
                </div>
              </div>
            </a>

          </div>
          <div>

            <a href={this.props.package2Link}>
              <div className="trend-item1">
                <div className="trend-image position-relative rounded">
                  <img src={this.props.package2Image} alt={this.props.alt2} />                                    <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                    <div className="trend-content-title">
                      <h4 className="mb-0 white">{this.props.package2Name}</h4>
                      <h4 className="mb-0 white">{this.props.package2Designation}</h4>
                      <h4 className="mb-0 white">{this.props.package2Exeripence}</h4>

                    </div>
                  </div>
                  <div className="color-overlay"></div>
                </div>
              </div>
            </a>

          </div>
          <div>
            <a href={this.props.package3Link}>
              <div className="trend-item1">
                <div className="trend-image position-relative rounded">
                  <img src={this.props.package3Image}  />                                    <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100">
                    <div className="trend-content-title">
                      <h4 className="mb-0 white">{this.props.package3Name}</h4>
                      <h4 className="mb-0 white">{this.props.package3Designation}</h4>
                      <h4 className="mb-0 white">{this.props.package3Exeripence}</h4>
                    </div>
                  </div>
                  <div className="color-overlay"></div>
                </div>
              </div>
            </a>
          </div>
          <div>
            <a href={this.props.package4Link}>
              <div className="trend-item1">
                <div className="trend-image position-relative rounded">
                  <img src={this.props.package4Image} alt={this.props.alt4} />                                                                           <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100">
                    <div className="trend-content-title">
                      <h4 className="mb-0 white">{this.props.package4Name}</h4>
                      <h4 className="mb-0 white">{this.props.package4Designation}</h4>
                      <h4 className="mb-0 white">{this.props.package4Exeripence}</h4>

                    </div>
                  </div>
                  <div className="color-overlay"></div>
                </div>
              </div>
            </a>
          </div>
          <div>
            <a href={this.props.package5Link}>
              <div className="trend-item1">
                <div className="trend-image position-relative rounded">
                  <img src={this.props.package5Image} alt={this.props.alt5} />                                    <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                    <div className="trend-content-title">
                      <h4 className="mb-0 white">{this.props.package5Name}</h4>
                      <h4 className="mb-0 white">{this.props.package5Designation}</h4>
                      <h4 className="mb-0 white">{this.props.package5Exeripence}</h4>
                    </div>
                  </div>
                  <div className="color-overlay"></div>
                </div>
              </div>
            </a>
          </div>
          <div>
            <a href={this.props.package6Link}>
              <div className="trend-item1">
                <div className="trend-image position-relative rounded">
                  <img src={this.props.package6Image} alt={this.props.alt6} />
                  <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                    <div className="trend-content-title">
                      <h4 className="mb-0 white">{this.props.package6Name}</h4>
                      <h4 className="mb-0 white">{this.props.package6Designation}</h4>
                      <h4 className="mb-0 white">{this.props.package6Exeripence}</h4>
                    </div>

                  </div>
                  <div className="color-overlay"></div>
                </div>
              </div>
            </a>
          </div>
        </Slider>
      </div>
    );
  }
}