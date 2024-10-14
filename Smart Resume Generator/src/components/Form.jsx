import React, { useState } from 'react';

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [countryCode, setCountryCode] = useState('+91');
    const [phone, setPhone] = useState('');
    const [profileImage, setProfileImage] = useState(null);
    const [aboutMe, setAboutMe] = useState('');
    const [skills, setSkills] = useState([]);
    const [skillInput, setSkillInput] = useState('');
    const [experiences, setExperiences] = useState([]);
    const [companyInput, setCompanyInput] = useState('');
    const [positionInput, setPositionInput] = useState('');
    const [durationInput, setDurationInput] = useState('');

    const handleAddSkill = () => {
        if (skillInput.trim()) {
            setSkills([...skills, skillInput]);
            setSkillInput('');
        }
    };

    const handleRemoveSkill = (skillToRemove) => {
        setSkills(skills.filter(skill => skill !== skillToRemove));
    };

    const handleAddExperience = () => {
        if (companyInput.trim() && positionInput.trim() && durationInput.trim()) {
            const experience = { company: companyInput, position: positionInput, duration: durationInput };
            setExperiences([...experiences, experience]);
            setCompanyInput('');
            setPositionInput('');
            setDurationInput('');
        }
    };

    const handleRemoveExperience = (companyToRemove) => {
        setExperiences(experiences.filter(exp => exp.company !== companyToRemove));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div className="p-6 bg-gray-100">
            <h1 className="text-center text-2xl font-bold mb-6">Smart Resume Generator</h1>
            <form id="resumeForm" onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
                <label htmlFor="name" className="block font-bold mb-2">Name <span className="text-red-500">*</span>:</label>
                <input type="text" id="name" name="name" placeholder="Enter your full name" value={name} onChange={(e) => setName(e.target.value)} required className="w-full p-2 border border-gray-300 rounded mb-4" />

                <label htmlFor="email" className="block font-bold mb-2">Email <span className="text-red-500">*</span>:</label>
                <input type="email" id="email" name="email" placeholder="Enter your email address" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full p-2 border border-gray-300 rounded mb-4" />

                <label htmlFor="phone" className="block font-bold mb-2">Phone Number <span className="text-red-500">*</span>:</label>
                <div className="flex mb-4">
                    <select id="countryCode" name="countryCode" value={countryCode} onChange={(e) => setCountryCode(e.target.value)} required className="w-1/4 p-2 border border-gray-300 rounded-l">
                        <option value="+91">+91 (India)</option>
                        <option value="+1">+1 (USA)</option>
                        <option value="+44">+44 (UK)</option>
                        <option value="+61">+61 (Australia)</option>
                        <option value="+81">+81 (Japan)</option>
                    </select>
                    <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" value={phone} onChange={(e) => setPhone(e.target.value)} required pattern="[0-9]{10}" title="Please enter a 10-digit phone number." className="w-3/4 p-2 border border-gray-300 rounded-r" />
                </div>

                <label htmlFor="profileImage" className="block font-bold mb-2">Upload Profile Image <span className="text-red-500">*</span>:</label>
                <input type="file" id="profileImage" name="profileImage" accept="image/*" onChange={(e) => setProfileImage(e.target.files[0])} required className="mb-4" />

                <label htmlFor="aboutMe" className="block font-bold mb-2">About Yourself:</label>
                <textarea id="aboutMe" name="aboutMe" placeholder="Enter a few lines about yourself" rows="4" value={aboutMe} onChange={(e) => setAboutMe(e.target.value)} required className="w-full p-2 border border-gray-300 rounded mb-4"></textarea>

                <label htmlFor="skills" className="block font-bold mb-2">Skills:</label>
                <div className="flex mb-4">
                    <input type="text" id="skillInput" placeholder="Enter a skill" value={skillInput} onChange={(e) => setSkillInput(e.target.value)} className="flex-grow p-2 border border-gray-300 rounded-l" />
                    <button type="button" onClick={handleAddSkill} className="bg-blue-500 text-white p-2 rounded-r hover:bg-blue-600">+</button>
                </div>
                <ul id="skillList" className="list-none p-0">
                    {skills.map((skill, index) => (
                        <li key={index} className="bg-gray-200 p-2 rounded mb-2 flex justify-between">
                            {skill} <span className="text-red-500 cursor-pointer" onClick={() => handleRemoveSkill(skill)}>x</span>
                        </li>
                    ))}
                </ul>

                <label htmlFor="workExperience" className="block font-bold mb-2">Work Experience:</label>
                <div className="flex mb-4">
                    <input type="text" placeholder="Company Name" value={companyInput} onChange={(e) => setCompanyInput(e.target.value)} className="flex-grow p-2 border border-gray-300 rounded-l" />
                    <input type="text" placeholder="Position Held" value={positionInput} onChange={(e) => setPositionInput(e.target.value)} className="flex-grow p-2 border border-gray-300" />
                    <input type="text" placeholder="Duration" value={durationInput} onChange={(e) => setDurationInput(e.target.value)} className="flex-grow p-2 border border-gray-300 rounded-r" />
                    <button type="button" onClick={handleAddExperience} className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">+</button>
                </div>
                <ul id="experienceList" className="list-none p-0">
                    {experiences.map((exp, index) => (
                        <li key={index} className="bg-gray-200 p-2 rounded mb-2 flex justify-between">
                            Worked at {exp.company}, as a {exp.position}, for {exp.duration} years. <span className="text-red-500 cursor-pointer" onClick={() => handleRemoveExperience(exp.company)}>x</span>
                        </li>
                    ))}
                </ul>

                <button type="submit" className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 mt-4">Generate Resume</button>
            </form>
        </div>
    );
};

export default Form;
