const Template = args => {
  const { category, categoryLabel, shareLabel } = args;

  return `
    <div class="tco-post-info">
    <div class="tco-post-info-category">
      <span class="tco-type-eyebrow">${categoryLabel}</span>
      <a href="#" class="tco-post-info-category-link">${category}</a>
    </div>
    <div class="tco-post-info-share">
      <span class="tco-type-eyebrow">${shareLabel}</span>
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
          <span class="tco-accessibly-hidden">X</span>
            <svg class="tco-icon" role="presentation" width="16" height="16" viewBox="0 0 16 16">
              <use xlink:href="img/icons.svg#icon-X"></use>
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

export const PostInfo = Template.bind({});

export default {
  title: 'Components / Post Info',
  args: {
    category: 'Research',
    categoryLabel: 'Filed Under',
    shareLabel: 'Share this post'
  },
  argTypes: {
    categoryLabel: {
      name: 'category label'
    },
    shareLabel: {
      name: 'share label'
    }
  }
};
