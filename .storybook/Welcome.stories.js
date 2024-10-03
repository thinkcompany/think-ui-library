// Welcome.stories.js

export default {
  title: 'Welcome',
  tags: ['introduction']
};

export const ToStorybook = () => {
  const container = document.createElement('div');

  container.innerHTML = `
    <h1>Welcome to Storybook</h1>
    <p>This is a simple introductory story for our vanilla JS/HTML setup.</p>
    <p>You can explore the components on the left-hand side to get started.</p>
  `;
  return container;
};

ToStorybook.storyName = 'Introduction';
