import navMarkup from './navigation.html';

export const Header = () => `
<div class="sb-page">
<style>
  .sb-page {
    background-color: #fff;
    height: 1000px;
  }
  .tco-lights-out .sb-page {
    background-color: #23272A;
  }
</style>
${navMarkup}
</div>`;

Header.parameters = {
  controls: { hideNoControlsWarning: true }
};

export default {
  title: 'Global / Header'
};
