import React from "react";
import "./WebDevelopment.css"; // Import your CSS file for styling

const WebDevelopment = () => {
  return (
    <div className="web-development">
      <h1>Web Development Course</h1>
      {/* Add your web development course content here */}
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/9B3v-EOoTvI?si=xntMPNha2vBRVFDK"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/1aYoGpiJgC8?si=wvs0kggRC52pwpco"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default WebDevelopment;
