import React from "react";

function Education() {
  return (
    <div>
      <h3>EDUCATION</h3>

      {/* WBS Coding School */}
      <div className="content_block">
        <div className="resume_institution">
          WBS Coding School, Berlin, Germany
        </div>
        <div className="resume_activity_date">
          <div className="resume_activity">Web & App Development Bootcamp</div>
          <div className="resume_date">07/2023 - 11/2023</div>
        </div>

        <ul className="education_career_list">
          <li>Project based with an emphasis on working in teams</li>
          <li>Combination of instructor-led and self-driven learning</li>
          <li>
            Final project: admin dashboard tool with a focus on digitalizing and
            optimizing operational processes for the AMATE soft drink project.
          </li>
        </ul>
      </div>
      {/* Humboldt University of Berlin */}
      <div className="content_block">
        <div className="resume_institution">
          Humboldt University of Berlin, Germany
        </div>
        <div className="resume_activity_date">
          <div className="resume_activity">
            Business Administration, Erasmus Exchange Program
          </div>
          <div className="resume_date">10/2003 - 09/2005</div>
        </div>

        <ul className="education_career_list">
          <li>Specialization: Marketing</li>
        </ul>
      </div>
      {/* Charles University, Prague, Czech Republic */}
      <div className="content_block">
        <div className="resume_institution">
          Charles University, Prague, Czech Republic
        </div>
        <div className="resume_activity_date">
          <div className="resume_activity">Master's Degree in Economics</div>
          <div className="resume_date">10/2001 - 09/2007</div>
        </div>

        <ul className="education_career_list">
          <li>Specialization: Marketing & Management</li>
          <li>Focus on the Sports Industry</li>
        </ul>
      </div>
    </div>
  );
}

export default Education;
