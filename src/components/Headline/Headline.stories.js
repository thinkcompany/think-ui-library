const HeadlineTemplate = args => {
  return `
  <div class="tco-container-wrapper tco-text-only-page-header">
	  <div class="tco-container">
      <div class="tco-text-only ">
        <h1 class="tco-text-only-heading">
          <span>World-class</span>
          <span>digital experiences</span>
          <span>for every user</span>
        </h1>
      </div>
    </div>
  </div>
  `;
};

export const Headline = HeadlineTemplate.bind({});

export default {
  title: 'Motion / Headline',
  component: Headline,
  parameters: {
    component: Headline,
    controls: { hideNoControlsWarning: true }
  }
};
