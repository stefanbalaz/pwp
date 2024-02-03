import React from "react";

function Skills() {
  return (
    <div>
      <h3>SKILLS</h3>

      {/* Hard skills */}
      <div className="content_block">
        <div className="skills_headline">Hard Skills</div>
        <ul className="skills_list">
          <li className="skill_element">HTML</li>
          <li className="skill_element">CSS</li>
          <li className="skill_element">JavaScript</li>
          <li className="skill_element">TypeScript</li>
          <li className="skill_element">React</li>
          <li className="skill_element">Node.js</li>
          <li className="skill_element">Express</li>
          <li className="skill_element">SQL</li>
          <li className="skill_element">MongoDB</li>
          <li className="skill_element">Git</li>
          <li className="skill_element">Github</li>
        </ul>
      </div>

      {/* Techniques */}
      <div className="content_block">
        <div className="skills_headline">Techniques</div>
        <ul className="skills_list">
          <li className="skill_element">Lean</li>
          <li className="skill_element">Scrum</li>
          <li className="skill_element">Kanban</li>
          <li className="skill_element">Scrumban</li>
          <li className="skill_element">Waterfall method</li>
        </ul>
      </div>

      {/* Tools and software */}
      <div className="content_block">
        <div className="skills_headline">Tools and Software</div>
        <ul className="skills_list">
          <li className="skill_element">JIRA</li>
          <li className="skill_element">Confluence</li>
          <li className="skill_element">Asana</li>
          <li className="skill_element">Miro</li>
          <li className="skill_element">Figma</li>
          <li className="skill_element">Balsamiq</li>
          <li className="skill_element">Mockflow</li>
          <li className="skill_element">Gliffy-Diagram</li>
          <li className="skill_element">Invision</li>
          <li className="skill_element">Gimp</li>
          <li className="skill_element">Google Analytics</li>
          <li className="skill_element">Google Sheet</li>
          <li className="skill_element">MS Excel</li>
          <li className="skill_element">MS Word</li>
          <li className="skill_element">MS PowerPoint</li>
          <li className="skill_element">MS Visio</li>
        </ul>
      </div>

      {/* Soft skills */}
      <div className="content_block">
        <div className="skills_headline">Soft Skills</div>
        <ul className="skills_list">
          <li className="skill_element">Efficiency</li>
          <li className="skill_element">Analytical Skills</li>
          <li className="skill_element">Resilience</li>
          <li className="skill_element">Attention to Detail</li>
          <li className="skill_element">User-Centered Focus</li>
          <li className="skill_element">Time Management</li>
          <li className="skill_element">Critical Thinking</li>
          <li className="skill_element">Conflict Resolution</li>
          <li className="skill_element">Listening Skills</li>
          <li className="skill_element">Problem-Solving</li>
        </ul>
      </div>

      {/* Languages */}
      <div className="content_block">
        <div className="skills_headline">Languages</div>
        <ul className="skills_list">
          <li className="skill_element">German: C2 level</li>
          <li className="skill_element">English: C2 level</li>
          <li className="skill_element">Czech: C2 level</li>
          <li className="skill_element">Slovak: Native language</li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
