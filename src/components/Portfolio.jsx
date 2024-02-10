import React from "react";

function Portfolio() {
  return (
    <div>
      <h3>PORTFOLIO</h3>

      {/* AMATE ADMIN DASHBOARD */}

      <div className="content_block">
        {/* HEADLINE */}
        <div className="card_headline">AMATE Admin Dashboard</div>

        <div className="portfolio_card">
          <div className="card_image">
            {/* IMAGE */}
            <div className="product-image">
              <img src="AMATE_Admit_Tool.png" alt="AMATE Admin Tool Photo" />

              <div className="hover-img">
                <img src="AMATE_Admit_Tool.png" alt="AMATE Admin Tool Photo" />
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
            {/* BUTTON */}
            <button className="btn custom-button">Visit</button>
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
            <button
              className="btn custom-button"
              onClick={() =>
                window.open(
                  "https://courageous-pavlova-6c49c4.netlify.app/",
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
  );
}

export default Portfolio;
