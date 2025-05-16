class GameController extends Stimulus.Controller {
  static targets = ["card"]

  connect() {
    this.counter = 0;
  }

  flipCard(event) {
    const card = event.currentTarget;
    card.classList.add('flipped');
    this.counter++;

    if (this.counter == 2) {
      const flippedCards = this.cardTargets.filter(card => {
        return card.classList.contains('flipped') && !card.classList.contains('odd');
      });

      if (
        flippedCards[0].querySelector('.flip-card-back img').dataset.value ==
          flippedCards[1].querySelector('.flip-card-back img').dataset.value
      ) {
        flippedCards.forEach(card => card.classList.add('odd'));
      } else {
        setTimeout(() => {
          flippedCards.forEach(card => card.classList.remove('flipped'));
        }, 1000);

      }
      this.counter = 0;
    }
  }
}
