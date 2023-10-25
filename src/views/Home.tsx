import { getAuth, signOut } from "firebase/auth";
import { useEffect } from "react";

import { initHlsPlayer } from "inithlsplayer";

const Home = () => {
  const auth = getAuth();

  useEffect(() => {
    const initVideoPlayer = async () => {
      // const videoElement = document.getElementById(
      //   "player"
      // ) as HTMLMediaElement;
      //const hls = new Hls();

      try {
        const videoName = "rou";
        const videoClip = "rou.m3u8";
        const apiUrl = `https://localhost:7255/api/HLS/${videoName}/${videoClip}`;

        initHlsPlayer("player", apiUrl);

        // hls.loadSource(apiUrl);
        //hls.attachMedia(videoElement);
      } catch (error) {
        console.error("Error getting Firebase Authentication Token:", error);
      }
    };

    initVideoPlayer();
  }, []); // The empty dependency array ensures that this effect runs only once, similar to componentDidMount

  return (
    <>
      <h1>Home</h1>
      <video id="player" style={{ width: "90vw" }} controls></video>
      <button onClick={() => signOut(auth)}>Sign Out</button>
    </>
  );
};

export default Home;
