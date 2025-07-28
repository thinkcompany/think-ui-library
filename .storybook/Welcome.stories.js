// Welcome.stories.js

export const ToStorybook = () => {
  const container = document.createElement('div');

  container.innerHTML = `
    <div class="tco-container-wrapper">
      <div class="tco-container tco-page-header-big-bubble">
        <div class="tco-page-header--home">
          <h1 class="tco-page-header--home-title tco-type-display--extra-large">
            Think <br>Company <span>Pattern <br>library</span></h1>
          <div class="tco-container--narrow tco-container--left">
            <p class="tco-page-header--lede tco-type-body--large">The Think Company Design System includes styles, components, and patterns for various UI elements within the Think Company website. This library is intended to be used as a reference and guide for the design and development teams.</p>
          </div>
          </div>
      </div>
    </div>
    `;
  return container;
};

export default {
  title: 'Welcome',
  tags: ['Welcome'],
  parameters: {
    controls: { hideNoControlsWarning: true }
  }
};

ToStorybook.storyName = 'Welcome';
