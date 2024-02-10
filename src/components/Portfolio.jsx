import React from "react";

function Portfolio() {
  return (
    <div>
      <h3>PORTFOLIO</h3>

      <div className="content_block">
        {/* HEADLINE */}
        <div className="card_headline">AMATE Admin Dashboard</div>

        <div className="portfolio_card">
          <div className="card_image">
            {/* IMAGE */}
            <div className="product-image">
              <a href="#">
                <img src="AMATE_Admit_Tool.png" alt="AMATE Admin Tool Photo" />
              </a>
              <div className="hover-img">
                <a href="#">
                  <img
                    src="AMATE_Admit_Tool.png"
                    alt="AMATE Admin Tool Photo"
                  />
                </a>
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
    </div>
  );
}

export default Portfolio;
