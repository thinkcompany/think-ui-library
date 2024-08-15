const BigListTemplate = () => {
  const linkA = 'Be excellent.';
  const linkB = 'Be kind to people.';
  const linkC = 'Be honest.';
  const linkD = 'Work together.';
  const linkE = 'Continuously improve.';
  const linkF = 'Be of service.';

  return `
  <div class="tco-container-wrapper">
	  <div class="tco-container">
      <ol class="tco-big-list">
        <li class="tco-big-list--item">
          <h4 class="tco-big-list--heading tco-type-body--mega">${linkA}</h4>
        </li>
        <li class="tco-big-list--item">
          <h4 class="tco-big-list--heading tco-type-body--mega">${linkB}</h4>
        </li>
        <li class="tco-big-list--item">
          <h4 class="tco-big-list--heading tco-type-body--mega">${linkC}</h4>
        </li>
        <li class="tco-big-list--item">
          <h4 class="tco-big-list--heading tco-type-body--mega">${linkD}</h4>
        </li>
        <li class="tco-big-list--item">
          <h4 class="tco-big-list--heading tco-type-body--mega">${linkE}</h4>
        </li>
        <li class="tco-big-list--item">
          <h4 class="tco-big-list--heading tco-type-body--mega">${linkF}</h4>
          </a>
        </li>
      </ol>
    </div>
  </div>
  `;
};

export const BigList = BigListTemplate.bind({});

export default {
  title: 'Components / Big List',
  component: [BigList],
  parameters: {
    component: BigList,
    controls: { hideNoControlsWarning: true }
  }
};
