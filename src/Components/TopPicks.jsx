import React from 'react'
import './CSS/TopPicks.css'

export default function TopPicks() {
  const locations = [
  {
    name: "Taj Mahal, Agra",
    image:
      "https://images.pexels.com/photos/27945032/pexels-photo-27945032.jpeg",
  },
  {
    name: "Goa Beaches",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Jaipur (Hawa Mahal)",
    image:
      "https://images.unsplash.com/photo-1544986581-efac024faf62?auto=format&fit=crop&w=800&q=80",
  },
 {
    name: "Udaipur",
    image:
      "https://images.unsplash.com/photo-1599661046289-e31897846e41",
  },
  {
    name: "Coorg",
    image:
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2",
  },
    {
    name: "Rishikesh",
    image:
      "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16",
  },
  {
    name: "Kerala Backwaters",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Mumbai – Gateway of India",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
  },
 {
  name: "Varanasi Ghats, Uttar Pradesh",
  image:
    "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80",
},
{
  name: "Ladakh Mountains",
  image:
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
}
];


const internationalLocations=[
    {
  name: "Paris, France",
  image:
    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
},
{
  name: "Bali, Indonesia",
  image:
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
},
  {
    name: "Singapore",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Maldives",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  },
{
  name: "Kyoto, Japan",
  image:
    "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=800&q=80",
}
]

  return (
    <>
     <p id='heading'>Pick a Destination</p>
<p>Domestic Properties</p>
      <div id='row' className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4">  
  {locations.map((loc, index) => (
    <div className="col" key={index}>
      <div className="card1 h-100">
        <div className="row g-0">
          <div className="col-5">
            <img
              src={loc.image}
              className="img-fluid rounded-start"
              alt={loc.name}
            />
          </div>
          <div className="col-7">
            <div className="card-body">
              <h6 className="card-title mb-0">{loc.name}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>



<p id='internationProperties'>International Properties</p>
<div id='row' className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4">  
  {internationalLocations.map((loc, index) => (
    <div className="col" key={index}>
      <div className="card1 h-100">
        <div className="row g-0">
          <div className="col-5">
            <img
              src={loc.image}
              className="img-fluid rounded-start"
              alt={loc.name}
            />
          </div>
          <div className="col-7">
            <div className="card-body">
              <h6 className="card-title mb-0">{loc.name}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
    </>
  )
}
