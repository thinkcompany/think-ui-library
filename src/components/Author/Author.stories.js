import { boolean, text } from '@storybook/addon-knobs';
import { socialLinks } from '../SocialIcons/social-icons.stories';

export const Default = () => {
  const eyebrow = text('Eyebrow', 'Meet the Author');
  const authorName = text('Author name', 'Abby DePrimo');
  const authorTitle = text('Author title', 'Vice President, Design Operations');
  const authorImage = text(
    'Author image',
    'https://3vwizk2qtr8l3diwrm3r2ba0-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/AbbyDePrimo_Web.jpg'
  );
  const authorBio = text(
    'Author bio',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel fermentum orci. In commodo tellus eget risus condimentum cursus. Maecenas cursus, risus tristique dictum venenatis, lectus quam finibus est, sit amet feugiat lacus nibh in urna. Aliquam fringilla egestas augue, at dictum ex consequat et. Vestibulum ac imperdiet lectus. Integer rhoncus quis est a fringilla.'
  );
  const socialLabel = text('Social label', 'Say hello');
  const showSocial = boolean('Show social links', true);

  return `
  <div class="tco-container-wrapper">
	  <div class="tco-container">
      <div class="tco-text-media tco-text-media--align-right tco-author">
        <div class="tco-text-media-content tco-text-media-content-text">
          <span class="tco-author-eyebrow">${eyebrow}</span>
          <h2 class="tco-author-heading">${authorName}</h2>
          <p class="tco-author-title">${authorTitle}</p>
          <p class="tco-author-bio tco-type-body--default">${authorBio}</p>
          ${
            showSocial
              ? `<div class="tco-author-social">
                  <p class="tco-author-social-heading">${socialLabel}</p>
                  ${socialLinks()}
                </div>`
              : ''
          }
        </div>
        <div class="tco-text-media-content tco-text-media-content-media tco-author-container-media">
          <img class="tco-author-image" src="${authorImage}" alt="${authorName}" />
        </div>
      </div>
    </div>
  </div>
  `;
};

export default {
  title: 'Components / Author'
};
