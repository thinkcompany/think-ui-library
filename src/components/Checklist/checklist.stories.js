import { select, text, boolean } from '@storybook/addon-knobs';

const colors = {
  Default: '',
  Glass: 'tco-container-wrapper--glass'
};
const alignments = ['center', 'left', 'right'];

export const Default = () => {
  const containerColor = select('Background Color', colors, colors.Default);
  const eyebrow = text('Heading', 'How we can help');

  return `
  <div class="tco-container-wrapper ${containerColor}">
    <div class="tco-container tco-container--default">
      <div class="tco-checklist">
        ${
          eyebrow
            ? `
          <span class="tco-checklist-eyebrow">${eyebrow}</span>
          `
            : ''
        }
        <ul>
          <li>Launch a new product</li>
          <li>Transform an existing product</li>
          <li>Maintain and improve business systems</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae dui posuere, porta nunc lacinia, pharetra diam.</li>
        </ul>
      </div>
    </div>
  </div>`;
};

export default {
  title: 'Components / Checklist'
};
