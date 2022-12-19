import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Changevoice.css";
import icon1 from "../../img/icon/icon1.svg";
import icon2 from "../../img/icon/icon01.svg";
import icon3 from "../../img/icon/icon3.svg";
import caro1 from '../../img/img01.png'
import caro2 from '../../img/img02.png'
import caro3 from '../../img/img03.png'

export default function Changevoice() {
  return (
    <>
      <div className=" my-5 ">
        <div className="bg-theme-light rounded p-5 container justy">
          <h1 className=" my-4 text-justify">
            Change the Voice Effortlessly
          </h1>
          <p>
            The audio/video industry always welcomes content full of creativity
            and amusement. Think about such video or audios filled with animated
            voice or voice gets modulated. It all seems so interesting. Don't
            you want to try such effects and changes through a voice changer
            online? Then consider media.io, the most effective and easy-to-use
            online voice changer for gamers, content creators, and Youtubers.
            Add a voice modifier to sound like a demon, robot, sweet girl, tough
            man, or anything else you can imagine!
          </p>
        </div>
      </div>

      <div>
        <h1 className="py-5 border-bottom">Change the Voice Online Effortlessly</h1>
      </div>
      <div className="container w-100 py-md-5 d-flex">
        <div className="w-50 my-auto">
          <div className="d-flex text-start border-bottom mb-4">
            <div className="">
              <img
                src={icon1}
                className="mx-3"
                height="50px"
                width="50px"
                alt=""
              />
            </div>
            <div className="w-75 pb-2">
              <h6 className="fw-bold text-black">1. Upload Audio File.</h6>
              <p>
                Upload your audio files to media.io - it’s all online & works
                right in your browser.
              </p>
            </div>
          </div>
          <div className="d-flex text-start border-bottom mb-4">
            <div className="">
              <img
                src={icon2}
                className="mx-3"
                height="50px"
                width="50px"
                alt=""
              />
            </div>
            <div className="w-75 pb-2">
              <h6 className="fw-bold">2. Select Voice Filters</h6>
              <p>
                Choose one of the voice effects you want to change and click
                "Start." Now you need to wait for our AI technology .
              
              </p>
            </div>
          </div>
          <div className="d-flex text-start border-bottom mb-4">
            <div className="">
              <img
                src={icon3}
                className="mx-3"
                height="50px"
                width="50px"
                alt=""
              />
            </div>
            <div className="w-75 pb-2">
              <h6 className="fw-bold">3. Download and Save</h6>
              <p>
                Download the file to your local drive or Dropbox. Bonus tip:
                other handy tools like audio trimmer, converter are
                available. 
              </p>
            </div>
          </div>
        </div>
        <div className="w-50 my-auto ">
          <Carousel>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src={caro1}
                alt="First slide"s
              />
            
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src={caro2}
                alt="Second slide"
              />
             
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src={caro3}
                alt="Third slide"
              />
              
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </>
  );
}
