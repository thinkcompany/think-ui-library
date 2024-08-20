const NumberedListTemplate = () => {
  const linkA = 'Be excellent.';
  const linkB = 'Be kind to people.';
  const linkC = 'Be honest.';
  const linkD = 'Work together.';
  const linkE = 'Continuously improve.';
  const linkF = 'Be of service.';

  return `
  <div class="tco-container-wrapper">
	  <div class="tco-container">
      <ol class="tco-numbered-list">
        <li class="tco-numbered-list--item">
          <h4 class="tco-numbered-list--heading tco-type-body--mega">${linkA}</h4>
        </li>
        <li class="tco-numbered-list--item">
          <h4 class="tco-numbered-list--heading tco-type-body--mega">${linkB}</h4>
        </li>
        <li class="tco-numbered-list--item">
          <h4 class="tco-numbered-list--heading tco-type-body--mega">${linkC}</h4>
        </li>
        <li class="tco-numbered-list--item">
          <h4 class="tco-numbered-list--heading tco-type-body--mega">${linkD}</h4>
        </li>
        <li class="tco-numbered-list--item">
          <h4 class="tco-numbered-list--heading tco-type-body--mega">${linkE}</h4>
        </li>
        <li class="tco-numbered-list--item">
          <h4 class="tco-numbered-list--heading tco-type-body--mega">${linkF}</h4>
          </a>
        </li>
      </ol>
    </div>
  </div>
  `;
};

export const NumberedList = NumberedListTemplate.bind({});

NumberedList.parameters = {
  component: NumberedList,
  controls: { hideNoControlsWarning: true }
};

const DescriptionListTemplate = args => {
  const {
    eyebrow,
    titleA,
    copyA,
    image,
    titleB,
    copyB,
    titleC,
    copyC,
    titleD,
    copyD,
    titleE,
    copyE
  } = args;

  return `
    <div class="tco-container-wrapper tco-container-wrapper--purple">
	    <div class="tco-container">
        <ul class="tco-description-list">
          <li class="tco-description-list--item tco-description-list--item-full">
            <p class="tco-description-list--eyebrow tco-type-eyebrow">${eyebrow}</p>
            <h4 class="tco-description-list--heading tco-type-display--medium-36">${titleA}</h4>
            <p class="tco-description-list--content tco-type-body--medium">${copyA}</p>
            <img src="${image}" alt="Image A" class="tco-description-list--image" />
          </li>

          <li class="tco-description-list--item tco-description-list--item-partial">
            <h4 class="tco-description-list--heading tco-type-body--large-36">${titleB}</h4>
            <p class="tco-description-list--content tco-type-body">${copyB}</p>
          </li>

          <li class="tco-description-list--item tco-description-list--item-partial">
            <h4 class="tco-description-list--heading tco-type-body--large-36">${titleC}</h4>
            <p class="tco-description-list--content tco-type-body">${copyC}</p>
          </li>

          <li class="tco-description-list--item tco-description-list--item-partial">
            <h4 class="tco-description-list--heading tco-type-body--large-36">${titleD}</h4>
            <p class="tco-description-list--content tco-type-body">${copyD}</p>
          </li>

          <li class="tco-description-list--item tco-description-list--item-partial">
            <h4 class="tco-description-list--heading tco-type-body--large-36">${titleE}</h4>
            <p class="tco-description-list--content tco-type-body">${copyE}</p>
          </li>
        </ul>

      </div>
    </div>
  `;
};

export const DescriptiveList = DescriptionListTemplate.bind({});

DescriptiveList.args = {
  eyebrow: 'Term A',
  titleA: "It's about way more than the Benjamins",
  copyA:
    'We want you to live your best life and not just at work. That means staying healthy, feeling valued, and having the time and resources to do what you love.',
  image: '/img/thinkers-at-table.jpg',
  titleB: 'Competitive salaries, </br>raises, and bonuses',
  copyB:
    "We pay fairly and make sure that stays true year after year. You'll receive a bonus each year as an added thank you for all your hard work.",
  titleC: 'Matched retirement </br>account',
  copyC:
    "We want you to do well for yourself now and into the future. That's why we offer a top-notch 401k retirement savings plan and match up to 4%.",
  titleD: '100% paid health and </br>dental insurance',
  copyD:
    "We've got you covered with health, dental, and vision coverage options to fit your lifestyle. We pay 100% of premiums for you, 75% for your kids, and 50% for your spouse.",
  titleE: 'Flexible paid time off </br>(no really)',
  copyE:
    "We don't want you to miss anything that matters, and we want you to relax and recharge so you're at your best. Take a break when you need it—we want to see the photos when you're back!"
};

DescriptiveList.argTypes = {};

export default {
  title: 'Components / Lists',
  component: [NumberedList, DescriptiveList]
};
