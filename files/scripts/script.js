//Scripts for carousels
/*
const listOfCardElements = document.querySelectorAll('.AboutMe_container_carouselContainer_cardContainer_card');
const cardContainer      = document.querySelector('.AboutMe_container_carouselContainer_cardContainer');

function Carousel_move_slide(direction) {
  const container = document.querySelector('.AboutMe_container_carouselContainer_cardContainer');
  const scrollAmount = 400; // Adjust this value based on your card width

  if (direction === -1) {
    container.scrollLeft -= scrollAmount;
  } else {
    container.scrollLeft += scrollAmount;
  }
}

const listOfProjectsCardElements = document.querySelectorAll('.Projects_container_carouselContainer_cardContainer_card');
const projectsCardContainer      = document.querySelector('.Projects_container_carouselContainer_cardContainer');

function ProjectsCarousel_move_slide(direction) {
  const container = document.querySelector('.Projects_container_carouselContainer_cardContainer');
  const scrollAmount = 400; // Adjust this value based on your card width

  if (direction === -1) {
    container.scrollLeft -= scrollAmount;
  } else {
    container.scrollLeft += scrollAmount;
  }
}*/

var AboutMeContent   = document.getElementById( "AboutMe_content" );
var ProjectsContent  = document.getElementById( "Projects_content" );
var EducationContent = document.getElementById( "Education_content" );

function toggleAboutMe() { 
  if(AboutMeContent.style.display === "none" || AboutMeContent.style.display === ""){
    AboutMeContent.style.display   = "block";
    ProjectsContent.style.display  = "none";
    EducationContent.style.display = "none";
  }
  else{
    AboutMeContent.style.display = "none";
  }
}

function toggleProjects() {
  if(ProjectsContent.style.display === "none" || ProjectsContent.style.display === ""){
    AboutMeContent.style.display   = "none";
    ProjectsContent.style.display  = "block";
    EducationContent.style.display = "none";
  }
  else{
    ProjectsContent.style.display = "none";
  }
}

function toggleEducation() {
  
  if(EducationContent.style.display === "none" || EducationContent.style.display === ""){
    AboutMeContent.style.display   = "none";
    ProjectsContent.style.display  = "none";
    EducationContent.style.display = "block";
  }
  else{
    EducationContent.style.display = "none";
  }
}