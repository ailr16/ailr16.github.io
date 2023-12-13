//Scripts for carousels

const listOfCardElements = document.querySelectorAll('.Carousel_card');
const cardContainer      = document.querySelector('.Carousel_card_container');

function Carousel_move_slide(direction) {
  const container = document.querySelector('.Carousel_card_container');
  const scrollAmount = 400; // Adjust this value based on your card width

  if (direction === -1) {
    container.scrollLeft -= scrollAmount;
  } else {
    container.scrollLeft += scrollAmount;
  }
}

const listOfProjectsCardElements = document.querySelectorAll('.ProjectsCarousel_card');
const projectsCardContainer      = document.querySelector('.ProjectsCarousel_card_container');

function ProjectsCarousel_move_slide(direction) {
  const container = document.querySelector('.ProjectsCarousel_card_container');
  const scrollAmount = 400; // Adjust this value based on your card width

  if (direction === -1) {
    container.scrollLeft -= scrollAmount;
  } else {
    container.scrollLeft += scrollAmount;
  }
}