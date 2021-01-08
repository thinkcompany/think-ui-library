import { text } from '@storybook/addon-knobs';

export const Default = () => {
  const categoryLabel = text('Category label', 'Filed Under:');
  const category = text('Post category', 'Research');
  const shareLabel = text('Share label', 'Share this post:');

  return `
  <div class="tco-post-info">
  <div class="tco-post-info-category">
    <span class="tco-post-info-category-label">${categoryLabel}</span>
    <a href="#" class="tco-post-info-category-link">${category}</a>
  </div>
  <div class="tco-post-info-share">
    <span class="tco-post-info-share-label">${shareLabel}</span>
    <ul class="tco-post-info-share-list">
      <li>
        <a href="#">
        <span class="tco-accessibly-hidden">Facebook</span>
          <svg class="tco-icon" role="presentation" width="16" height="16" viewBox="0 0 16 16">
            <use xlink:href="img/icons.svg#icon-facebook"></use>
          </svg>
        </a>
      </li>
      <li>
        <a href="#">
        <span class="tco-accessibly-hidden">Twitter</span>
          <svg class="tco-icon" role="presentation" width="16" height="16" viewBox="0 0 16 16">
            <use xlink:href="img/icons.svg#icon-twitter"></use>
          </svg>
        </a>
      </li>
      <li>
        <a href="#">
          <span class="tco-accessibly-hidden">LinkedIn</span>
          <svg class="tco-icon" role="presentation" width="16" height="16" viewBox="0 0 16 16">
            <use xlink:href="img/icons.svg#icon-linkedin"></use>
          </svg>
        </a>
      </li>
    </ul>
  </div>
</div>
  `;
};

export default {
  title: 'Components / Post Info'
};
