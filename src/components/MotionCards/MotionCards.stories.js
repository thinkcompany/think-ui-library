const miniContent = [
  {
    name: 'Penn Mutual',
    image: 'img/case-studies/Penn-Mutual.jpg',
    project: 'Financial Services',
    bg: '#00654e'
  },
  {
    name: 'Nemours',
    image: 'img/case-studies/Nemours.jpg',
    project: 'Healthcare',
    bg: '#003A6F'
  },
  {
    name: 'Janney',
    image: 'img/case-studies/Janney.jpg',
    project: 'Financial Services',
    bg: '#256896'
  },
  {
    name: 'Merck',
    image: 'img/case-studies/Merck.jpg',
    project: 'Pharmaceutical',
    bg: '#01857c'
  },
  {
    name: 'Comcast Business',
    image: 'img/case-studies/Comcast-Business.jpg',
    project: 'Corporate',
    bg: '#c9234a'
  }
];

const sliderRowA = [
  {
    image: 'img/motion-card/Think_culture_0003-1.jpg'
  },
  {
    image: 'img/motion-card/Think_culture_0019-1.jpg'
  },
  {
    image: 'img/motion-card/Think_culture_0063-1.jpg'
  },
  {
    image: 'img/motion-card/Think_culture_0111-1.jpg'
  }
];

const sliderRowB = [
  {
    image: 'img/motion-card/Think_culture_0111-2.jpg'
  },
  {
    image: 'img/motion-card/Think_culture_0125-1.jpg'
  },
  {
    image: 'img/motion-card/Think_culture_0145-1.jpg'
  },
  {
    image: 'img/motion-card/Think_culture_0151-1.jpg'
  },
  {
    image: 'img/motion-card/Think_culture_0155-1.jpg'
  }
];

const miniCsCard = input => {
  return `
    <article class="tco-mini-card" style="--cs-bg-hex:${input.bg}">
      <div class="animation-container">
        <a href="/" class="tco-mini-card-container">
          <div class="tco-mini-image-container">
            <img src="${input.image}" alt="Example of work" width="234" height="130" />
          </div>
          <div class="tco-mini-content">
            <h3 class="tco-type-eyebrow">${input.name}</h3>
            <p class="tco-type-body">${input.project}</p>
          </div>
        </a>
      </div>
    </article>
  `;
};

const miniSliderRow = input => {
  return `
    <figure class="tco-mini-slide">
      <img src="${input.image}" alt="This is alt text" width="174" height="116" class="tco-mini-slide-image" />
    </figure>
  `;
};

const MotionCardTemplate = args => {
  const { heading, headingB, summary, summaryB, miniCards, treatment } = args;
  const miniCount = miniCards.length;
  const slideCountA = sliderRowA.length;
  const slideCountB = sliderRowB.length;

  return `
  <div class="tco-container-wrapper">
    <div class="tco-container">
      <div class="tco-card-grid tco-card-grid--2-column">
        <div class="tco-card tco-card--motion tco-card--motion-carousel tco-card-container--${treatment}">
          <div class="tco-card-content-container">
            <h2 class="tco-type-display--medium">${heading}</h2>
            <p class="tco-card-description tco-type-body--sans-small">${summary}</p>
            <a class="tco-text-link-motion tco-type-body">
              See our work
              <svg class="tco-text-link-icon tco-text-link-icon--alt" width="20" height="20" viewBox="0 0 20 20" role="presentation">
                <use xlink:href="/img/icons.svg#icon-arrow-right"></use>
              </svg>
            </a>

          </div>
          <div class="tco-card-motion-container">
            <div class="tco-motion-track tco-motion-track--carousel tco-motion-track--paused" style="--card-count:${miniCount}">
              ${miniCards.map(item => miniCsCard(item)).join('')}
            </div>
            <div class="tco-motion-control-container tco-motion-control-container--carousel">
              <button class="tco-motion-control tco-motion-track--paused tco-btn">
                <span class="tco-accessibly-hidden">Stop Video</span>
                <svg class="tco-motion-control-icon tco-motion-control-icon--pause" width="20" height="20" viewBox="0 0 12 12" role="presentation">
                  <use xlink:href="/img/icons.svg#icon-pause"></use>
                </svg>
                <svg class="tco-motion-control-icon tco-motion-control-icon--play" width="20" height="20" viewBox="0 0 12 12" role="presentation">
                  <use xlink:href="/img/icons.svg#icon-play"></use>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div class="tco-card tco-card--motion tco-card--motion-slider tco-card-container--${treatment}">
          <div class="tco-card-content-container">
            <h2 class="tco-type-display--medium">${headingB}</h2>
            <p class="tco-card-description tco-type-body--sans-small">${summaryB}</p>
            <a class="tco-text-link-motion tco-type-body">
              How we do it
              <svg class="tco-text-link-icon tco-text-link-icon--alt" width="20" height="20" viewBox="0 0 20 20" role="presentation">
                <use xlink:href="/img/icons.svg#icon-arrow-right"></use>
              </svg>
            </a>

          </div>
          <div class="tco-card-motion-container tco-card-motion-container--slider">
            <div class="tco-motion-track tco-motion-track--slider tco-motion-track--paused">
              <div class="tco-motion-row tco-motion-row--top" style="--slide-count-a:${slideCountA}">
                ${sliderRowA.map(item => miniSliderRow(item)).join('')}
              </div>
              <div class="tco-motion-row tco-motion-row--bottom" style="--slide-count-b:${slideCountB}">
                ${sliderRowB.map(item => miniSliderRow(item)).join('')}
              </div>
            </div>
            <div class="tco-motion-control-container">
              <button class="tco-motion-control tco-motion-track--paused tco-btn">
                <span class="tco-accessibly-hidden">Stop Video</span>
                <svg class="tco-motion-control-icon tco-motion-control-icon--pause" width="20" height="20" viewBox="0 0 12 12" role="presentation">
                  <use xlink:href="/img/icons.svg#icon-pause"></use>
                </svg>
                <svg class="tco-motion-control-icon tco-motion-control-icon--play" width="20" height="20" viewBox="0 0 12 12" role="presentation">
                  <use xlink:href="/img/icons.svg#icon-play"></use>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
};

export const MotionCards = MotionCardTemplate.bind({});

export default {
  title: 'Components / Motion Cards',
  args: {
    heading: 'Work',
    headingB: 'Process',
    summary:
      "Take a look at how we've helped teams like yours delight customers and employees with modern digital tools.",
    summaryB:
      'See how we launch exceptional digital experiences— even in the most challenging regulated environments.',
    miniCards: miniContent
  },
  parameters: {
    component: MotionCards,
    docs: {
      description: {
        component:
          'Case Study Card images<br><strong>upload size</strong> 387 x 215<br>Sliding Image Card images<br><strong>upload size</strong> 261 x 174'
      }
    }
  }
};
