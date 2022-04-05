const BylineTemplate = args => {
  const { name, image, date, title } = args;

  return `
    <div class="tco-container-wrapper">
      <div class="tco-container">
        <div class="tco-byline tco-byline--single tco-byline--l">
          <div class="tco-byline-image-container tco-byline-image-container--l">
            <img src="${image}" alt="${name}">
          </div>
          <div class="tco-byline-content-container">
            <p class="tco-byline-name"><a href="#">By ${name}</a></p>
            <p class="tco-byline-description">${title}</p>
            <p class="tco-byline-description">${date}</p>
          </div>
        </div>
      </div>
    </div>
  `;
};

export const Byline = BylineTemplate.bind({});

Byline.args = {
  date: 'May 21, 2020',
  title: 'Principal Experience Designer'
};

const MultipleTemplate = args => {
  const { name, image } = args;

  return `
  <div class="tco-container-wrapper">
    <div class="tco-container">
      <div class="tco-byline tco-byline--multiple">
        <div class="tco-byline-images">
          <div class="tco-byline-image-container">
            <img src="${image}" alt="${name}">
          </div>
          <div class="tco-byline-image-container">
            <img src="${image}" alt="${name}">
          </div>
          <div class="tco-byline-image-container">
            <img src="${image}" alt="${name}">
          </div>
          <div class="tco-byline-image-container">
            <img src="${image}" alt="${name}">
          </div>
        </div>
        <div class="tco-byline-content-container tco-byline-content-container--multiple">
          <p class="tco-type-body--sans-small">By <a href="#" class="tco-byline-link--multiple">${name}</a>, <a href="#" class="tco-byline-link--multiple">${name}</a>, <a href="#" class="tco-byline-link--multiple">${name}</a>, and <a href="#" class="tco-byline-link--multiple">${name}</a></p>
        </div>
      </div>
    </div>
  </div>
  `;
};

export const BylineMultiple = MultipleTemplate.bind({});

export default {
  title: 'Components / Byline',
  parameters: {
    component: Byline,
    componentSubtitle:
      'The Byline component is used for author attribution on blog posts.',
    docs: {
      description: {
        component:
          "When a blog post has > 1 author, the <a href='#byline-multiple'>Byline Multiple</a> component is used. This component is programmatically added to blog posts, and is not available as a standalone component in the CMS."
      }
    }
  },
  args: {
    name: 'Keith Rich',
    image:
      'https://thinkcompany.com/wp-content/uploads/2018/05/KeithRich_Web.jpg'
  },
  argTypes: {
    name: {
      description: 'Author attribution with link to Thinker profile page'
    },
    image: {
      description: '1:1 ratio. Displays at 66 x 66px. Upload @1.5x = 99 x 99px'
    },
    date: {
      description: 'Post published/updated date'
    },
    title: {
      description: 'Thinker job title'
    }
  }
};
