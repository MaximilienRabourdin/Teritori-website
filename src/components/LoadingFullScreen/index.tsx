import * as React from "react";
import Lottie from "lottie-react";

const LoadingFullScreen: React.FC = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,.8)",
        position: "absolute",
        zIndex: 10,
      }}
    >
      <div
        style={{
          height: 80,
          width: 80,
          borderRadius: 999,
          margin: "auto",
        }}
      >
        <Lottie
          animationData={require("./animation-full-screen.json")}
          autoPlay
          loop
        />
      </div>
    </div>
  );
};

export default LoadingFullScreen;