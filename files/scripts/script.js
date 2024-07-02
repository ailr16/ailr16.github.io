//Scripts for carousels

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
}