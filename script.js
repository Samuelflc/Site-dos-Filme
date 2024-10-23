const movieCards = document.querySelectorAll('.movie-card');
const likeBtn = document.getElementById('like-btn');
const dislikeBtn = document.getElementById('dislike-btn');

let currentCardIndex = 0;

function showNextMovieCard() {
  movieCards[currentCardIndex].classList.remove('active');
  currentCardIndex = (currentCardIndex + 1) % movieCards.length;
  movieCards[currentCardIndex].classList.add('active');
}

likeBtn.addEventListener('click', showNextMovieCard);
dislikeBtn.addEventListener('click', showNextMovieCard);
