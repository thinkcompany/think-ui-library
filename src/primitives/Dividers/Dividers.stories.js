const config = [
  {
    name: 'Horizontal',
    class: 'tco-divider--horizontal',
    sass: '@include divider-horizontal'
  }
];

const wrapGrid = input => `<div class="documentation-grid--list">${input}</div>`;
const blockStyles = input => (input.name === 'Vertical' ? 'style="height: 200px;"' : '');
const nameBlock = input => (input.name ? `<p><strong>${input.name}</strong></p>` : '');
const classBlock = input => (input.class ? `<p><code>.${input.class}</code></p>` : '');
const sassBlock = input => (input.sass ? `<p><code>${input.sass}</code></p>` : '');
const cardItem = input => `
  <div class="documentation-grid--item documentation-block documentation-card">
      <div class="card-block"${blockStyles(input)}>
          <hr class="${input.class}" />
      </div>
      <footer>
          ${nameBlock(input)}
          ${classBlock(input)}
          ${sassBlock(input)}
      </footer>
  </div>
  `;

export const Dividers = () => wrapGrid(config.map(item => cardItem(item)).join(''));

Dividers.parameters = {
  controls: { hideNoControlsWarning: true }
};

export default {
  title: 'Primitives / Dividers'
};
