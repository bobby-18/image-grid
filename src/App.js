import './App.css'
import React, { useEffect, useState } from "react";
import Model from "./image/Model";
import Image from "./image/Image";
//FETCHING API....
const App = () => {
  const [data, setData] = useState([]);
  const [activeIndex, setActiveindex] = useState(null);
  
  useEffect(() => {
    fetch(
      "https://unsplash.com/napi/landing_pages/wallpapers/desktop/pc?page=1&per_page=100"
    )
      .then((response) => response.json())
      .then((image) => setData(image.photos));
  }, []);
  return (
    <>
      <div>
        <Model className="model" activeIndex={activeIndex} imagesData={data} />
      </div>
      <div className="gallery">
        {data.map((item, index) => (
          <Image data={item} handleClick={() => setActiveindex(index)} />
        ))}
      </div>
    </>
  );
};
export default App;
