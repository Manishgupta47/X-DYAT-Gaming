import React from "react";

const VideoOne = () => {
  return (
    <div
      className="video-autoplay-area relative w-full h-screen overflow-hidden"
      style={{
        WebkitMaskImage: "url('/img/bg/3.png')",
        maskImage: "url('/img/bg/3.png')",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskSize: "cover",
        maskSize: "cover",
      }}
    >
      <video
        className="video-autoplay absolute top-0 left-0 w-full h-full object-cover"
        src="https://videos.pexels.com/video-files/6498514/6498514-uhd_2560_1440_25fps.mp4"
        preload="auto"
        muted
        autoPlay
        loop
        playsInline
      ></video>
    </div>
  );
};

export default VideoOne;
