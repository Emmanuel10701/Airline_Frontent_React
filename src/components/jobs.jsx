const jobs = [
    {
        id: 1,
        jobTitle: "Frontend Developer",
        contractType: "Permanent",
        location: "🌍 Worldwide",
        description: "Develop and maintain user-facing features.",
        requirements: "Proficient in React, CSS, and JavaScript.",
        experience: "2+ years",
        salary: "$60,000 - $80,000",
        logo: "logo1.png",
        companyName: "Tech Solutions",
        email: "hr@techsolutions.com",
        phone: "123-456-7890",
        workType: "Remote",
    },
    {
        id: 2,
        jobTitle: "Backend Developer",
        contractType: "Contract",
        location: "🇺🇸 North America",
        description: "Build server-side applications and APIs.",
        requirements: "Experience with Node.js and Express.",
        experience: "3+ years",
        salary: "$70,000 - $90,000",
        logo: "logo2.png",
        companyName: "Code Factory",
        email: "jobs@codefactory.com",
        phone: "987-654-3210",
        workType: "On-site",
    },
    {
        id: 3,
        jobTitle: "Data Scientist",
        contractType: "Temporary",
        location: "🇪🇺 Europe",
        description: "Analyze data and build predictive models.",
        requirements: "Knowledge of Python and Machine Learning.",
        experience: "2+ years",
        salary: "$80,000 - $100,000",
        logo: "logo3.png",
        companyName: "Data Insights",
        email: "contact@datainsights.com",
        phone: "555-555-5555",
        workType: "Remote",
    },
    {
        id: 4,
        jobTitle: "UX/UI Designer",
        contractType: "Hourly",
        location: "🇦🇺 Australia",
        description: "Design user-friendly interfaces and experiences.",
        requirements: "Familiarity with design tools like Figma.",
        experience: "1+ years",
        salary: "$50/hour",
        logo: "logo4.png",
        companyName: "Creative Agency",
        email: "info@creativeagency.com",
        phone: "444-444-4444",
        workType: "Remote",
    },
    {
        id: 5,
        jobTitle: "Project Manager",
        contractType: "Fixed",
        location: "🇿🇦 Africa",
        description: "Manage project timelines and team collaboration.",
        requirements: "Experience with Agile methodologies.",
        experience: "5+ years",
        salary: "$90,000 - $120,000",
        logo: "logo5.png",
        companyName: "Project Masters",
        email: "hr@projectmasters.com",
        phone: "666-666-6666",
        workType: "On-site",
    },
    {
        id: 6,
        jobTitle: "Digital Marketer",
        contractType: "Part-time",
        location: "🇧🇷 South America",
        description: "Develop and implement marketing strategies.",
        requirements: "Experience with social media and SEO.",
        experience: "3+ years",
        salary: "$40,000 - $60,000",
        logo: "logo6.png",
        companyName: "Marketing Hub",
        email: "careers@marketinghub.com",
        phone: "222-222-2222",
        workType: "Remote",
    },
    {
        id: 7,
        jobTitle: "Software Engineer",
        contractType: "Internship",
        location: "🇨🇳 Asia",
        description: "Assist in developing software applications.",
        requirements: "Basic knowledge of programming languages.",
        experience: "Internship or entry-level experience.",
        salary: "$30,000 - $40,000",
        logo: "logo7.png",
        companyName: "Innovative Tech",
        email: "hr@innovatetech.com",
        phone: "333-333-3333",
        workType: "On-site",
    },
    {
        id: 8,
        jobTitle: "Cloud Engineer",
        contractType: "Permanent",
        location: "🇺🇸 North America",
        description: "Design and manage cloud infrastructure.",
        requirements: "Experience with AWS, Azure, or Google Cloud.",
        experience: "3+ years",
        salary: "$100,000 - $120,000",
        logo: "logo8.png",
        companyName: "Cloud Solutions",
        email: "hr@cloudsolutions.com",
        phone: "123-123-1234",
        workType: "Remote",
    },
    {
        id: 9,
        jobTitle: "Mobile App Developer",
        contractType: "Contract",
        location: "🇪🇺 Europe",
        description: "Develop mobile applications for iOS and Android.",
        requirements: "Proficient in Swift and Kotlin.",
        experience: "2+ years",
        salary: "$75,000 - $95,000",
        logo: "logo9.png",
        companyName: "App Innovators",
        email: "jobs@appinnovators.com",
        phone: "234-234-2345",
        workType: "Remote",
    },
    {
        id: 10,
        jobTitle: "Cybersecurity Analyst",
        contractType: "Temporary",
        location: "🇦🇺 Australia",
        description: "Monitor and protect network security.",
        requirements: "Knowledge of security protocols and tools.",
        experience: "3+ years",
        salary: "$90,000 - $110,000",
        logo: "logo10.png",
        companyName: "SecureTech",
        email: "contact@securetech.com",
        phone: "345-345-3456",
        workType: "On-site",
    },
    {
        id: 11,
        jobTitle: "Business Analyst",
        contractType: "Fixed",
        location: "🇿🇦 Africa",
        description: "Analyze business processes and provide solutions.",
        requirements: "Strong analytical and problem-solving skills.",
        experience: "4+ years",
        salary: "$70,000 - $85,000",
        logo: "logo11.png",
        companyName: "Business Solutions",
        email: "hr@businesssolutions.com",
        phone: "456-456-4567",
        workType: "Remote",
    },
    {
        id: 12,
        jobTitle: "Graphic Designer",
        contractType: "Part-time",
        location: "🇧🇷 South America",
        description: "Create visual content for various platforms.",
        requirements: "Experience with Adobe Creative Suite.",
        experience: "2+ years",
        salary: "$40,000 - $55,000",
        logo: "logo12.png",
        companyName: "Design Studio",
        email: "careers@designstudio.com",
        phone: "567-567-5678",
        workType: "Remote",
    },
    {
        id: 13,
        jobTitle: "Full Stack Developer",
        contractType: "Internship",
        location: "🇨🇳 Asia",
        description: "Work on both front-end and back-end development.",
        requirements: "Knowledge of JavaScript, Python, or Ruby.",
        experience: "Internship or entry-level experience.",
        salary: "$35,000 - $45,000",
        logo: "logo13.png",
        companyName: "Tech Hub",
        email: "hr@techhub.com",
        phone: "678-678-6789",
        workType: "On-site",
    },
    {
        id: 14,
        jobTitle: "Content Writer",
        contractType: "Freelance",
        location: "🌍 Worldwide",
        description: "Create engaging content for blogs and websites.",
        requirements: "Excellent writing and research skills.",
        experience: "2+ years",
        salary: "$30,000 - $50,000",
        logo: "logo14.png",
        companyName: "Content Creators",
        email: "info@contentcreators.com",
        phone: "789-789-7890",
        workType: "Remote",
    },
    {
        id: 15,
        jobTitle: "SEO Specialist",
        contractType: "Contract",
        location: "🇺🇸 North America",
        description: "Optimize website content for search engines.",
        requirements: "Experience with SEO tools and strategies.",
        experience: "3+ years",
        salary: "$60,000 - $80,000",
        logo: "logo15.png",
        companyName: "SEO Experts",
        email: "jobs@seoexperts.com",
        phone: "890-890-8901",
        workType: "Remote",
    },
    {
        id: 16,
        jobTitle: "Database Administrator",
        contractType: "Permanent",
        location: "🇪🇺 Europe",
        description: "Manage and maintain database systems.",
        requirements: "Experience with SQL and database management.",
        experience: "4+ years",
        salary: "$80,000 - $100,000",
        logo: "logo16.png",
        companyName: "Data Management Co.",
        email: "hr@datamanagement.com",
        phone: "901-901-9012",
        workType: "On-site",
    },
    {
        id: 17,
        jobTitle: "Network Engineer",
        contractType: "Fixed",
        location: "🇦🇺 Australia",
        description: "Design and implement network solutions.",
        requirements: "Knowledge of networking protocols.",
        experience: "3+ years",
        salary: "$70,000 - $90,000",
        logo: "logo17.png",
        companyName: "Network Solutions",
        email: "contact@networksolutions.com",
        phone: "012-012-0123",
        workType: "Remote",
    },
    // Add more job objects to reach at least 30 jobs...
];

export default jobs;
