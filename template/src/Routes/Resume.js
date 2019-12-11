import React from 'react';
import { useSelector } from 'react-redux'

const Resume = () => {
  const data = useSelector(state => state.resumeData.data);

  const renderEducation = () => {
    if (data.resume && data.resume.education) {
      return data.resume.education.map(education => {
        return (
          <div key={education.school}><h3>{education.school}</h3>
          <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
          <p>{education.description}</p></div>
        );
      })
    }
  }

  const renderWork = () => {
    if (data.resume && data.resume.work) {
      return data.resume.work.map(work => {
        return (
          <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
          </div>
        );
      })
    }
  }

  const renderSkills = () => {
    if (data.resume && data.resume.skills) {
      return data.resume.skills.map(skill => {
        var className = 'bar-expand ' + skill.name.toLowerCase();
        return (
          <li key={skill.name}>
            <span style={{width:skill.level}}className={className}></span><em>{skill.name}</em>
          </li>
        );
      })
    }
  }

  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1><span>Education</span></h1>
        </div>
        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              {renderEducation()}
            </div>
          </div>
        </div>
      </div>
      <div className="row work">
        <div className="three columns header-col">
          <h1><span>Work</span></h1>
        </div>
        <div className="nine columns main-col">
          {renderWork()}
        </div>
      </div>
      <div className="row skill">
        <div className="three columns header-col">
          <h1><span>Skills</span></h1>
        </div>
        <div className="nine columns main-col">
          <p>{data.skillmessage}</p>
          <div className="bars">
            <ul className="skills">
              {renderSkills()}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
