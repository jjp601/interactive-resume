// Model
var userData = [
    {
        name:'Jon Powell',
        sections: ['About', 'Education', 'Skills', 'Projects', 'Experience'],
    }
];

var aboutData = [
    {
        imgSrc:'img/Profile.jpg',
        location: 'Stamford, CT',
        phone: '402-270-2924',
        email: 'jpowell6@live.com',
        objective: 'Highly motivated developer seeking to build innovative ideas that change the world.'
    }
];

var educationData = [
    {
        school:'University of Nebraska',
        degree: 'Bachelor of Science in Business Administration',
        major: 'Finance',
        startDate: 'January 2012',
        endDate: 'December 2014',
        imgSrc:'img/unl.png'
    },
    {
        school:'Udacity',
        degree: 'Full-Stack Nanodegree',
        major: '',
        startDate: 'July 2017',
        endDate: 'December 2017', 
        imgSrc:'img/udacity_logo.jpg'
    }
];

var skillsData = [
    {
        languages:[{skill: 'Python'}, {skill: 'Javascript'}, {skill: 'Ruby'}, {skill: 'HTML5'}, {skill: 'CSS3'}, {skill: 'SQL'}],
        libraries: [{skill: 'Flask'}, {skill: 'Django'}, {skill: 'jQuery'}, {skill: 'Node.js/Express'}, {skill: 'Knockout.js'}, {skill: 'Backbone.js'}, {skill: 'Angular'}, {skill: 'Bootstrap'}],
        databases: [{skill: 'mySQL'}, {skill: 'PostgreSQL'}, {skill: 'SQLite'}]
    }
];

var projectsData = [
    {
        name:'Linux Server Configuration',
        imgSrc:'img/linux_server_config.png',
        url: 'https://github.com/jjp601/Linux-Server-Configuration',
        date: 'December 2017',
        skills: [{skill: 'Python'}, {skill: 'Flask'}, {skill: 'PostgreSQL'}, {skill: 'Amazon Web Services'}],
        details: ["Installed and configured all required software to turn a baseline Ubuntu Amazon Web Services server into a fully functional web application server, including Apache Web Server and PostgreSQL database server", 
                  "Implemented changes to Car Catalog project in order to serve the application in Amazon Lightsail instance"]
    },
    {
        name:'Neighborhood Map',
        imgSrc:'img/neighborhood_map.png',
        url: 'https://github.com/jjp601/neighborhood-map-project',
        date: 'November 2017',
        skills: [{skill: 'Javascript'}, {skill: 'KnockoutJS'}, {skill: 'HTML'}, {skill: 'CSS'}],
        details: ["Developed a single-page web application with the Knockout.js framework to display points of interest using Google Maps API", 
                  "Built a search filter that includes all locations and when selected, presents additional information utilizing the Foursquare API"]
    },
    {
        name:'Car Catalog',
        imgSrc:'img/item_catalog.png',
        url: 'https://github.com/jjp601/Car_Catalog_Project',
        date: 'October 2017',
        skills: [{skill: 'Python'}, {skill: 'Flask'}, {skill: 'SQLite'}, {skill: 'HTML'}, {skill: 'CSS'}],
        details: ["Developed a content management application in Python using the Flask framework", 
                  "Implemented authentication with OAuth using Facebook login and stored all data in an SQLite database utilizing SQLAlchemy"]
    },
    {
        name:'Logs Analysis',
        imgSrc:'img/log_analysis.png',
        url: 'https://github.com/jjp601/Logs_analysis_project',
        date: 'August 2017',
        skills: [{skill: 'Python'}, {skill: 'SQL'}, {skill: 'PostgreSQL'}],
        details: ["Applied SQL skills to a reporting tool that summarizes data from a PostgreSQL database", 
                  "Wrote Python and SQL code to retrieve data from a database to answer questions and output the information into a text file"]
    },
    {
        name:'Movie Trailer',
        imgSrc:'img/movie_trailer_website.PNG',
        url: 'https://github.com/jjp601/projects/tree/master/movie_trailer_proj',
        date: 'July 2017',
        skills: [{skill: 'Python'}, {skill: 'HTML'}, {skill: 'CSS'}],
        details: ["Wrote server-side code in Python to store a list of my favorite movies, including box art imagery and a movie trailer URL", 
                  "Served data to a web page using HTML and CSS allowing visitors to review these movies and watch the trailers"]
    }
];

var experiencesData = [
    {
        employer:'RockIT Solutions',
        jobTitle: 'Client Associate',
        location: 'Stamford, CT',
        startDate: 'April 2016',
        endDate: 'October 2017',
        details: ["Prioritized and completed daily deliverables for 7 client relationships while managing client expectations via professional and personable communication",
                  "Developed a thorough understanding of each client's account structure and investment strategies to better service their needs and anticipate new reporting needs, including adding 5 new customized reports",
                  "Proposed and tested 6 different system enhancements to maximize output and minimize errors on Rockit Command product suite"],  
        imgSrc:'img/rockit.png'
    },
    {
        employer:'Factset Research Systems',
        jobTitle: 'Research Specialist - Product Development',
        location: 'Norwalk, CT',
        startDate: 'February 2015',
        endDate: 'March 2016',
        details: ["Analyzed financial data, including but not limited to income statement, balance sheet and cash-flow statement data of public companies within FactSet’s universe to identify and resolve data quality issues, exceeding the 90% efficiency benchmark set by the team",
                  "Performed data analysis and present informational results using SQL to Content Integration Engineering team",
                  "Collaborated with database development teams to develop a financial application called Key Performance Indicators, by incorporating client needs and designing test plan and test cases",
                  "Validated technical designs created by Content Integration Engineering team against functional specifications and prioritize outstanding defects and system problems to ensure accuracy"],  
        imgSrc:'img/factset.jpg'
    },
    {
        employer:'Bridgepoint Merchant Banking',
        jobTitle: 'Investment Banking Analyst',
        location: 'Lincoln, NE',
        startDate: 'September 2013',
        endDate: 'January 2014',
        details: ["Conducted detailed income statement forecasting, multiple scenario analysis and capital structure modeling using Excel",
                  "Assisted in the execution of 3 M&A transactions, 2 Corporate Finance assignments, and other investment banking opportunities",
                  "Responsible for due diligence of prospective and the 11 existing portfolio companies in the firm’s proprietary venture capital fund"],  
        imgSrc:'img/bridgepoint.jpg'
    }
];

var User = function(data){
    this.name = ko.observable(data.name);
    this.sections = ko.observableArray(data.sections);
};

var About = function(data){
    this.imgSrc = ko.observable(data.imgSrc);
    this.location = ko.observable(data.location);
    this.phone = ko.observable(data.phone);
    this.email = ko.observable(data.email);
    this.objective = ko.observable(data.objective);
};

var Education = function(data) {
    this.school = ko.observable(data.school);
    this.degree = ko.observable(data.degree);
    this.major = ko.observable(data.major);
    this.startDate = ko.observable(data.startDate);
    this.endDate = ko.observable(data.endDate);
    this.imgSrc = ko.observable(data.imgSrc);
};

var Skills = function(data){
    this.languages = ko.observableArray(data.languages);
    this.libraries = ko.observableArray(data.libraries);
    this.databases = ko.observableArray(data.databases);
};

var Project = function(data){
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.url = ko.observable(data.url);
    this.date = ko.observable(data.date);
    this.skills = ko.observableArray(data.skills);
    this.details = ko.observableArray(data.details);
};

var Experience = function(data){
    this.employer = ko.observable(data.employer);
    this.jobTitle = ko.observable(data.jobTitle);
    this.location = ko.observable(data.location);
    this.startDate = ko.observable(data.startDate);
    this.endDate = ko.observable(data.endDate);
    this.details = ko.observableArray(data.details);
    this.imgSrc = ko.observable(data.imgSrc);
};

// ViewModel
var ResumeViewModel = function() {
    var self = this;

    this.navSections = ko.observableArray(['about', 'education', 'skills', 'projects', 'experience']);
    this.selectedSection = ko.observable();

    this.goToSection = function(navSection) { 
        self.selectedSection(navSection);
        if (self.selectedSection() === 'about') {
            $('html,body').animate({ scrollTop:$('.about').offset().top}, 500);
        } else if (self.selectedSection() === 'education') {
            $('html,body').animate({ scrollTop:$('.education').offset().top}, 500);
        } else if (self.selectedSection() === 'skills') {
            $('html,body').animate({ scrollTop:$('.skills').offset().top}, 500);
        } else if (self.selectedSection() === 'projects') {
            $('html,body').animate({ scrollTop:$('.projects').offset().top}, 500);
        } else if (self.selectedSection() === 'experience') {
            $('html,body').animate({ scrollTop:$('.experience').offset().top}, 500);
        }
    };

    this.userInfo = ko.observableArray([]);
    userData.forEach(function(userItem) {
        self.userInfo.push( new User(userItem));
    })

    this.aboutInfo = ko.observableArray([]);
    aboutData.forEach(function(aboutItem) {
        self.aboutInfo.push( new About(aboutItem));
    })

    this.educationInfo = ko.observableArray([]);
    educationData.forEach(function(educationItem) {
        self.educationInfo.push( new Education(educationItem));
    })

    this.skillsInfo = ko.observableArray([]);
    skillsData.forEach(function(skillsItem) {
        self.skillsInfo.push( new Skills(skillsItem));
    })

    this.projectsInfo = ko.observableArray([]);
    projectsData.forEach(function(projectsItem) {
        self.projectsInfo.push( new Project(projectsItem));
    })

    this.experiencesInfo = ko.observableArray([]);
    experiencesData.forEach(function(experiencesItem) {
        self.experiencesInfo.push( new Experience(experiencesItem));
    })
}

ko.applyBindings(new ResumeViewModel())