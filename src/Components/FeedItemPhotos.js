import React, { useState, useRef, useEffect } from "react";

const FeedItemPhotos = ({ photos }) => {
  const photoContainerRef = useRef(null);
  const [autoPlayVideoIndex, setAutoPlayVideoIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = photoContainerRef.current;
      if (container) {
        const scrollLeft = container.scrollLeft;
        const scrollWidth = container.scrollWidth - container.clientWidth;
        if (scrollLeft === scrollWidth) {
          // Reached the end of the container
          setAutoPlayVideoIndex(null); // Stop autoplaying
        }
      }
    };

    if (autoPlayVideoIndex !== null) {
      const interval = setInterval(() => {
        if (photoContainerRef.current) {
          const nextIndex =
            (autoPlayVideoIndex + 1) % Math.max(photos.length, 1);
          photoContainerRef.current.scrollLeft =
            nextIndex * photoContainerRef.current.clientWidth;
          setAutoPlayVideoIndex(nextIndex);
        }
      }, 3000); // Change autoplay interval as per your requirement

      return () => clearInterval(interval);
    }

    window.addEventListener("resize", handleScroll);

    return () => window.removeEventListener("resize", handleScroll);
  }, [autoPlayVideoIndex, photos]);

  return (
    <div ref={photoContainerRef}>
      {photos.map((item, index) => (
        <div key={index} className="photo-item">
          {item.mediaType === "image" ? (
            <img className="feed-photo" src={item.mediaURL} alt={`Image ${index}`} />
          ) : (
            <video
              src={item.mediaURL}
              autoPlay={index === 0} // Autoplay the first video
              muted
              loop
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default FeedItemPhotos;
