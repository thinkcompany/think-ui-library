const TextCircleTemplate = args => {
  const { text } = args;

  return `
  <div class="tco-container-wrapper tco-container-wrapper--glass">
	  <div class="tco-container" style="max-width:900px;height:80vh; text-align:center;">
      <div class="tco-text-only">
        <h3 class="tco-type-display--large">${text}</h3>
      </div>
    </div>
  </div>
  `;
};

export const TextCircle = TextCircleTemplate.bind({});

TextCircle.args = {
  text: 'Not just clients,</br>but <span class="tco-type-treatment--circle">partners.<svg viewbox="0 0 498 155" fill="none"><path d="M495.812 54.215c.894 9.352-4.669 19.19-16.259 29.02-11.549 9.797-28.802 19.336-50.55 28.065-43.477 17.451-104.587 31.537-173.012 38.08-68.426 6.543-131.098 4.293-177.094-4.603-23.008-4.449-41.756-10.545-54.953-17.975-13.242-7.457-20.57-16.062-21.464-25.414-.894-9.353 4.67-19.19 16.26-29.021 11.548-9.797 28.802-19.335 50.55-28.064 43.476-17.45 104.586-31.538 173.012-38.08C310.728-.32 373.4 1.93 419.396 10.824c23.008 4.45 41.756 10.546 54.952 17.976 13.243 7.457 20.57 16.061 21.464 25.414Z" pathLength="1" /></svg></span>'
};

export default {
  title: 'Type Treatments / Text Circle',
  parameters: {
    component: TextCircle
  }
};
