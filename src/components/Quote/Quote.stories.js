import { text } from '@storybook/addon-knobs';

export const Default = () => {
  const quote = text(
    'Quote',
    'Think Company has been the design bedrock of this project—developing the structure, look, and feel of the application. Think’s vision and ability to turn requirements into reality really set our project off on the right foot.'
  );
  const authorName = text('Author name', 'Name Lastname');
  const authorTitle = text('Author title', 'Title');

  return `
  <div class="tco-container-wrapper">
    <div class="tco-container tco-container--mid"> 
      <div class="tco-quote-wrapper">
        <blockquote class="tco-quote">
          <p class="tco-quote-text">${quote}</p>
          <footer class="tco-quote-footer">
            <cite class="tco-quote-author-name">${authorName}</cite>
            <span class="tco-quote-author-title">${authorTitle}</span>
          </footer>
        </blockquote>
      </div>
    </div>
  </div>
  `;
};

export const Multiple = () => {
  const quote = text(
    'Quote',
    'Think Company has been the design bedrock of this project—developing the structure, look, and feel of the application. Think’s vision and ability to turn requirements into reality really set our project off on the right foot.'
  );
  const authorName = text('Author name', 'Name Lastname');
  const authorTitle = text('Author title', 'Title');

  return `
  <div class="tco-container-wrapper">
    <div class="tco-container tco-container--mid"> 
      <div class="tco-quote-wrapper">
        <blockquote class="tco-quote">
          <p class="tco-quote-text">${quote}</p>
          <footer class="tco-quote-footer">
            <cite class="tco-quote-author-name">${authorName}</cite>
            <span class="tco-quote-author-title">${authorTitle}</span>
          </footer>
        </blockquote>
      </div>
      <div class="tco-quote-wrapper">
        <blockquote class="tco-quote">
          <p class="tco-quote-text">${quote}</p>
          <footer class="tco-quote-footer">
            <cite class="tco-quote-author-name">${authorName}</cite>
            <span class="tco-quote-author-title">${authorTitle}</span>
          </footer>
        </blockquote>
      </div>
    </div>
  </div>
  `;
};

export const WithThinker = () => {
  const quote = text(
    'Quote',
    'I love helping to cultivate a culture that sets people up to succeed, gives people the space to work through challenges, and values the diverse perspectives everyone brings to the work.'
  );
  const authorName = text('Author name', 'Neha Agarwal');
  const authorTitle = text('Author title', 'Design Lead');
  const authorImage = text(
    'Author image',
    'https://thinkcompany.com/wp-content/uploads/2016/09/NehaAgarwal.jpg'
  );

  return `
  <div class="tco-container-wrapper">
    <div class="tco-container tco-container--mid"> 
      <div class="tco-quote-wrapper">
        <blockquote class="tco-quote">
          <p class="tco-quote-text">${quote}</p>
          <footer class="tco-quote-footer">
            <cite class="tco-quote-author-name"><a href="#">${authorName}</a></cite>
            <span class="tco-quote-author-title">${authorTitle}</span>
          </footer>
        </blockquote>
        <div class="tco-quote-image-wrapper">
          <img class="tco-quote-image" alt="Author image" src="${authorImage}" />
        </div>
      </div>
    </div>
  </div>
  `;
};

export default {
  title: 'Components / Quote'
};
