import { useEffect, useRef } from "react";
import Carousel from "react-bootstrap/Carousel";

export const ImgSideBar = ({ img }) => {
  return <img src={img} alt="Project Image" />;
};

export const VideoSideBar = ({ playing }) => {
  const vidRef = useRef(null);
  useEffect(() => {
    if (playing == null) {
      vidRef.current.pause();
    }
  }, [playing]);

  return (
    <video
      ref={vidRef}
      src="img/projects/video.mp4"
      id="video"
      className="responsive-video"
      controls="controls"
      autoPlay={false}
      poster="img/projects/project-6.jpg"
    />
  );
};
export const YoutubeSideBar = ({ playing }) => {
  useEffect(() => {
    const youtubeVideo = document.querySelector(".youtube-video");
    if (playing == null) {
      youtubeVideo.contentWindow.postMessage(
        '{"event":"command","func":"' + "pauseVideo" + '","args":""}',
        "*"
      );
    }
  }, [playing]);
  return (
    <div className="videocontainer">
      <iframe
        className="youtube-video"
        src="https://www.youtube.com/embed/7e90gBu4pas?enablejsapi=1&version=3&playerapiid=ytplayer"
      />
    </div>
  );
};

export const SliderSideBar = () => {
  return (
    <div
      id="slider"
      className="carousel slide portfolio-slider"
      data-ride="carousel"
    >
      {/* The slideshow */}
      <Carousel
        className="carousel-inner"
        prevIcon={
          <a className="carousel-control-prev" href="#slider" data-slide="prev">
            <span className="fa fa-chevron-left carousel-controls" />
          </a>
        }
        nextIcon={
          <a className="carousel-control-next" href="#slider" data-slide="next">
            <span className="fa fa-chevron-right carousel-controls" />
          </a>
        }
        prevLabel=""
        nextLabel=""
        indicators={false}
      >
        <Carousel.Item className="carousel-item" interval={1000}>
          <img src="img/projects/project-8.jpg" alt="slide 1" />
        </Carousel.Item>
        <Carousel.Item className="carousel-item" interval={1000}>
          <img src="img/projects/project-7.jpg" alt="slide 2" />
        </Carousel.Item>
        <Carousel.Item className="carousel-item" interval={1000}>
          <img src="img/projects/project-5.jpg" alt="slide 3" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
