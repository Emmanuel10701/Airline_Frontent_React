import React, { useState } from 'react';
import placeholder from "../assets/default.png"

const nationalities = [
    "American", "British", "Canadian", "Australian", "Indian", "German", "French", "Italian",
    "Japanese", "Chinese", "Brazilian", "Mexican", "South African", "Russian", "Other",
    "Argentinian", "Belgian", "Brazilian", "Colombian", "Dutch", "Egyptian", "Greek", 
    "Hong Konger", "Iraqi", "Irish", "Israeli", "Malaysian", "New Zealander", "Nigerian", 
    "Norwegian", "Pakistani", "Peruvian", "Philippine", "Portuguese", "Saudi", "Singaporean",
    "South Korean", "Spanish", "Swedish", "Swiss", "Thai", "Turkish", "Ukrainian", "Vietnamese",
    "Austrian", "Chilean", "Danish", "Finland", "Hungarian", "Indonesian", "Kenyan", 
    "Kuwaiti", "Latvian", "Lithuanian", "Luxembourger", "Maltese", "Moroccan", "Qatari", 
    "Romanian", "Serbian", "Slovak", "Slovenian", "Sri Lankan", "Tanzanian", "Tunisian", 
    "Vietnamese", "Welsh", "Yemeni", "Zambian", "Zimbabwean"
];


const skills = [
    "JavaScript", "Python", "Java", "C++", "Ruby", "Go", "HTML", "CSS", "React", "Node.js",
    "MongoDB", "MySQL", "Django", "Ruby on Rails", "Flask", "Spring", "MariaDB", "PostgreSQL",
    "DynamoDB", "Next.js 14", "TypeScript", "SaaS", "UI/UX", "Tailwind CSS", "Bootstrap"
];

const JobApplicantForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        nationality: '',
        address: '',
        education: '',
        skills: [],
        resume: null,
        profileImage: null,
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'file' ? files[0] : value,
        });
    };

    const toggleSkill = (skill) => {
        setFormData((prev) => {
            const skills = prev.skills.includes(skill)
                ? prev.skills.filter(s => s !== skill)
                : [...prev.skills, skill];
            return { ...prev, skills };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <div className="flex items-center mt-[36%] mb-64 bg-white justify-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('bg-image.jpg')" }}>
            <div className=" md:w-[90%] w-full bg-white p-8 rounded-lg shadow-2xl">
            <h1 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center mb-4">
                    Job Applicant Profile
                </h1>
                <div className="flex justify-center mb-4">
                    <input
                        type="file"
                        name="profileImage"
                        accept="image/*"
                        onChange={handleChange}
                        className="hidden"
                        id="profileImageInput"
                    />
                    <label htmlFor="profileImageInput">
                        <div className="relative">
                            <img
                                src={formData.profileImage ? URL.createObjectURL(formData.profileImage) : placeholder}
                                alt="Profile"
                                className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
                            />
                            <span className="absolute bottom-0 right-0 bg-blue-600 text-white text-sm rounded-full p-1 cursor-pointer">Edit</span>
                        </div>
                    </label>
                </div>
                <form onSubmit={handleSubmit} className="w-[77%] mx-auto">
                    <div className="flex flex-col mb-4">
                        <label className="text-white">Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Enter Full Name"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="p-2 rounded border w-2/3 border-gray-400 focus:outline-none focus:border-blue-500 shadow focus:shadow-lg transition"
                            required
                        />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="text-white">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="p-2 rounded border w-2/3 border-gray-400 focus:outline-none focus:border-blue-500 shadow focus:shadow-lg transition"
                            required
                        />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="text-white">Phone Number</label>
                        <input
                            type="text"
                            name="phoneNumber"
                            placeholder="Enter Phone Number"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className="p-2 rounded border w-2/3 border-gray-400 focus:outline-none focus:border-blue-500 shadow focus:shadow-lg transition"
                            required
                        />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="text-white">Nationality</label>
                        <select
                            name="nationality"
                            value={formData.nationality}
                            onChange={handleChange}
                            className="p-2 rounded border w-2/3 border-gray-400 focus:outline-none focus:border-blue-500 shadow focus:shadow-lg transition"
                            required
                        >
                            <option value="" disabled>Select Nationality</option>
                            {nationalities.map((nation) => (
                                <option key={nation} value={nation}>{nation}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="text-white">Address</label>
                        <input
                            type="text"
                            name="address"
                            placeholder="Enter Address"
                            value={formData.address}
                            onChange={handleChange}
                            className="p-2 rounded border w-2/3 border-gray-400 focus:outline-none focus:border-blue-500 shadow focus:shadow-lg transition"
                            required
                        />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="text-white">Education</label>
                        <input
                            type="text"
                            name="education"
                            placeholder="Enter Your Education"
                            value={formData.education}
                            onChange={handleChange}
                            className="p-2 rounded border w-2/3 border-gray-400 focus:outline-none focus:border-blue-500 shadow focus:shadow-lg transition"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <span className="text-white block mb-2">Skills</span>
                        <div className="flex flex-wrap">
                            {skills.map((skill) => (
                                <button
                                    key={skill}
                                    type="button"
                                    onClick={() => toggleSkill(skill)}
                                    className={`m-1 px-3 py-1 rounded ${formData.skills.includes(skill) ? 'bg-green-500' : 'bg-gray-700'} text-white`}
                                >
                                    {skill}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col mb-4">
    <label className="text-white">Upload Resume (PDF)</label>
    <input
        type="file"
        name="resume"
        accept="application/pdf" // Keep as is to accept PDF files only
        onChange={handleChange}
        className="p-2 border w-1/3 border-gray-400 rounded"
    />
</div>
<button
    type="submit"
    className="w-40 mx-auto bg-transparent border border-green-600 text-green-600 font-semibold py-2 rounded-full hover:bg-green-600 hover:text-white shadow transition"
>
    Create Profile
</button>

                </form>
            </div>
        </div>
    );
};

export default JobApplicantForm;
