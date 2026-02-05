import { useState } from 'react'
import React from 'react'
import './CSS/Banner.css'

export default function Banner() {
    const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
    <div className='banner'>
      <div className="banner-wrapper">
      <div id="carouselExampleDark" className="carousel carousel-dark slide">
        
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        <div className="carousel-inner">

          {/* Slide 1 */}
          <div className="carousel-item active" data-bs-interval="5000">
            <img
              src="https://www.nomadicmatt.com/wp-content/uploads/2024/03/hotelhub.jpeg"
              className="d-block w-100"
              alt="Luxury stay"
            />
            <div className="carousel-caption d-none d-md-block">
              <h2>Curated Luxury Stays</h2>
              <p>Handpicked villas and hotels for unforgettable getaways.</p>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item" data-bs-interval="5000">
            <img
              src="https://res.cloudinary.com/enchanting/images/w_1600,h_700,c_fill,f_auto,q_70/artemis-mdm/hotels/c8a0550d-851b-408b-ad8d-bc74c0ea92ef/hotel-the-serai-jaisalmer-north-india.jpg"
              className="d-block w-100"
              alt="Private villas"
            />
            <div className="carousel-caption d-none d-md-block">
              <h2>Private Villas & Resorts</h2>
              <p>Experience comfort, privacy, and world-class hospitality.</p>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item" data-bs-interval="5000">
            <img
              src="https://media.easemytrip.com/media/Blog/India/636970596180878354/636970596180878354paOnpI.jpg"
              className="d-block w-100"
              alt="Holiday destinations"
            />
            <div className="carousel-caption d-none d-md-block">
              <h2>Escape to Stunning Destinations</h2>
              <p>From beaches to mountains — your perfect stay awaits.</p>
            </div>
          </div>

        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

      </div>
</div>



      <form>
  <fieldset >
    <legend>Search Home away from Home.</legend>
    <hr />
   
 <div className="mb-3">
  <select className="form-select form-select-sm" aria-label="Select location">
    <option defaultValue>Select Location</option>
    <option value="goa">Goa</option>
    <option value="lonavala">Lonavala</option>
    <option value="alibaug">Alibaug</option>
    <option value="udaipur">Udaipur</option>
    <option value="jaipur">Jaipur</option>
    <option value="manali">Manali</option>
    <option value="shimla">Shimla</option>
    <option value="mussoorie">Mussoorie</option>
    <option value="coorg">Coorg</option>
    <option value="wayanad">Wayanad</option>
    <option value="ooty">Ooty</option>
    <option value="rishikesh">Rishikesh</option>
  </select>
</div>

<div className="date">
<label className="form-label">Start Date</label>
 {/* Start Date */}
      <input
        type="date"
        className="form-control"
        value={startDate}
        onChange={(e) => {
          setStartDate(e.target.value);
          setEndDate(""); // reset end date when start date changes
        }}
        min={new Date().toISOString().split("T")[0]}
      />

<label className="form-label">End Date</label>
      {/* End Date */}
      <input
        type="date"
        className="form-control"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        min={startDate}
        disabled={!startDate}
      />
</div>

     <div className="mb-3">
  <select className="form-select form-select-sm" aria-label="Select location">
    <option defaultValue>Select Guests Number</option>
    <option value="goa">1 Adult</option>
    <option value="lonavala">2 Adult</option>
    <option value="alibaug">2 Adult</option>
    <option value="udaipur">3 Adult</option>
    <option value="jaipur">4 Adult</option>
    <option value="manali">1 Child 1 Adult</option>
    <option value="shimla">1 Child 2 Adult</option>
    <option value="mussoorie">2 Child 1 Adult</option>
    <option value="coorg">2 Child 2 Adult</option>
    <option value="wayanad">More (Delux Rooms oprion avail)</option>
  </select>
</div>

    <button type="submit" className="btn btn-primary">Submit</button>
  </fieldset>
</form>
    </div>
  )
}
