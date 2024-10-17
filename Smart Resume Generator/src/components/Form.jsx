import React, { useState } from 'react';
import html2pdf from 'html2pdf.js/dist/html2pdf.bundle.min';
import './Form.css';

const SmartResumeGenerator = () => {
    const [skills, setSkills] = useState([]);
    const [experiences, setExperiences] = useState([]);
    const [educations, setEducations] = useState([]);
    const [projects, setProjects] = useState([]);
    const [resumeContent, setResumeContent] = useState('');
    const [profileImage, setProfileImage] = useState(null);

    const handleAddSkill = (e) => {
        e.preventDefault();
        const skillInput = document.getElementById('skillInput');
        const skill = skillInput.value.trim();
        if (skill) {
            setSkills([...skills, skill]);
            skillInput.value = '';
        }
    };

    const handleRemoveSkill = (skillToRemove) => {
        setSkills(skills.filter(skill => skill !== skillToRemove));
    };

    const handleAddExperience = (e) => {
        e.preventDefault();
        const companyInput = document.getElementById('companyInput');
        const positionInput = document.getElementById('positionInput');
        const durationInput = document.getElementById('durationInput');
        const company = companyInput.value.trim();
        const position = positionInput.value.trim();
        const duration = durationInput.value.trim();

        if (company && position && duration) {
            setExperiences([...experiences, { company, position, duration }]);
            companyInput.value = '';
            positionInput.value = '';
            durationInput.value = '';
        }
    };

    const handleRemoveExperience = (companyToRemove) => {
        setExperiences(experiences.filter(exp => exp.company !== companyToRemove));
    };

    const handleAddEducation = (e) => {
        e.preventDefault();
        const collegeInput = document.getElementById('collegeInput');
        const degreeInput = document.getElementById('degreeInput');
        const courseInput = document.getElementById('courseInput');
        const startDateInput = document.getElementById('startDateInput');
        const endDateInput = document.getElementById('endDateInput');
        const cgpaInput = document.getElementById('cgpaInput');
        const college = collegeInput.value.trim();
        const degree = degreeInput.value;
        const course = courseInput.value.trim();
        const startDate = startDateInput.value;
        const endDate = endDateInput.value;
        const cgpa = cgpaInput.value.trim();

        if (college && degree && course && startDate && endDate && cgpa) {
            setEducations([...educations, { college, degree, course, startDate, endDate, cgpa }]);
            collegeInput.value = '';
            degreeInput.value = '';
            courseInput.value = '';
            startDateInput.value = '';
            endDateInput.value = '';
            cgpaInput.value = '';
        }
    };

    const handleAddProject = (e) => {
        e.preventDefault();
        const projectNameInput = document.getElementById('projectNameInput');
        const projectDescriptionInput = document.getElementById('projectDescriptionInput');
        const projectName = projectNameInput.value.trim();
        const projectDescription = projectDescriptionInput.value.trim();

        if (projectName && projectDescription) {
            setProjects([...projects, { projectName, projectDescription }]);
            projectNameInput.value = '';
            projectDescriptionInput.value = '';
        }
    };

    const handleRemoveProject = (projectToRemove) => {
        setProjects(projects.filter(proj => proj.projectName !== projectToRemove));
    };

    const generateResume = () => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const countryCode = document.getElementById('countryCode').value;
        const phone = document.getElementById('phone').value;
        const aboutMe = document.getElementById('aboutMe').value;

        if (!name || !email || !phone || !aboutMe) {
            alert("Please fill all the required fields.");
            return;
        }

        let resumeHTML = `<h2>${name}</h2>
            <p>Email: ${email}</p>
            <p>Phone: ${countryCode} ${phone}</p>
            <h3>About Me</h3>
            <p>${aboutMe}</p>
            <h3>Skills</h3><ul>`;

        skills.forEach(skill => {
            resumeHTML += `<li>${skill}</li>`;
        });

        resumeHTML += `</ul><h3>Work Experience</h3><ul>`;

        experiences.forEach(exp => {
            resumeHTML += `<li>Worked as ${exp.position} at ${exp.company} for ${exp.duration} years.</li>`;
        });

        resumeHTML += `</ul><h3>Education</h3><ul>`;

        educations.forEach(edu => {
            resumeHTML += `<li>Studied ${edu.course} at ${edu.college} (${edu.degree}), from ${edu.startDate} to ${edu.endDate}, CGPA: ${edu.cgpa}.</li>`;
        });

        resumeHTML += `</ul><h3>Projects</h3><ul>`;

        projects.forEach(project => {
            resumeHTML += `<li><strong>${project.projectName}</strong><br><span>${project.projectDescription}</span></li>`;
        });

        resumeHTML += `</ul>`;

        setResumeContent(resumeHTML);

        // Handle profile image
        const imageInput = document.getElementById('profileImage');
        if (imageInput.files[0]) {
            setProfileImage(URL.createObjectURL(imageInput.files[0]));
        }
    };

    const downloadResume = () => {
        const element = document.getElementById('generatedResume');
        html2pdf().from(element).save('resume.pdf');
    };

    return (
        <div>
            <h1>Smart Resume Generator</h1>
            <form id="resumeForm">
                <label htmlFor="name">Name <span style={{ color: 'red' }}>*</span>:</label>
                <input type="text" id="name" name="name" placeholder="Enter your full name" required />

                <label htmlFor="email">Email <span style={{ color: 'red' }}>*</span>:</label>
                <input type="email" id="email" name="email" placeholder="Enter your email address" required />

                <label htmlFor="phone">Phone Number <span style={{ color: 'red' }}>*</span>:</label>
                <div className="phone-container">
                    <select id="countryCode" name="countryCode" required>
                        <option value="+91" className="india">+91 (India)</option>
                        <option value="+1" className="usa">+1 (USA)</option>
                        <option value="+44" className="uk">+44 (UK)</option>
                        <option value="+61" className="australia">+61 (Australia)</option>
                        <option value="+81" className="japan">+81 (Japan)</option>
                    </select>
                    <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required pattern="[0-9]{10}" title="Please enter a 10-digit phone number." />
                </div>

                <label htmlFor="profileImage">Upload Profile Image <span style={{ color: 'red' }}>*</span>:</label>
                <input type="file" id="profileImage" name="profileImage" accept="image/*" required onChange={(e) => setProfileImage(e.target.files[0])} />

                <label htmlFor="aboutMe">About Yourself:</label>
                <textarea id="aboutMe" name="aboutMe" placeholder="Enter a few lines about yourself" rows="4" required></textarea>

                {/* Skills Section */}
                <label htmlFor="skills">Skills:</label>
                <div className="skills-container">
                    <input type="text" id="skillInput" placeholder="Enter a skill" />
                    <button type="button" id="addSkill" onClick={handleAddSkill}>+</button>
                </div>
                <ul id="skillList" className="skill-list">
                    {skills.map(skill => (
                        <li key={skill}>
                            {skill} <span className="remove-skill" onClick={() => handleRemoveSkill(skill)}>x</span>
                        </li>
                    ))}
                </ul>

                {/* Work Experience Section */}
                <label htmlFor="workExperience">Work Experience:</label>
                <div className="experience-container">
                    <input type="text" placeholder="Company Name" id="companyInput" />
                    <input type="text" placeholder="Position Held" id="positionInput" />
                    <input type="text" placeholder="Duration (in years)" id="durationInput" />
                    <button type="button" id="addExperience" onClick={handleAddExperience}>+</button>
                </div>
                <ul id="experienceList" className="experience-list">
                    {experiences.map(exp => (
                        <li key={exp.company}>
                            Worked as {exp.position} at {exp.company} for {exp.duration} years.
                            <span className="remove-experience" onClick={() => handleRemoveExperience(exp.company)}>x</span>
                        </li>
                    ))}
                </ul>

                {/* Education Section */}
                <label htmlFor="education">Education:</label>
                <div className="education-container">
                    <input type="text" placeholder="College/University" id="collegeInput" />
                    <select id="degreeInput">
                        <option value="">Select Degree</option>
                        <option value="Bachelors">Bachelors</option>
                        <option value="Masters">Masters</option>
                        <option value="PhD">PhD</option>
                    </select>
                    <input type="text" placeholder="Course" id="courseInput" />
                    <input type="text" placeholder="Start Date" id="startDateInput" />
                    <input type="text" placeholder="End Date" id="endDateInput" />
                    <input type="text" placeholder="CGPA" id="cgpaInput" />
                    <button type="button" id="addEducation" onClick={handleAddEducation}>+</button>
                </div>
                <ul id="educationList" className="education-list">
                    {educations.map(edu => (
                        <li key={edu.college}>
                            Studied {edu.course} at {edu.college} ({edu.degree}), from {edu.startDate} to {edu.endDate}, CGPA: {edu.cgpa}.
                        </li>
                    ))}
                </ul>

                {/* Projects Section */}
                <label htmlFor="projects">Projects:</label>
                <div className="projects-container">
                    <input type="text" placeholder="Project Name" id="projectNameInput" />
                    <textarea placeholder="Project Description" id="projectDescriptionInput"></textarea>
                    <button type="button" id="addProject" onClick={handleAddProject}>+</button>
                </div>
                <ul id="projectList" className="project-list">
                    {projects.map(project => (
                        <li key={project.projectName}>
                            <strong>{project.projectName}</strong><br />
                            <span>{project.projectDescription}</span>
                            <span className="remove-project" onClick={() => handleRemoveProject(project.projectName)}>x</span>
                        </li>
                    ))}
                </ul>

                <button type="button" id="generateResume" onClick={generateResume}>Generate Resume</button>
            </form>

            <div id="generatedResume" style={{ display: resumeContent ? 'block' : 'none' }}>
                <h2>Resume</h2>
                {profileImage && <img src={profileImage} alt="Profile" style={{ width: '100px', height: '100px' }} />}
                <div dangerouslySetInnerHTML={{ __html: resumeContent }} />
                <button onClick={downloadResume}>Download PDF</button>
            </div>
        </div>
    );
};

export default SmartResumeGenerator;
