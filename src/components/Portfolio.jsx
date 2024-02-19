import React, { useState } from "react";

function Portfolio() {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div>
      <h3>PORTFOLIO</h3>

      {/* ADMIN DASHBOARD */}

      <div className="content_block">
        {/* HEADLINE */}
        <div className="card_headline">Admin Dashboard</div>

        <div className="portfolio_card">
          <div className="card_image">
            {/* IMAGE */}
            <div className="product-image">
              <img src="AMATE_Admit_Tool.png" alt="Admin Tool Photo" />

              <div className="hover-img">
                <img src="AMATE_Admit_Tool.png" alt="Admin Tool Photo" />
              </div>
            </div>
          </div>
          <div className="card_content">
            {/* ICONS */}
            <div className="card_icons">
              <div className="icon_element">
                <div className="tooltip">React</div>
                <img
                  src="../../React_Logo.png"
                  className="tech_icon"
                  alt="React Logo"
                />
                <div className="tech_name">React</div>
              </div>
              <div className="icon_element">
                <div className="tooltip">Node.js</div>
                <img
                  src="../../Node.js_Logo.png"
                  className="tech_icon"
                  alt="Node.js Logo"
                />
                <div className="tech_name">Node.js</div>
              </div>
              <div className="icon_element">
                <div className="tooltip">MongoDB</div>
                <img
                  src="../../MongoDB_Logo.png"
                  className="tech_icon"
                  alt="MongoDB Logo"
                />
                <div className="tech_name">MongoDB</div>
              </div>
              <div className="icon_element">
                <div className="tooltip">Tallwind CSS</div>
                <img
                  src="../../Tallwind_Logo.png"
                  className="tech_icon"
                  alt="Tallwind CSS Logo"
                />
                <div className="tech_name">Tallwind CSS</div>
              </div>
            </div>
            {/* DESCRIPTION */}
            <div className="card_description">
              <ul className="card_description_list">
                <li>
                  Admin dashboard enhancing operational excellence through
                  comprehensive digitalization.
                </li>
                <li>
                  Efficiency and management optimization across back-office
                  processes.
                </li>
                <li>
                  Key features: status management, invoice issuance, email
                  notifications, etc.
                </li>
              </ul>
            </div>

            {/* Toggle "More Details" visibility */}
            <div className="more-details-link" onClick={toggleDetails}>
              {showDetails ? "Less Details" : "More Details"}{" "}
              {showDetails ? "▲" : "▼"}
            </div>

            {/* Expandable "More Details" link */}
            {showDetails && (
              <div className="expandable-content">
                <div style={{ fontWeight: "bold" }}>
                  <p> WORK IN PROGRESS</p>
                </div>
                <div style={{ textDecoration: "underline" }}>
                  <p>Working in current version:</p>
                </div>
                <ul className="card_description_list">
                  <li>Sign-up, Log-in, Log-out</li>
                  <li>Order overview</li>
                  <li>Order status change, Payment status change</li>
                  <li>Invoice creation</li>
                  <li>Expandable row with order details (missing data)</li>
                </ul>
              </div>
            )}

            {/* BUTTON */}
            <div className="tooltip-container">
              <div className="tooltip">
                Username: guest <br />
                Password: guest
                <br />
                <br />
                After login, wait briefly for backend activation.
              </div>
              <button
                className="btn custom-button"
                onClick={() =>
                  window.open(
                    "https://delivery-price-calculator.netlify.app/",
                    "_blank"
                  )
                }
              >
                Visit
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* DELIVERY PRICE CALCULATOR */}

      <div className="content_block">
        {/* HEADLINE */}
        <div className="card_headline">Delivery Price Calculator</div>

        <div className="portfolio_card">
          <div className="card_image">
            {/* IMAGE */}
            <div className="product-image">
              <img
                src="Delivery_Price_Calculator.png"
                alt="Delivery price calculator"
              />

              <div className="hover-img">
                <img
                  src="Delivery_Price_Calculator.png"
                  alt="Delivery price calculator"
                />
              </div>
            </div>
          </div>
          <div className="card_content">
            {/* ICONS */}
            <div className="card_icons">
              <div className="icon_element">
                <div className="tooltip">React</div>
                <img
                  src="../../React_Logo.png"
                  className="tech_icon"
                  alt="React Logo"
                />
                <div className="tech_name">React</div>
              </div>
              <div className="icon_element">
                <div className="tooltip">Typescript</div>
                <img
                  src="../../Typescript_Logo.png"
                  className="tech_icon"
                  alt="Typescript Logo"
                />
                <div className="tech_name">Typescript</div>
              </div>
              <div className="icon_element">
                <div className="tooltip">Bootstrap</div>
                <img
                  src="../../Bootstrap_Logo.png"
                  className="tech_icon"
                  alt="Bootstrap Logo"
                />
                <div className="tech_name">Bootstrap</div>
              </div>
            </div>
            {/* DESCRIPTION */}
            <div className="card_description">
              <ul className="card_description_list">
                <li>
                  Online tool for the drink delivery service designed for mobile
                  devices.
                </li>
                <li>
                  Streamlining pricing calculations and enhancing operational
                  efficiency.
                </li>
                <li>
                  Key features: precise calculation based on sold and received
                  items, sending detailed calculations to customer via email.
                </li>
              </ul>
            </div>
            {/* BUTTON */}
            {/*   <div className="tooltip-container">
              <div className="tooltip">Test</div> */}
            <button
              className="btn custom-button"
              onClick={() =>
                window.open(
                  "https://delivery-price-calculator.netlify.app/",
                  "_blank"
                )
              }
            >
              Visit
            </button>
            {/*  </div> */}
          </div>
        </div>
      </div>

      {/* PERSONANAL WEBSITE */}

      <div className="content_block">
        {/* HEADLINE */}
        <div className="card_headline">Personal Website</div>

        <div className="portfolio_card">
          <div className="card_image">
            {/* IMAGE */}
            <div className="product-image">
              <img src="Personal_Website.png" alt="Personal Website" />

              <div className="hover-img">
                <img src="Personal_Website.png" alt="Personal Website" />
              </div>
            </div>
          </div>
          <div className="card_content">
            {/* ICONS */}
            <div className="card_icons">
              <div className="icon_element">
                <div className="tooltip">React</div>
                <img
                  src="../../React_Logo.png"
                  className="tech_icon"
                  alt="React Logo"
                />
                <div className="tech_name">React</div>
              </div>
              <div className="icon_element">
                <div className="tooltip">HTML</div>
                <img
                  src="../../HTML5_Logo.png"
                  className="tech_icon"
                  alt="HTML Logo"
                />
                <div className="tech_name">HTML</div>
              </div>
              <div className="icon_element">
                <div className="tooltip">CSS</div>
                <img
                  src="../../CSS_Logo.png"
                  className="tech_icon"
                  alt="CSS Logo"
                />
                <div className="tech_name">CSS</div>
              </div>
            </div>
            {/* DESCRIPTION */}
            <div className="card_description">
              <ul className="card_description_list">
                <li>
                  Highlighting diverse projects, CV, and skills to provide a
                  comprehensive overview of achievements and capabilities.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
