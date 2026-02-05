import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-light mt-5">
      <div className="container py-5">

        <div className="row gy-4">

          {/* BRAND */}
          <div className="col-12 col-md-3">
            <h4 className="fw-bold mb-3">StayVista</h4>
            <p className="text-secondary small">
              Curated luxury villas & premium holiday homes across India.
            </p>
          </div>

          {/* COMPANY */}
          <div className="col-6 col-md-2">
            <h6 className="fw-semibold mb-3">Company</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/stays" className="footer-link">Stays</a></li>
              <li><a href="/experiences" className="footer-link">Experiences</a></li>
            </ul>
          </div>

          {/* DESTINATIONS */}
          <div className="col-6 col-md-2">
            <h6 className="fw-semibold mb-3">Destinations</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="footer-link">Goa</a></li>
              <li><a href="#" className="footer-link">Lonavala</a></li>
              <li><a href="#" className="footer-link">Udaipur</a></li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div className="col-6 col-md-2">
            <h6 className="fw-semibold mb-3">Support</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="footer-link">FAQs</a></li>
              <li><a href="#" className="footer-link">Contact Us</a></li>
              <li><a href="#" className="footer-link">Privacy Policy</a></li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div className="col-12 col-md-3">
            <h6 className="fw-semibold mb-3">Newsletter</h6>
            <p className="text-secondary small">
              Get exclusive offers & luxury travel inspiration.
            </p>

            <div className="d-flex gap-2">
              <input
                type="email"
                className="form-control form-control-sm"
                placeholder="Your email"
              />
              <button className="btn btn-outline-light btn-sm">
                Subscribe
              </button>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-top border-secondary mt-4 pt-3 d-flex flex-column flex-md-row justify-content-between align-items-center">
          <p className="small mb-2 mb-md-0 text-secondary">
            © 2025 StayVista. All rights reserved.
          </p>

          <div className="d-flex gap-3">
            <a href="#" className="footer-link small">Instagram</a>
            <a href="#" className="footer-link small">Facebook</a>
            <a href="#" className="footer-link small">Twitter</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
