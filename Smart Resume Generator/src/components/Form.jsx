import React, { useState } from 'react';
import html2pdf from 'html2pdf.js/dist/html2pdf.bundle.min';



function SmartResumeGenerator() {
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [educations, setEducations] = useState([]);
  const [resumeData, setResumeData] = useState({
    name: '',
    email: '',
    phone: '',
    countryCode: '+91',
    aboutMe: '',
    profileImage: null,
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setResumeData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleAddSkill = () => {
    const skill = document.getElementById('skillInput').value.trim();
    if (skill) {
      setSkills([...skills, skill]);
      document.getElementById('skillInput').value = '';
    }
  };

  const handleAddExperience = () => {
    const company = document.getElementById('companyInput').value.trim();
    const position = document.getElementById('positionInput').value.trim();
    const duration = document.getElementById('durationInput').value.trim();

    if (company && position && duration) {
      const experience = { company, position, duration };
      setExperiences([...experiences, experience]);
      document.getElementById('companyInput').value = '';
      document.getElementById('positionInput').value = '';
      document.getElementById('durationInput').value = '';
    }
  };

  const handleAddEducation = () => {
    const college = document.getElementById('collegeInput').value.trim();
    const degree = document.getElementById('degreeInput').value;
    const course = document.getElementById('courseInput').value.trim();
    const startDate = document.getElementById('startDateInput').value;
    const endDate = document.getElementById('endDateInput').value;
    const cgpa = document.getElementById('cgpaInput').value.trim();

    if (college && degree && course && startDate && endDate && cgpa) {
      const education = { college, degree, course, startDate, endDate, cgpa };
      setEducations([...educations, education]);

      document.getElementById('collegeInput').value = '';
      document.getElementById('degreeInput').value = '';
      document.getElementById('courseInput').value = '';
      document.getElementById('startDateInput').value = '';
      document.getElementById('endDateInput').value = '';
      document.getElementById('cgpaInput').value = '';
    }
  };

  const handleGenerateResume = () => {
    const { name, email, phone, countryCode, aboutMe, profileImage } = resumeData;

    if (!name || !email || !phone || !aboutMe) {
      alert('Please fill all the required fields.');
      return;
    }

    let resumeContent = `<h2>${name}</h2>
      <p>Email: ${email}</p>
      <p>Phone: ${countryCode} ${phone}</p>
      <h3>About Me</h3>
      <p>${aboutMe}</p>
      <h3>Skills</h3><ul>`;

    skills.forEach((skill) => {
      resumeContent += `<li>${skill}</li>`;
    });

    resumeContent += `</ul><h3>Work Experience</h3><ul>`;

    experiences.forEach((exp) => {
      resumeContent += `<li>Worked as ${exp.position} at ${exp.company} for ${exp.duration} years.</li>`;
    });

    resumeContent += `</ul><h3>Education</h3><ul>`;

    educations.forEach((edu) => {
      resumeContent += `<li class="education-item">
            <div class="education-info">
              <p><strong>${edu.college}</strong>
              <p>${edu.degree} of ${edu.course}</p>
            </div>
            <div class="education-details">
              <p>${edu.startDate} - ${edu.endDate}</p>
              <p>CGPA: ${edu.cgpa}</p>
            </div>
          </li>`;
    });

    resumeContent += `</ul>`;

    document.getElementById('generatedResume').innerHTML = resumeContent;

    if (profileImage) {
      const img = document.createElement('img');
      img.src = URL.createObjectURL(profileImage);
      img.alt = 'Profile Image';
      img.style.width = '30%';
      img.style.maxWidth = '300px';
      img.style.maxHeight = '400px';
      img.style.borderRadius = '10px';
      img.style.border = '2px solid #ccc';
      document.getElementById('generatedResume').prepend(img);
    }

    document.getElementById('generatedResume').style.display = 'block';
    document.getElementById('downloadResumeBtn').style.display = 'inline-block';
  };

  const handleDownloadResume = () => {
    const element = document.getElementById('generatedResume');
    html2pdf().from(element).save('resume.pdf');
  };

  return (
    <div>
      <h1>Smart Resume Generator</h1>

      <form id="resumeForm">
        <label htmlFor="name">Name <span style={{ color: 'red' }}>*</span>:</label>
        <input type="text" id="name" name="name" placeholder="Enter your full name" onChange={handleInputChange} required />

        <label htmlFor="email">Email <span style={{ color: 'red' }}>*</span>:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email address" onChange={handleInputChange} required />

        <label htmlFor="phone">Phone Number <span style={{ color: 'red' }}>*</span>:</label>
        <div className="phone-container">
          <select id="countryCode" name="countryCode" onChange={handleInputChange} required>
            <option value="+91">+91 (India)</option>
            <option value="+1">+1 (USA)</option>
            <option value="+44">+44 (UK)</option>
            <option value="+61">+61 (Australia)</option>
            <option value="+81">+81 (Japan)</option>
          </select>
          <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" onChange={handleInputChange} required />
        </div>

        <label htmlFor="profileImage">Upload Profile Image <span style={{ color: 'red' }}>*</span>:</label>
        <input type="file" id="profileImage" name="profileImage" accept="image/*" onChange={handleInputChange} required />

        <label htmlFor="aboutMe">About Yourself:</label>
        <textarea id="aboutMe" name="aboutMe" placeholder="Enter a few lines about yourself" onChange={handleInputChange} rows="4" required />

        <label htmlFor="skills">Skills:</label>
        <div className="skills-container">
          <input type="text" id="skillInput" placeholder="Enter a skill" />
          <button type="button" onClick={handleAddSkill}>+</button>
        </div>
        <ul id="skillList" className="skill-list">
          {skills.map((skill, index) => (
            <li key={index}>{skill} <span onClick={() => setSkills(skills.filter((s) => s !== skill))}>x</span></li>
          ))}
        </ul>

        <label htmlFor="workExperience">Work Experience:</label>
        <div className="experience-container">
          <input type="text" placeholder="Company Name" id="companyInput" />
          <input type="text" placeholder="Position Held" id="positionInput" />
          <input type="text" placeholder="Duration" id="durationInput" />
          <button type="button" onClick={handleAddExperience}>+</button>
        </div>
        <ul id="experienceList" className="experience-list">
          {experiences.map((exp, index) => (
            <li key={index}>
              Worked as {exp.position} at {exp.company} for {exp.duration} years. <span onClick={() => setExperiences(experiences.filter((e) => e.company !== exp.company))}>x</span>
            </li>
          ))}
        </ul>

        <h2>Education</h2>
        <input type="text" placeholder="Enter College/University Name" id="collegeInput" required />
        <select id="degreeInput" required>
          <option value="">Select Degree</option>
          <option value="Associate">Associate degree</option>
          <option value="Bachelor">Bachelor's degree</option>
          <option value="Master">Master's degree</option>
          <option value="Doctoral">Doctoral degree</option>
        </select>

        <input type="text" placeholder="Enter Course Name" id="courseInput" required />
        <input type="date" id="startDateInput" placeholder="Start Date" required />
        <input type="date" id="endDateInput" placeholder="End Date" required />
        <input type="text" placeholder="Enter CGPA" id="cgpaInput" required />
        <button type="button" onClick={handleAddEducation}>Add Education</button>
        <ul id="educationList" className="education-list">
          {educations.map((edu, index) => (
            <li key={index}>
              <strong>{edu.college}</strong> - {edu.degree} of {edu.course}. {edu.startDate} to {edu.endDate}. CGPA: {edu.cgpa}.
              <span onClick={() => setEducations(educations.filter((e) => e.college !== edu.college))}>x</span>
            </li>
          ))}
        </ul>

        <button type="button" id="generateResumeBtn" onClick={handleGenerateResume}>Generate Resume</button>
      </form>

      <div id="generatedResume" style={{ display: 'none' }}></div>
      <button type="button" id="downloadResumeBtn" onClick={handleDownloadResume} style={{ display: 'none' }}>Download PDF</button>
    </div>
  );
}

export default SmartResumeGenerator;
