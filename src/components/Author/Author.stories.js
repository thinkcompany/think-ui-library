import { boolean, text } from '@storybook/addon-knobs';
import { socialLinks } from '../SocialIcons/social-icons.stories';

export const Default = () => {
  const heading = text('Heading', 'Meet the Author');
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
  const socialLabel = text('Social label', 'Connect with Abby');
  const showSocial = boolean('Show social links', true);

  return `
  <div class="tco-container-wrapper tco-author">
	  <div class="tco-container tco-container--default">
      <div class="tco-author-heading">
        <span class="tco-type-display--medium">${heading}</span>
      </div>
      <div class="tco-author-info ${
        authorImage ? 'tco-author-info--with-image' : ''
      }">
        ${
          authorImage
            ? `<div class="tco-author-contact">
          <img src="${authorImage}" alt="${authorName}">
          ${
            showSocial
              ? `<div class="tco-author-social">
          <p class="tco-author-social-heading">${socialLabel}</p>
          ${socialLinks()}
        </div>`
              : ''
          }
        </div>`
            : ''
        }
        <div class="tco-author-body">
					<div class="tco-author-body-name">
						<span class="tco-type-display--small">${authorName}</span>
						<p>${authorTitle}</p>
					</div>
					<div class="tco-author-body-description">
						<p>${authorBio}</p>
					</div>
        </div>
      </div>
    </div>
  </div>
  `;
};

export default {
  title: 'Components / Author'
};
