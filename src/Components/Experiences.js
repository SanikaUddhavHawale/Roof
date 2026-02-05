import React, { useRef } from "react";
import useScrollReveal from "./useScrollReveal";
import "./CSS/Experiences.css";
import Header from "./Header";

export default function Experiences() {
  const weddingRef = useRef(null);
  const wellnessRef = useRef(null);
  const partyRef = useRef(null);

  useScrollReveal(weddingRef);
  useScrollReveal(wellnessRef);
  useScrollReveal(partyRef);

  return (
    <div className="experiences-page">
<Header/>
      {/* HERO */}
      <section className="experiences-hero">
  <h1>Experiences & Events</h1>
  <p>
    Curated moments, unforgettable celebrations, and soulful experiences
  </p>
</section>


      {/* EXPERIENCE CARDS */}
      <section className="experiences-grid">

        <div ref={weddingRef} className="experience-card hidden">
          <img
            src="https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac"
            alt="Weddings"
          />
          <div className="content">
            <h3>Destination Weddings</h3>
            <p>
              Celebrate your special day amidst luxury villas and breathtaking
              backdrops.
            </p>
          </div>
        </div>

        <div ref={wellnessRef} className="experience-card hidden">
          <img
            src="https://images.unsplash.com/photo-1552693673-1bf958298935"
            alt="Wellness"
          />
          <div className="content">
            <h3>Wellness Retreats</h3>
            <p>
              Rejuvenate your body and mind with curated wellness escapes.
            </p>
          </div>
        </div>

        <div ref={partyRef} className="experience-card hidden">
          <img
            src="https://images.unsplash.com/photo-1521336575822-6da63fb45455"
            alt="Private Events"
          />
          <div className="content">
            <h3>Private Parties & Events</h3>
            <p>
              From intimate celebrations to grand soirées, host with elegance.
            </p>
          </div>
        </div>

      </section>
    </div>
  );
}
