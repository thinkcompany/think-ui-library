const config = [
  {
    name: 'Card Container Flat',
    class: 'tco-card-container--flat',
    sass: '@include card-base'
  },
  {
    name: 'Card Container Shadow',
    class: 'tco-card-container--shadow',
    sass: '@include card-container-shadow'
  }
];

const wrapGrid = input =>
  `<div class="documentation-grid documentation-grid--large">${input}</div>`;
const nameBlock = input =>
  input.name ? `<p><strong>${input.name}</strong></p>` : '';
const classBlock = input =>
  input.class ? `<p><code>.${input.class}</code></p>` : '';
const sassBlock = input =>
  input.sass ? `<p><code>${input.sass}</code></p>` : '';
const cardItem = input => `
<div class="documentation-grid--item documentation-block documentation-card">
    <div class="card-block">
        <div class="${input.class}">
            <div class="content"></div>
        </div>
    </div>
    <div>
        ${nameBlock(input)}
        ${classBlock(input)}
        ${sassBlock(input)}
    </div>
</div>
`;

export const Cards = () =>
  wrapGrid(config.map(item => cardItem(item)).join(''));

Cards.parameters = {
  controls: { hideNoControlsWarning: true }
};

export default {
  title: 'Primitives / Cards'
};
