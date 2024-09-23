const cardContents = [
  {
    id: 'convenience',
    eyebrow: 'Leading U.S. Convenience Store',
    heading: 'Succinct headline that entices you to read the whole thing',
    device: 'kiosk',
    imageBg: 'img/case-studies/nemours-background.jpg',
    description:
      'Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum',
    cta: 'View case study',
    opacity: 0.9
  },
  {
    id: 'nemours',
    eyebrow: 'Nemours',
    heading: 'Succinct headline that entices you to read the whole thing',
    device: 'phone',
    imageBg: 'img/case-studies/nemours-background.jpg',
    description:
      'Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum',
    cta: 'View case study',
    opacity: 0.9
  },
  {
    id: 'comcast',
    eyebrow: 'Comcast Corporate',
    heading: 'Succinct headline that entices you to read the whole thing',
    device: 'desktop',
    imageBg: 'img/case-studies/nemours-background.jpg',
    description:
      'Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum',
    cta: 'View case study',
    opacity: 0.9
  },
  {
    id: 'retail360',
    eyebrow: 'Comcast Retail360',
    heading: 'Succinct headline that entices you to read the whole thing',
    device: 'tablets',
    imageBg: 'img/case-studies/nemours-background.jpg',
    description:
      'Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum',
    cta: 'View case study',
    offset: 'bottom',
    opacity: 0.9
  },
  {
    id: 'merck',
    eyebrow: 'Merck',
    heading: 'Succinct headline that entices you to read the whole thing',
    device: 'desktop',
    imageBg: 'img/case-studies/nemours-background.jpg',
    description:
      'Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum',
    cta: 'View case study',
    opacity: 0.9
  },
  {
    id: 'policy-map',
    eyebrow: 'Policymap',
    heading: 'Succinct headline that entices you to read the whole thing',
    device: 'laptop',
    imageBg: 'img/case-studies/nemours-background.jpg',
    description:
      'Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum',
    cta: 'View case study',
    opacity: 0.9
  },
  {
    id: 'einstein',
    eyebrow: 'Comcast Einstein',
    heading: 'Succinct headline that entices you to read the whole thing',
    device: 'desktop',
    imageBg: 'img/case-studies/nemours-background.jpg',
    description:
      'Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum',
    cta: 'View case study',
    opacity: 0.9
  },
  {
    id: 'janney',
    eyebrow: 'Janney',
    heading: 'Succinct headline that entices you to read the whole thing',
    device: 'tablet-angle',
    imageBg: 'img/case-studies/nemours-background.jpg',
    description:
      'Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum',
    cta: 'View case study',
    opacity: 0.9
  },
  {
    id: 'abc',
    eyebrow: 'ABC',
    heading: 'Succinct headline that entices you to read the whole thing',
    device: 'laptop-angle',
    imageBg: 'img/case-studies/nemours-background.jpg',
    description:
      'Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum',
    cta: 'View case study',
    opacity: 0.9
  },
  {
    id: 'abc',
    eyebrow: 'Amerisource Bergen',
    heading: 'Succinct headline that entices you to read the whole thing',
    device: 'desktop-angle',
    imageBg: 'img/case-studies/nemours-background.jpg',
    description:
      'Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum',
    cta: 'View case study',
    opacity: 0.9
  },
  {
    id: 'nemours',
    eyebrow: 'Jackson',
    heading: 'Succinct headline that entices you to read the whole thing',
    device: 'report',
    imageBg: 'img/case-studies/nemours-background.jpg',
    description:
      'Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum Lorem ipsum dolor set amet uncle B ipsum',
    cta: 'View case study',
    opacity: 0.9
  }
];

const types = ['full-width', 'card'];

const caseStudyCard = (input, cardtype) => {
  const cardType = cardtype;

  return `
    <div class="tco-card tco-card--case-study tco-card--case-study-${cardType} tco-card--case-study-${
      input.id
    }">
      <a href="#" class="tco-card-link tco-link--dark-theme">
        <div class="tco-case-study-image-container tco-case-study-image-container--case-study tco-case-study-image-container--${
          input.device
        }">
          <img class="tco-case-study-image tco-case-study-image--main" alt="A brilliant description of the image" src="img/case-studies/${
            input.device
          }.png" />
        </div>
        <div class="tco-card-content-container tco-card-content-container--${cardType} ">
          ${input.eyebrow ? '<span class="tco-card-eyebrow">' + input.eyebrow + '</span>' : ''}
          <h2 class="tco-card-content-heading tco-link--dark-theme">${input.heading}</h2>
          ${
            cardType === 'full-width'
              ? `
            <p class="tco-card-content-description">${input.description}</p>`
              : `<p class="tco-card-content-description"></p>`
          }
          <p class="tco-text-link tco-link--dark-theme">
            ${input.cta}
            <svg class="tco-text-link-icon tco-text-link-icon--alt" width="20" height="20" viewBox="0 0 20 20" role="presentation">
              <use xlink:href="/img/icons.svg#icon-arrow-right"></use>
            </svg>
          </p>
        </div>
        <div class="tco-case-study-image-container tco-case-study-image-container--case-study-bg" style="--bg-alpha:${
          input.opacity
        };">
          <img class="tco-case-study-image tco-case-study-image--bg" alt="" src="${
            input.imageBg
          }" />
        </div>

      </a>
    </div>
  `;
};

const CaseStudyCardsTemplate = args => {
  const { type, itemList } = args;
  const gridType = type === 'card' ? '2' : '1';

  return `
    <div class="tco-container-wrapper tco-container-wrapper--bleed">
      <div class="tco-container">
        <div class="tco-card-grid tco-card-grid--case-study tco-card-grid--${gridType}-column">
          ${itemList.map(item => caseStudyCard(item, type)).join('')}
        </div>
      </div>
    </div>
  `;
};

export const CaseStudyCards = CaseStudyCardsTemplate.bind({});

export default {
  title: 'Archive / Case Study Cards',
  args: {
    type: types[0],
    itemList: cardContents
  },
  parameters: {
    component: CaseStudyCards,
    componentSubtitle:
      'Case study cards are featured on the Our Work page (full width), and throughout the site in the Post Grid block (2 column)',
    docs: {
      description: {
        component:
          'Background color and opacity are fully customizable in the CMS. Focal image positioning is selectable based on the device used to frame the actual artwork.'
      }
    }
  },
  argTypes: {
    type: {
      name: 'card type',
      control: 'inline-radio',
      options: types,
      description: 'Choose 1 or 2 column layout',
      table: {
        type: { summary: 'radio' },
        defaultValue: { summary: '1 col (full width)' }
      }
    },
    eyebrow: {
      table: {
        type: { summary: 'text field' }
      }
    },
    lede: {
      table: {
        type: { summary: 'wysiwyg' }
      }
    },
    cta: {
      description: 'CTA text is editable. Link points to single case study page',
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: 'View case study' }
      }
    },
    color: {
      name: 'custom color',
      description: 'Used for background overlay and page header on single case study pages',
      table: {
        type: { summary: 'color picker' }
      }
    },
    bg: {
      name: 'background image(s)',
      description:
        '<strong>Full width background</strong>: Image will stretch to fill container, but will maintain its natural aspect ratio. Displays at max width of 1168px. Upload @1.5x = 1752px<br><br><strong>Card background (2 col)</strong>: Optional. Image is forced to display at a 16:9 aspect ratio to ensure proper grid alignment. If not uploaded, full width image will be used',
      table: {
        type: { summary: 'image' }
      }
    },
    opacity: {
      name: 'background overlay opacity',
      description: 'Opacity of custom case study color',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0.9' }
      }
    },
    image: {
      name: 'focal image',
      description:
        'Focal image positioning is selectable based on the device used to frame the actual artwork.<br><em>device / display dimensions max / dimensions @ 1.5x</em><br>phone / 640 x 432 / 960 x 648<br>monitor / 468 x 390 / 702 x 585<br>tablet vertical / 350 x 473 / 525 x 710<br>laptop / 570 x 325 / 855 x 488<br>tablet horizontal / 500 x 408 / 750 x 612<br>laptop angled / 500 x 443 / 750 x 665<br>kiosk / 442 x 486 / 663 x 729<br>report / 420 x 504 / 630 x 756<br>monitor angled / 468 x 449 / 702 x 674',
      table: {
        type: { summary: ['image', 'select'] },
        defaultValue: {
          summary: 'phone'
        }
      }
    }
  }
};
