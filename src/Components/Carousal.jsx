import React, { useState } from "react";
import "./CSS/Carousal.css";
import vv1 from "./Images-Videos/vv1.mp4";
import vv2 from "./Images-Videos/vv2.mp4";
import vv3 from "./Images-Videos/vv3.mp4";
import vv4 from "./Images-Videos/vv4.mp4";
import vv5 from "./Images-Videos/vv5.mp4";
import ad1 from "./Images-Videos/ad1.png";

const videos = [
  { src: vv1, title: "Luxury Villa", desc: "Private Pool • Goa" },
  { src: vv2, title: "Forest Villa", desc: "Sea View Rooms" },
  { src: vv3, title: "Hill Retreat", desc: "Nature Stay" },
  { src: vv4, title: "Premium Stay", desc: "Couple Friendly" },
  { src: vv5, title: "Beach Resort", desc: "Pet Friendly" },
];

export default function Carousal() {
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleHotspotClick = async () => {
    try {
      setStatus("loading");

      // simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setStatus("success");

      // redirect after success
      setTimeout(() => {
        window.location.href = "https://www.borcellebeachresort.com/";
      }, 800);
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="carousal">
      <p id="heading">Trending this season</p>
      <p>Handpicked stays and experiences guests are loving right now</p>

      {/* VIDEO CAROUSEL */}
      <div className="track">
        {[...videos, ...videos].map((video, index) => (
          <div className="card video-card" key={index}>
            <video src={video.src} autoPlay muted loop playsInline />
            <div className="overlay">
              <h5>{video.title}</h5>
              <p>{video.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* IMAGE WITH HOTSPOT */}
      <div className="image-wrapper">
        <img id="ad1" src={ad1} alt="Borcelle Beach Resort" />

        {/* CLICK POINT */}
        <span className="hotspot" onClick={handleHotspotClick}></span>

        {/* STATUS UI */}
        {status === "loading" && (
          <div className="status loading">Loading resort details…</div>
        )}
        {status === "success" && (
          <div className="status success">Redirecting to Borcelle Resort…</div>
        )}
        {status === "error" && (
          <div className="status error">Something went wrong. Try again.</div>
        )}
      </div>
    </div>
  );
}
