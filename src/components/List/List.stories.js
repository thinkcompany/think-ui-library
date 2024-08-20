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

const stickyListTemplate = args => {
  const {
    headerTitle,
    headerCopy,
    titleA,
    copyA,
    titleB,
    copyB,
    titleC,
    copyC,
    titleD,
    copyD,
    titleE,
    copyE,
    titleF,
    copyF
  } = args;

  return `
    <div style="margin-bottom: 30em">
      <div class="tco-container-wrapper">
        <div class="tco-container">
          <div class="tco-sticky-list">
            <div class="tco-sticky-list--header">
              <h4 class="tco-sticky-list--heading tco-type-display--medium-36">${headerTitle}</h4>
              <p class="tco-sticky-list--content tco-type-body">${headerCopy}</p>
            </div>
            <ul class="tco-sticky-list--list">
              <li class="tco-sticky-list--item">
                <h4 class="tco-sticky-list--heading tco-type-body--extra-large">${titleA}</h4>
                <p class="tco-sticky-list--content tco-type-body">${copyA}</p>
              </li>
              <li class="tco-sticky-list--item">
                <h4 class="tco-sticky-list--heading tco-type-body--extra-large">${titleB}</h4>
                <p class="tco-sticky-list--content tco-type-body">${copyB}</p>
              </li>
              <li class="tco-sticky-list--item">
                <h4 class="tco-sticky-list--heading tco-type-body--extra-large">${titleC}</h4>
                <p class="tco-sticky-list--content tco-type-body">${copyC}</p>
              </li>
              <li class="tco-sticky-list--item">
                <h4 class="tco-sticky-list--heading tco-type-body--extra-large">${titleD}</h4>
                <p class="tco-sticky-list--content tco-type-body">${copyD}</p>
              </li>
              <li class="tco-sticky-list--item">
                <h4 class="tco-sticky-list--heading tco-type-body--extra-large">${titleE}</h4>
                <p class="tco-sticky-list--content tco-type-body">${copyE}</p>
              </li>
              <li class="tco-sticky-list--item">
                <h4 class="tco-sticky-list--heading tco-type-body--extra-large">${titleF}</h4>
                <p class="tco-sticky-list--content tco-type-body">${copyF}</p>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  `;
};

export const StickyList = stickyListTemplate.bind({});

StickyList.args = {
  headerTitle: 'More good stuff',
  headerCopy: "Because ping pong tables don't pay the bills",
  titleA: 'Work where you want',
  copyA:
    "We want everyone to do their best work—whether they're in a home office, coffee shop, or one of our studios. What's good for you is good with us.",
  titleB: 'Paid parental leave',
  copyB:
    'Think Company supports growing families by offering 12 weeks of fully-paid parental leave to mothers, partners, and adoptive parents.',
  titleC: 'Personal training budget',
  copyC:
    "We won't keep you in a box. Think Company funds a personal training budget for each employee and provides access to industry-relevant training platforms.",
  titleD: 'Life and disability insurance',
  copyD:
    "We don't want you or your loved ones to worry about life's unexpected tragedies, so we provide life and disability insurance and cover 100% of your premiums.",
  titleE: '5 year anniversary trip',
  copyE:
    "We're in it for the long-haul. When you reach five years of service, Think Company will thank you with a $5,000 bonus to use for travel to the vacation spot of your choice.",
  titleF: 'And more!',
  copyF:
    'We offer tax benefits to commuters and pet insurance for your furry loved ones. We also provide a WFH budget to build out your home office.'
};

export default {
  title: 'Components / Lists',
  component: [NumberedList, DescriptiveList, StickyList]
};
