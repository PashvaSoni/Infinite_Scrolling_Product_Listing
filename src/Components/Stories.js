import React, { useRef, useEffect } from "react";
import StoryItem from "./story-item.js";
import Box from "./box.js";

export default function Stories({ stories }) {
  const windowRef = useRef(null);

  useEffect(() => {
    if (windowRef.current.clientWidth > 0) {
      windowRef.current.scrollLeft = windowRef.current.scrollWidth;
    }
  }, [stories]);

  return (
    <Box className="stories-container" border>
      <div className="stories-feed" ref={windowRef}>
        {stories &&
          stories.map((item) => {
            return <StoryItem data={item} key={item.username} />;
          })}
      </div>
    </Box>
  );
}
