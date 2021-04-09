import { useRef, useEffect } from "react";
import Link from "next/link";
import videojs from "video.js";
import "video.js/dist/video-js.css";

export default function IndexPage() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videojs(videoRef.current, {
        sources: [
          {
            src: "https://stream.mux.com/cgDHZh67MBs8ObF9kyLxReTk01b16HWpO.m3u8",
            type: 'application/x-mpegURL'
          }
        ]
      });
    }
  }, [videoRef]);

  return (
    <div>
      Hello World.{" "}
      <Link href="/about">
        <a>About</a>
      </Link>
      <video ref={videoRef} controls className="video-js" />
    </div>
  );
}
