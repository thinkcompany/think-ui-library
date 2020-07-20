const config = [
  {
    name: 'Card Container Flat',
    class: 'card-container--flat',
    sass: '@include card-container-flat'
  },
  {
    name: 'Card Container Shadow',
    class: 'card-container--shadow',
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
    <footer>
        ${nameBlock(input)}
        ${classBlock(input)}
        ${sassBlock(input)}
    </footer>
</div>
`;

export const all = () => wrapGrid(config.map(item => cardItem(item)).join(''));
export default {
  title: 'Primitives / Cards'
};
