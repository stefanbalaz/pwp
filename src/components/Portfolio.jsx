import React from "react";

function Portfolio() {
  return (
    <div>
      <h3>PORTFOLIO</h3>

      <div className="content_block">
        <div className="portfolio_card">
          <div className="card_content">
            {/* HEADLINE */}
            <div className="card_headline">AMATE Admin Dashboard</div>

            {/* IMAGE */}

            <div className="product-image">
              <a href="#">
                <img
                  src="../../AMATE_Admit_Tool.png"
                  alt="AMATE Admin Tool Photo"
                />
              </a>
            </div>

            {/* ICONS */}
            <div className="card_icons">
              <div className="icon_element">
                <img
                  src="../../React_Logo.png"
                  className="tech_icon"
                  alt="React Logo"
                />
                <div className="tech_name">React</div>
              </div>
              <div className="icon_element">
                <img
                  src="../../Node.js_Logo.png"
                  className="tech_icon"
                  alt="Node.js Logo"
                />
                <div className="tech_name">Node.js</div>
              </div>
              <div className="icon_element">
                <img
                  src="../../MongoDB_Logo.png"
                  className="tech_icon"
                  alt="MongoDB Logo"
                />
                <div className="tech_name">MongoDB</div>
              </div>
              <div className="icon_element">
                <img
                  src="../../Tallwind_Logo.png"
                  className="tech_icon"
                  alt="Tallwind CSS Logo"
                />
                <div className="tech_name">Tallwind CSS</div>
              </div>
            </div>

            {/* DESCRIPTION */}
            <div className="card_description">DESCRIPTION</div>

            {/* BUTTON */}
            <button className="btn custom-button">Visit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
