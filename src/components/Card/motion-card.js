document.addEventListener('DOMContentLoaded', () => {
  const motionCards = document.querySelectorAll('.tco-card--motion');

  const cardControls = card => {
    const track = card.querySelector('.tco-motion-track');
    const minis = track.querySelectorAll('.tco-mini-card');
    const control = card.querySelector('.tco-motion-control');
    const pauseClass = 'tco-motion-track--paused';

    minis.forEach(mini => {
      let clone = mini.cloneNode(true);
      clone.classList.add('tco-mini-card--clone');
      track.append(clone);
    });

    console.log(track);

    control.addEventListener('click', event => {
      event.preventDefault();

      if (track.classList.contains(pauseClass)) {
        track.classList.remove(pauseClass);
        control.classList.remove(pauseClass);
      } else {
        track.classList.add(pauseClass);
        control.classList.add(pauseClass);
      }
    });
  };

  motionCards.forEach(motionCard => {
    cardControls(motionCard);
  });
});
