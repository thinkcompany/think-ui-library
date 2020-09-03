import { select, boolean, text, number } from '@storybook/addon-knobs';

const colors = {
  Default: '',
  Tan: 'tco-container-wrapper--tan',
  Blue: 'tco-container-wrapper--blue',
  Navy: 'tco-container-wrapper--navy',
  Glass: 'tco-container-wrapper--glass'
};

export const all = () => {
  const containerColor = select('Background Color', colors, colors.Default);
  const showImage = boolean('Show Image', false);
  const bylineName = text('Author Name', 'FirstName LastName');
  const bylineDesc = text('Byline Description', 'July 8, 2020');

  return `
<div class="tco-container-wrapper  ${containerColor} ">
<div class="tco-container">
  <div class="tco-byline">
    ${
      showImage
        ? `
    <div class="tco-byline-image">
      <img src="https://3vwizk2qtr8l3diwrm3r2ba0-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/AbbyDePrimo_Web.jpg" alt="FirstName LastName">
    </div>
    `
        : ``
    }
    <div class="tco-byline-text">
      <p class="tco-byline-name">${bylineName}</p>
      <p class="tco-byline-description">${bylineDesc}</p>
    </div>
  </div>
  </div>
  </div>
`;
};

export const withImage = () => {
  const containerColor = select('Background Color', colors, colors.Default);
  const bylineName = text('Author Name', 'FirstName LastName');
  const bylineDesc = text('Byline Description', 'July 8, 2020');

  return `
  <div class="tco-container-wrapper  ${containerColor}">
  <div class="tco-container">
  <div class="tco-byline">
      <div class="tco-byline-image">
        <img src="https://3vwizk2qtr8l3diwrm3r2ba0-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/AbbyDePrimo_Web.jpg" alt="${bylineName}">
      </div>
      <div class="tco-byline-text">
        <p class="tco-byline-name">${bylineName}</p>
        <p class="tco-byline-description">${bylineDesc}</p>
      </div>
    </div>
    </div>
  `;
};

export const withLink = () => {
  const containerColor = select('Background Color', colors, colors.Default);
  const bylineName = text('Author Name', 'FirstName LastName');
  const bylineDesc = text('Byline Description', 'July 8, 2020');

  return `
<div class="tco-container-wrapper  ${containerColor}">
<div class="tco-container">
<div class="tco-byline">
    <div class="tco-byline-text">
      <p class="tco-byline-name"> <a href="#">${bylineName}</a></p>
      <p class="tco-byline-description">${bylineDesc}</p>
    </div>
</div>
</div>
`;
};

export const multipleAuthors = () => {
  const containerColor = select('Background Color', colors, colors.Default);
  const bylineName = text('Author Name', 'FirstName LastName');
  const bylineDesc = text('Byline Description', 'July 8, 2020');
  const numberAuthors = number('Number of Authors', 5, { min: 1, max: 5 });

  const authorMarkup = () => {
    let authors = '';

    for (let n = 0; n < numberAuthors; n++) {
      authors += `<a href="#">${bylineName}</a>`;
      if (n !== numberAuthors - 1) {
        authors += `,   `;
      }
    }
    return authors;
  };

  return `
<div class="tco-container-wrapper  ${containerColor}">
<div class="tco-container">
<div class="tco-byline">
    <div class="tco-byline-text">
      <p class="tco-byline-name">
        ${authorMarkup()}
      </p>
      <p class="tco-byline-description">${bylineDesc}</p>
    </div>
</div>
</div>
`;
};

export const multipleBylines = () => {
  const containerColor = select('Background Color', colors, colors.Default);
  const bylineName = text('Author Name', 'FirstName LastName');
  const bylineDesc = text('Byline Description', 'July 8, 2020');
  const numberAuthors = number('Number of Authors', 5, { min: 1, max: 5 });
  const showImage = boolean('Show Image', false);

  const authorMarkup = () => {
    let authors = '';

    for (let n = 0; n < numberAuthors; n++) {
      authors += `<div class="tco-byline">
      ${
        showImage
          ? `
      <div class="tco-byline-image">
        <img src="https://3vwizk2qtr8l3diwrm3r2ba0-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/AbbyDePrimo_Web.jpg" alt="FirstName LastName">
      </div>
      `
          : ``
      }
    <div class="tco-byline-text">
      <p class="tco-byline-name">
        <a href="#">${bylineName}</a>
      </p>
      <p class="tco-byline-description">${bylineDesc}</p>
    </div>
    </div>`;
    }
    return authors;
  };

  return `
<div class="tco-container-wrapper  ${containerColor}">
<div class="tco-container">
<div class="tco-byline-grid">
${authorMarkup()}
</div>
</div>
</div>
`;
};

export default {
  title: 'Components / Byline',
  parameters: {
    options: {
      showPanel: false
    }
  }
};
