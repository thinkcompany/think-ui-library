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

const fullWidthCards = [
  {
    name: 'Industry A',
    imageA: {
      url: 'img/logos/logo-andesa.svg',
      width: 270,
      height: 259,
      name: 'Andesa'
    },
    imageB: {
      url: 'img/logos/logo-aws.svg',
      width: 1080,
      height: 404.6,
      name: 'AWS'
    },
    imageC: {
      url: 'img/logos/logo-salesforce.svg',
      width: 1080,
      height: 754.2,
      name: 'Salesforce'
    },
    imageD: {
      url: 'img/logos/logo-nemours.svg',
      width: 335,
      height: 113,
      name: 'Nemours'
    },
    imageE: {
      url: 'img/logos/logo-whyy.svg',
      width: 335,
      height: 112,
      name: 'WHYY'
    },
    imageF: {
      url: 'img/logos/logo-whyy.svg',
      width: 335,
      height: 112,
      name: 'WHYY'
    }
  },
  {
    name: 'Industry B',
    imageA: {
      url: 'img/logos/logo-andesa.svg',
      width: 270,
      height: 259,
      name: 'Andesa'
    },
    imageB: {
      url: 'img/logos/logo-aws.svg',
      width: 1080,
      height: 404.6,
      name: 'AWS'
    },
    imageC: {
      url: 'img/logos/logo-nemours.svg',
      width: 335,
      height: 113,
      name: 'Nemours'
    },
    imageD: {
      url: 'img/logos/logo-salesforce.svg',
      width: 1080,
      height: 754.2,
      name: 'Salesforce'
    },
    imageE: {
      url: 'img/logos/logo-whyy.svg',
      width: 335,
      height: 112,
      name: 'WHYY'
    },
    imageF: {
      url: 'img/logos/logo-whyy.svg',
      width: 335,
      height: 112,
      name: 'WHYY'
    }
  },
  {
    name: 'Industry C',
    imageA: {
      url: 'img/logos/logo-andesa.svg',
      width: 270,
      height: 259,
      name: 'Andesa'
    },
    imageB: {
      url: 'img/logos/logo-aws.svg',
      width: 1080,
      height: 404.6,
      name: 'AWS'
    },
    imageC: {
      url: 'img/logos/logo-nemours.svg',
      width: 335,
      height: 113,
      name: 'Nemours'
    },
    imageD: {
      url: 'img/logos/logo-salesforce.svg',
      width: 1080,
      height: 754.2,
      name: 'Salesforce'
    },
    imageE: {
      url: 'img/logos/logo-whyy.svg',
      width: 335,
      height: 112,
      name: 'WHYY'
    },
    imageF: {
      url: 'img/logos/logo-whyy.svg',
      width: 335,
      height: 112,
      name: 'WHYY'
    }
  },
  {
    name: 'Industry D',
    imageA: {
      url: 'img/logos/logo-andesa.svg',
      width: 270,
      height: 259,
      name: 'Andesa'
    },
    imageB: {
      url: 'img/logos/logo-aws.svg',
      width: 1080,
      height: 404.6,
      name: 'AWS'
    },
    imageC: {
      url: 'img/logos/logo-nemours.svg',
      width: 335,
      height: 113,
      name: 'Nemours'
    },
    imageD: {
      url: 'img/logos/logo-salesforce.svg',
      width: 1080,
      height: 754.2,
      name: 'Salesforce'
    },
    imageE: {
      url: 'img/logos/logo-whyy.svg',
      width: 335,
      height: 112,
      name: 'WHYY'
    },
    imageF: {
      url: 'img/logos/logo-whyy.svg',
      width: 335,
      height: 112,
      name: 'WHYY'
    }
  }
];

const miniCsCard = input => {
  return `
    <article class="tco-mini-card" style="--cs-bg-hex:${input.bg}">
      <div class="animation-container">
        <div class="tco-mini-card-container">
          <div class="tco-mini-image-container">
            <img src="${input.image}" alt="Example of work" width="234" height="130" />
          </div>
          <div class="tco-mini-content">
            <h3 class="tco-type-display--small-24">${input.name}</h3>
            <p class="tco-type-body--small-14">${input.project}</p>
          </div>
        </div>
      </div>
      <a href="/" class="tco-mini-card-link"><span class="tco-accessibly-hidden">View Case Study</span></a>
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

const fullCard = input => {
  const { imageA, imageB, imageC, imageD, imageE, imageF } = input;

  return `
    <div class="tco-carousel-card-full">
      <div class="tco-animation-container">
        <h3 class="tco-carousel-title tco-type-display--sans-48">${input.name}</h3>
        <div class="tco-grid">
          ${
            imageA
              ? `
            <div class="tco-grid-item">
              <img src="${imageA.url}" class="tco-grid-item-image" width="${imageA.width}" height="${imageA.height}" alt="${imageA.name} logo">
            </div>`
              : ''
          }
          ${
            imageB
              ? `
            <div class="tco-grid-item">
              <img src="${imageB.url}" class="tco-grid-item-image" width="${imageB.width}" height="${imageB.height}" alt="${imageB.name} logo">
            </div>`
              : ''
          }
          ${
            imageC
              ? `
            <div class="tco-grid-item">
              <img src="${imageC.url}" class="tco-grid-item-image" width="${imageC.width}" height="${imageC.height}" alt="${imageC.name} logo">
            </div>`
              : ''
          }
          <div class="tco-grid-item">
            <img src="${imageD.url}" class="tco-grid-item-image" width="${imageD.width}" height="${
    imageD.height
  }" alt="${imageD.name} logo">
          </div>
          <div class="tco-grid-item">
            <img src="${imageE.url}" class="tco-grid-item-image" width="${imageE.width}" height="${
    imageE.height
  }" alt="${imageE.name} logo">
          </div>
          <div class="tco-grid-item">
            <img src="${imageF.url}" class="tco-grid-item-image" width="${imageF.width}" height="${
    imageF.height
  }" alt="${imageF.name} logo">
          </div>
        </div>
        <a href="/" class="tco-btn tco-btn--primary">Button</a>
      </div>
    </div>
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
            <h2 class="tco-card--motion-title tco-type-display--large-80">${heading}</h2>
            <p class="tco-card-description tco-type-body--default">${summary}</p>
            <a href="#" class="tco-card--motion-cta tco-tco-text-link tco-text-link--arrow">
              See our work
              <svg class="tco-text-link-icon" width="20" height="20" viewBox="0 0 20 20" role="presentation">
                <use xlink:href="/img/icons.svg#icon-arrow-right"></use>
              </svg>
            </a>

          </div>
          <div class="tco-card-motion-container">
            <div class="tco-motion-track tco-motion-track--carousel tco-motion-track--paused" style="--card-count:${miniCount}">
              ${miniCards.map(item => miniCsCard(item)).join('')}
            </div>
            <div class="tco-motion-control-container tco-motion-control-container--carousel">
              <button class="tco-motion-control tco-motion-control--carousel tco-motion-track--paused tco-btn">
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
            <h2 class="tco-card--motion-title tco-type-display--large-80">${headingB}</h2>
            <p class="tco-card-description tco-type-body--default">${summaryB}</p>
            <a href="#" class="tco-card--motion-cta tco-tco-text-link tco-text-link--arrow">
              How we do it
              <svg class="tco-text-link-icon" width="20" height="20" viewBox="0 0 20 20" role="presentation">
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

const FullWidthTemplate = args => {
  const { fullCards } = args;
  const fullCount = fullWidthCards.length;

  return `
  <div class="tco-container-wrapper tco-container-wrapper--bleed">
    <div class="tco-container tco-container--full">
      <div class="tco-carousel-full">
        <div class="tco-carousel-full-header">
          <h3 class="tco-type-display--medium">We work in industries like yours</h3>
        </div>
        <div class="tco-motion-container">
          <div class="tco-motion-track tco-motion-track--carousel tco-motion-track--paused" style="--card-count:${fullCount}">
            ${fullCards.map(item => fullCard(item)).join('')}
          </div>
        </div>
        <div class="tco-motion-control-container tco-motion-control-container--carousel">
          <button class="tco-motion-control tco-motion-control--carousel tco-motion-track--paused tco-btn">
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
  </div>`;
};

export const MotionCards = MotionCardTemplate.bind({});
export const FullWidth = FullWidthTemplate.bind({});

export default {
  title: 'Components / Motion Cards',
  args: {
    heading: 'Work',
    headingB: 'Process',
    summary:
      "We've helped teams like yours delight customers and employees with modern digital tools.",
    summaryB:
      'See how we launch exceptional digital experiences— even in the most challenging regulated environments.',
    miniCards: miniContent,
    fullCards: fullWidthCards
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
