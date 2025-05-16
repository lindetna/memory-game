class GameController extends Stimulus.Controller {
  static targets = ["card"]

  connect() {

  }

  flipCard(event) {
    const card = event.currentTarget;
    const cardFront = card.querySelector('.flip-card-front')
    const cardBack = card.querySelector('.flip-card-back')

    cardFront.classList.remove('flip-card-front')
    cardFront.classList.add('flip-card-back');
    cardBack.classList.remove('flip-card-back')
    cardBack.classList.add('flip-card-front'); 
  }
}
