import React, { useEffect, useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const Model = ({ activeIndex, imagesData }) => {
  const [sliderIndex, setSliderIndex] = useState(activeIndex);
  useEffect(() => {
    if (activeIndex !== null) setSliderIndex(() => activeIndex);
  }, [activeIndex]);
  return (
    <>
      <div className="app1">
        <div className="container-1">
          {sliderIndex !== null && (
            <>
              <ArrowBackIosIcon
                className="btn1"
                onClick={() => {
                  setSliderIndex(sliderIndex - 1);
                }}
              />
              <img
                src={imagesData[sliderIndex].urls.regular}
                alt=""
                className="selected"
              />
              <ArrowForwardIosIcon
                className="btn2"
                onClick={() => {
                  setSliderIndex(sliderIndex + 1);
                }}
              />
            </>
          )}
          <div className="child">
            {sliderIndex !== null && (
              <img
                src={imagesData[sliderIndex].user.profile_image.medium}
                alt=""
                className="profileimg"
              />
            )}
            {sliderIndex !== null && (
              <p>NAME: {imagesData[sliderIndex].user.name}</p>
            )}
            {sliderIndex !== null && (
              <p>LOCATION: {imagesData[sliderIndex].user.location}</p>
            )}
            {sliderIndex !== null && (
              <p>LIKES: {imagesData[sliderIndex].likes}</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Model;
