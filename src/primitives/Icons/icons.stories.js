const config = [
  {
    name: 'Add',
    id: 'icon-add'
  },
  {
    name: 'Alert',
    id: 'icon-alert'
  },
  {
    name: 'Blog Post',
    id: 'icon-blog-post'
  },
  {
    name: 'Calendar',
    id: 'icon-calendar'
  },
  {
    name: 'Check',
    id: 'icon-check'
  },
  {
    name: 'Chevron Down',
    id: 'icon-chevron-down'
  },
  {
    name: 'Chevron Left',
    id: 'icon-chevron-left'
  },
  {
    name: 'Chevron Right',
    id: 'icon-chevron-right'
  },
  {
    name: 'Chevron Up',
    id: 'icon-chevron-up'
  },
  {
    name: 'Clock',
    id: 'icon-clock'
  },
  {
    name: 'Close',
    id: 'icon-close'
  },
  {
    name: 'Error',
    id: 'icon-error'
  },
  {
    name: 'Facebook',
    id: 'icon-facebook'
  },
  {
    name: 'File',
    id: 'icon-file'
  },
  {
    name: 'Instagram',
    id: 'icon-instagram'
  },
  {
    name: 'LinkedIn',
    id: 'icon-linkedin'
  },
  {
    name: 'Minus',
    id: 'icon-minus'
  },
  {
    name: 'Search',
    id: 'icon-search'
  },
  {
    name: 'Success',
    id: 'icon-success'
  },
  {
    name: 'Trash',
    id: 'icon-trash'
  },
  {
    name: 'Twitter',
    id: 'icon-twitter'
  },
  {
    name: 'Warning',
    id: 'icon-warning'
  },
  {
    name: 'Webinars',
    id: 'icon-webinars'
  },
  {
    name: 'Workshops',
    id: 'icon-workshops'
  },
  {
    name: 'Youtube',
    id: 'icon-youtube'
  }
];

const icons = list => {
  let response = '<div class="documentation-grid">';

  list.map(item => {
    const url = `/img/icons.svg#${item.id}`;

    response += `
    <div class="documentation-spacing--internal documentation-block documentation-grid--item">
    <div class="icon-block">
        <span style="padding:4px">
            <span class="tco-accessibly-hidden">${item.name}</span>
            <svg class="tco-icon" width="16" height="16" viewBox="0 0 16 16" >
                <use xlink:href="${url}"></use>
            </svg>
        </span>
    </div>
    <footer>
      <p><code>${item.id}</code></p>
    </footer>
    </div>`;
  });

  response += '</div>';

  return response;
};

export const all = () => icons(config);
export default {
  title: 'Primitives / Icons'
};
