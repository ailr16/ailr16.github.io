var AboutMeContent   = document.getElementById( "AboutMe_content" );
var ProjectsContent  = document.getElementById( "Projects_content" );
var EducationContent = document.getElementById( "Education_content" );
var ProfileContainer = document.getElementById( "Profile_container" );

function toggleAboutMe() { 
  let elementToView = document.getElementById( "AboutMe_header" );

  if(AboutMeContent.style.display === "none" || AboutMeContent.style.display === ""){
    AboutMeContent.style.display   = "block";
    ProjectsContent.style.display  = "none";
    EducationContent.style.display = "none";
    elementToView.scrollIntoView({behavior: "smooth"});
  }
  else{
    AboutMeContent.style.display = "none";
    ProfileContainer.scrollIntoView({behavior: "smooth"});
  }
}

function toggleProjects() {
  let elementToView = document.getElementById( "Projects_header" );

  if(ProjectsContent.style.display === "none" || ProjectsContent.style.display === ""){
    AboutMeContent.style.display   = "none";
    ProjectsContent.style.display  = "block";
    EducationContent.style.display = "none";
    elementToView.scrollIntoView({behavior: "smooth"});
  }
  else{
    ProjectsContent.style.display = "none";
    ProfileContainer.scrollIntoView({behavior: "smooth"});
  }
}

function toggleEducation() {
  let elementToView = document.getElementById( "Education_header" );

  if(EducationContent.style.display === "none" || EducationContent.style.display === ""){
    AboutMeContent.style.display   = "none";
    ProjectsContent.style.display  = "none";
    EducationContent.style.display = "block";
    elementToView.scrollIntoView({behavior: "smooth"});
  }
  else{
    EducationContent.style.display = "none";
    ProfileContainer.scrollIntoView({behavior: "smooth"});
  }
}