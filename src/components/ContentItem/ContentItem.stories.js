import { select, text } from '@storybook/addon-knobs';

const contentItem = () => {
  const title = text('Title', 'Become a Digital Disruptor in a Changing World');
  const category = text('Category', 'Workshop');
  const excerpt = text(
    'Excerpt',
    'Learn more about best practices for achieving internal alignment and framing conversations for the best possible outcome.'
  );
  const imageSrc = text('Image Src', 'https://placekitten.com/800/400');

  return ` 
<article class="tco-content-item">
  <div class="tco-content-item-image">
    <img class="tco-card-image" alt="Card image" src="${imageSrc}" />
  </div>
  <header class="tco-layout-header">
    <div class="tco-content-item-meta">
        ${category}
    </div>
    <h3 class="tco-heading">
      <a href="#">
          ${title}
      </a>
    </h3>
  </header>
  <div class="tco-content-item-excerpt">
      ${excerpt}
  </div>
</article>`;
};

export { contentItem };

export default {
  title: 'Components / Content Item',
  parameters: {
    options: {
      showPanel: false
    }
  }
};
