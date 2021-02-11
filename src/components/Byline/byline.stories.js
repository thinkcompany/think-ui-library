import { select, boolean, text, number } from '@storybook/addon-knobs';

export const Default = () => {
  const bylineName = text('Author Name', 'FirstName LastName');
  const bylineDesc = text('Byline Description', 'July 8, 2020');
  const bylineImage = text(
    'Image',
    'https://3vwizk2qtr8l3diwrm3r2ba0-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/AbbyDePrimo_Web.jpg'
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
    <div class="tco-container-wrapper tco-author">
      <div class="tco-container tco-container--default">
        ${containerOpen}
          <div class="tco-byline-image-container">
            <img src="https://3vwizk2qtr8l3diwrm3r2ba0-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/AbbyDePrimo_Web.jpg" alt="${bylineName}">
          </div>
          <div class="tco-byline-content-container">
            <p class="tco-byline-name">${bylineName}</p>
            <p class="tco-byline-description">${bylineDesc}</p>
          </div>
        ${containerClose}
      </div>
    </div>
  `;
};

export default {
  title: 'Components / Byline'
};
