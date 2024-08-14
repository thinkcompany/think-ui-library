const LinkListTemplate = () => {
  const linkA = 'Be excellent.';
  const linkB = 'Be kind to people.';
  const linkC = 'Be honest.';
  const linkD = 'Work together.';
  const linkE = 'Continuously improve.';
  const linkF = 'Be of service.';

  return `
  <div class="tco-container-wrapper">
	  <div class="tco-container">
      <ul class="tco-link-list">
        <li class="tco-link-list--item">
          <a href="#" class="tco-link-list--link">
            <h4 class="tco-link-list--heading tco-type-body--mega">${linkA}</h4>
            <svg class="tco-icon tco-link-list--arrow" viewBox="0 0 40 38" role="presentation">
              <use xlink:href="/img/icons.svg#icon-arrow-right"></use>
            </svg>
          </a>
        </li>
        <li class="tco-link-list--item">
          <a href="#" class="tco-link-list--link">
            <h4 class="tco-link-list--heading tco-type-body--mega">${linkB}</h4>
            <svg class="tco-icon tco-link-list--arrow" viewBox="0 0 40 38" role="presentation">
              <use xlink:href="/img/icons.svg#icon-arrow-right"></use>
            </svg>
          </a>
        </li>
        <li class="tco-link-list--item">
          <a href="#" class="tco-link-list--link">
            <h4 class="tco-link-list--heading tco-type-body--mega">${linkC}</h4>
            <svg class="tco-icon tco-link-list--arrow" viewBox="0 0 40 38" role="presentation">
              <use xlink:href="/img/icons.svg#icon-arrow-right"></use>
            </svg>
          </a>
        </li>
        <li class="tco-link-list--item">
          <a href="#" class="tco-link-list--link">
            <h4 class="tco-link-list--heading tco-type-body--mega">${linkD}</h4>
            <svg class="tco-icon tco-link-list--arrow" viewBox="0 0 40 38" role="presentation">
              <use xlink:href="/img/icons.svg#icon-arrow-right"></use>
            </svg>
          </a>
        </li>
        <li class="tco-link-list--item">
          <a href="#" class="tco-link-list--link">
            <h4 class="tco-link-list--heading tco-type-body--mega">${linkE}</h4>
            <svg class="tco-icon tco-link-list--arrow" viewBox="0 0 40 38" role="presentation">
              <use xlink:href="/img/icons.svg#icon-arrow-right"></use>
            </svg>
          </a>
        </li>
        <li class="tco-link-list--item">
          <a href="#" class="tco-link-list--link">
            <h4 class="tco-link-list--heading tco-type-body--mega">${linkF}</h4>
            <svg class="tco-icon tco-link-list--arrow" viewBox="0 0 40 38" role="presentation">
              <use xlink:href="/img/icons.svg#icon-arrow-right"></use>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </div>
  `;
};

export const LinkList = LinkListTemplate.bind({});

export default {
  title: 'Components / Link List',
  component: [LinkList],
  parameters: {
    component: LinkList,
    controls: { hideNoControlsWarning: true }
  }
};
