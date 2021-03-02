import { boolean, text } from '@storybook/addon-knobs';

export const byline = () => {
  const bylineName = text('Post Author', 'Keith Rich');
  const bylineDesc = text('Post Date', 'May 21, 2020');
  const bylineImage = text(
    'Image',
    'https://thinkcompany.com/wp-content/uploads/2018/05/KeithRich_Web.jpg'
  );
  const bylineLink = boolean('With link?', false);

  let containerOpen = '';

  let containerClose = '';

  if (bylineLink) {
    containerOpen = '<a href="#" class="tco-byline tco-byline--link">';
    containerClose = '</a>';
  } else {
    containerOpen = '<div class="tco-byline">';
    containerClose = '</div>';
  }

  return `
    ${containerOpen}
      <div class="tco-byline-image-container">
        <img src="${bylineImage}" alt="${bylineName}">
      </div>
      <div class="tco-byline-content-container">
        <p class="tco-byline-name">By ${bylineName}</p>
        <p class="tco-byline-description">${bylineDesc}</p>
      </div>
    ${containerClose}
  `;
};

export default {
  title: 'Components / Byline',
  // enables Chromatic for the component
  parameters: {
    chromatic: { disable: false }
  }
};
