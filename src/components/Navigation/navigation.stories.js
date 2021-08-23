import navMarkup from './navigation.html';

export const Header = () => `
<div style="background-color: #fff; height: 1000px;">
${navMarkup}
</div>`;

Header.parameters = {
  controls: { hideNoControlsWarning: true }
};

export default {
  title: 'Global / Header'
};
