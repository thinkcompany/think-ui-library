import { text } from '@storybook/addon-knobs';

export const Default = () => {
  const heading = text('Heading', 'Design and Development');
  const content = text(
    'Lede',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae dui posuere, porta nunc lacinia, pharetra diam. Maecenas dapibus orci vitae accumsan lacinia. Praesent dapibus ac leo ut aliquam. Praesent commodo hendrerit est.'
  );

  return `
  <div class="tco-container-wrapper">
    <div class="tco-container tco-container--default">
      <div class="tco-split-heading-text">
        <div class="tco-split-heading-text-container tco-split-heading-text-container--heading">
          <h1 class="tco-type-eyebrow">${heading}</h1>
        </div>
        <div class="tco-split-heading-text-container tco-split-heading-text-container--content">
          <p>${content}</p>
          <p>${content}</p>
        </div>
      </div>
    </div>
  </div>`;
};

export default {
  title: 'Components / Split Heading Text'
};
