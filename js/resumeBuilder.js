var bio = {
    "name": "Oleg Esenkov",
    "role": "Web Developer",
    "contacts": {
        "mobile": "+7 950 289-70-34",
        "email": "oleges@list.ru",
        "github": "oleges",
        "twitter": "none",
        "location": "Vladivostok, Primorsky Krai, Russia"
    },
    "welcomeMessage": "And Now for Something Completely Different...",
    "skills": ["Python", "HTML", "CSS", "JavaScript", "PHP", "MySQL", "Git"],
    "biopic": "images/photo.jpg"
}

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    // var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedGithub);
    // $("#topContacts").append(formattedTwitter);
    $("#topContacts").append(formattedLocation);
    var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedBiopic);
    $("#header").append(formattedWelcomeMessage);
    if (bio.skills.length != 0) {
        $("#header").append(HTMLskillsStart);
        for (var skill in bio.skills) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills").append(formattedSkill);
        }
    }
    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedGithub);
    // $("#footerContacts").append(formattedTwitter);
    $("#footerContacts").append(formattedLocation);
}

var work = {
    "jobs": [
    {
        "employer": "PrimEcoEnergo",
        "title": "Energy Auditor",
        "location": "Nekrasovskaya St, 88А, Vladivostok",
        "dates": "2011-2013",
        "description": "Plan and schedule projects and audit methodology and procedures. Inspect and analyze homes and building structures, heating systems, ventilation, air conditioning, water, and industrial processes to ensure energy use is optimal. Make recommendations for, coordinate, and participate in construction of retrofit measures and energy efficiency upgrades."
    },
    {
        "employer": "Modern Engineering Systems",
        "title": "Design Engineer",
        "location": "Strelnikova St, 7, Vladivostok",
        "dates": "2013-2014",
        "description": "Create blueprints and schematics for district heating substations using computer-aided design (CAD) and computer-assisted engineering (CAE) software. Create specification documents for each product."
    }]
}

work.display = function() {
    for (var job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle);
        $(".work-entry:last").append(formattedWorkDates);
        $(".work-entry:last").append(formattedWorkLocation);
        $(".work-entry:last").append(formattedWorkDescription);
    }
}

var projects = {
    "projects": [
    {
        "title": "getalb",
        "dates": "2015",
        "description": "Script for downloading entire albums at once from http://musicmp3spb.org. Wrriten in Python.",
        "images": [
        "images/getalb.png"]
    }]
}

projects.display = function() {
    for (var project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedProjectTitle);
        $(".project-entry:last").append(formattedProjectDates);
        $(".project-entry:last").append(formattedProjectDescription);
        if (projects.projects[project].images.length != 0) {
            for (var image in projects.projects[project].images) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedProjectImage);
            }
        }
    }
}

var education = {
    "schools": [
    {
        "name": "Far Eastern Federal University",
        "location": "Pushkinskaya St, 10, Vladivostok",
        "degree": "Engineer",
        "majors": "Industrial Heat Power Engineering",
        "dates": 2011,
        "url": "www.dvfu.ru"
    }],
    "onlineCourses": [
    {
        "title": "Computer Networks",
        "school": "Coursera",
        "date": 2014,
        "url": "https://www.coursera.org/course/comnetworks"
    },
    {
        "title": "Introduction to Linux",
        "school": "EdX",
        "date": 2015,
        "url": "https://www.edx.org/course/v2/introduction-linux-linuxfoundationx-lfs101x-2"
    }]
}

education.display = function () {
    for (var school in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
        $(".education-entry:last").append(formattedSchoolDates);
        $(".education-entry:last").append(formattedSchoolLocation);
        $(".education-entry:last").append(formattedSchoolMajor);
    }
    $("#education").append(HTMLonlineClasses);
    for (var course in education.onlineCourses) {
        $("#education").append(HTMLschoolStart);
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
        $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
        $(".education-entry:last").append(formattedOnlineDates);
        $(".education-entry:last").append(formattedOnlineURL);
    }
}

bio.display();
work.display();
projects.display();
education.display();

// $("#main").append(internationalizeButton);

function inName() {
    var name = bio.name;
    var nameArray = name.split(" ");
    nameArray[0] = nameArray[0][0].toUpperCase() + nameArray[0].slice(1).toLowerCase();
    nameArray[1] = nameArray[1].toUpperCase();
    finalName = nameArray.join(' ');
    return finalName;
}

$("#mapDiv").append(googleMap);
initializeMap();
