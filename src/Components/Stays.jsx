import React, { useEffect, useState } from "react";
import "./CSS/Stays.css";

export default function Stays() {
  const [stays, setStays] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // async API function
  const fetchStays = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        "https://6984da54885008c00db285a7.mockapi.io/stays"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch stays");
      }

      const data = await response.json();
      setStays(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // call API on page load
  useEffect(() => {
    fetchStays();
  }, []);

  return (
    <section className="stays-page">
      <h1>Trending Stays</h1>
      <p>Handpicked villas, resorts & unique getaways</p>

      {/* Loading */}
      {loading && <p className="status">Loading stays...</p>}

      {/* Error */}
      {error && <p className="status error">{error}</p>}

      {/* Success */}
      {!loading && !error && (
        <div className="stays-grid">
          {stays.map((stay) => (
            <div className="stay-card" key={stay.id}>
              <img src={stay.image} alt={stay.name} />
              <div className="stay-info">
                <h3>{stay.name}</h3>
                <p>{stay.location}</p>
                <span>{stay.price}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
