import { useState } from "react";

const VideoPlayer = ({ video }: { video: string }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadedData = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative">
      {isLoading && (
        <div className="max-w-[1150px] min-h-[500px] w-full animate-pulse"></div>
      )}
      <video
        className={`max-w-[1150px] min-h-[500px] w-full ${
          isLoading ? "hidden" : ""
        }`}
        controls
        onLoadedData={handleLoadedData}
      >
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoPlayer;
