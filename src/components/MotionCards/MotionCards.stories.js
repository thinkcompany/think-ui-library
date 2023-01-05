const miniContent = [
  {
    name: 'Client',
    image: 'img/case-studies/client-a.png',
    project: 'Client project',
    bg: '#00654e'
  },
  {
    name: 'Client',
    image: 'img/case-studies/client-b.png',
    project: 'Client project',
    bg: '#007ab8'
  },
  {
    name: 'Client with a long name',
    image: 'img/case-studies/client-c.png',
    project: 'Client project name really long',
    bg: '#143061'
  }
];

const sliderRowA = [
  {
    image: 'img/case-studies/client-a.jpg'
  },
  {
    image: 'img/case-studies/client-b.jpg'
  },
  {
    image: 'img/case-studies/client-c.jpg'
  },
  {
    image: 'img/case-studies/client-b.jpg'
  }
];

const sliderRowB = [
  {
    image: 'img/case-studies/client-a.jpg'
  },
  {
    image: 'img/case-studies/client-b.jpg'
  },
  {
    image: 'img/case-studies/client-c.jpg'
  },
  {
    image: 'img/case-studies/client-b.jpg'
  },
  {
    image: 'img/case-studies/client-c.jpg'
  }
];

const miniCsCard = input => {
  return `
    <article class="tco-mini-card" style="--cs-bg-hex:${input.bg}">
      <div class="tco-mini-card-container animation-container">
        <div class="tco-mini-image-container">
          <img src="${input.image}" alt="Example of work" width="234" height="130" />
        </div>
        <div class="tco-mini-content">
          <h5 class="tco-type-eyebrow">${input.name}</h5>
          <p class="tco-type-body">${input.project}</p>
        </div>
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
            <h2 class="tco-type-display--medium tco-link--dark-theme">${heading}</h2>
            <p class="tco-card-description tco-type-body--sans-small">${summary}</p>
            <a class="tco-text-link tco-type-body tco-link--dark-theme">
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
            <h2 class="tco-type-display--medium tco-link--dark-theme">${headingB}</h2>
            <p class="tco-card-description tco-type-body--sans-small">${summaryB}</p>
            <a class="tco-text-link tco-type-body tco-link--dark-theme">
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

export const MotionCards = MotionCardTemplate.bind({});

MotionCards.args = {
  heading: 'Work',
  headingB: 'Process',
  summary:
    'Take a look at how we’ve helped teams like yours delight customers and employees with modern digital tools.',
  summaryB:
    'See how we launch exceptional digital experiences— even in the most challenging regulated environments.',
  miniCards: miniContent
};

MotionCards.argTypes = {
  treatment: {
    name: 'border treatment (dark theme)',
    control: 'inline-radio',
    options: treatments
  },
  layout: {
    name: 'media position',
    control: 'inline-radio',
    options: layouts
  }
};

export default {
  title: 'Components / Motion Cards',
  component: MotionCards,
  parameters: {
    component: MotionCards,
    componentSubtitle: 'Cards are used on the site via the Post Grid, and Card Grid components.',
    docs: {
      description: {
        component:
          'The <a href="#post-card">Post</a>, <a href="#person-card">Person</a>, Event, and Case Study cards are available within the <strong>Post Grid</strong>, and content is populated automatically based on the selected post. Only one type of card (content type) can be used within the Post Grid.<br><br>The <strong>Card Grid</strong> offers more flexibility, as the <a href="#post-card">Post</a>, <a href="#job-card">Job</a>, <a href="#media-card">Media</a>, <a href="#callout-card">Callout</a>, <a href="person-card">Person</a>, <a href="#anchor--components-card--summary-card">Summary</a>, Service, and Process cards are available. Different card types can be used within the same Card Grid instance, and content is manually input.<br><br><br><h3 class="sbdocs-h3" style="margin-left:0;">Summary Card</h3>'
      }
    }
  },
  argTypes: {
    heading: {
      table: {
        type: { summary: 'text field' }
      }
    },
    image: {
      description:
        'Summary: Display width 302px. Upload @1.5x = 451px<br>Person: Display width 250px. Upload @1.5x = 375px<br>Post: Display width 478px. Upload @1.5x = 717px<br>Callout: Display width: 44px. Upload @1.5x = 66px<br>Media: Display width 328px. Upload @1.5x = 492px',
      table: {
        type: { summary: 'image' }
      }
    },
    treatment: {
      description: 'Cards have 3 border treatment options <em>for Dark mode only</em>',
      table: {
        type: { summary: 'select' },
        defaultValue: { summary: 'flat' }
      }
    }
  }
};
