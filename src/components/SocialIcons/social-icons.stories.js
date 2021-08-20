export const SocialIcons = () => {
  const iconSet = [];
  const icons = [
    {
      name: 'facebook',
      include: true
    },
    {
      name: 'twitter',
      include: true
    },
    {
      name: 'linkedin',
      include: true
    },
    {
      name: 'instagram',
      include: true
    }
  ];

  icons.forEach(item => {
    if (item.include) {
      iconSet.push(`
        <li>
          <a class="tco-social-icons-link" href="#" target="_blank" rel="noopener noreferrer">
            <svg class="tco-icon" title="${item.name}" viewBox="0 0 100 100">
              <use xlink:href="/img/icons.svg#icon-${item.name}"></use>
            </svg>
            <span class="tco-accessibly-hidden">${item.name}</span>
          </a>
        </li>
      `);
    }
  });

  return `
    <div class="tco-social-icons">
      <ul class="tco-social-icons-list">
        ${iconSet.join('')}
      </ul>
    </div>
  `;
};

export const SocialIconsSmall = () => {
  const iconSet = [];
  const icons = [
    {
      name: 'facebook',
      include: true
    },
    {
      name: 'twitter',
      include: true
    },
    {
      name: 'linkedin',
      include: true
    },
    {
      name: 'instagram',
      include: true
    }
  ];

  icons.forEach(item => {
    if (item.include) {
      iconSet.push(`
        <li>
          <a class="tco-social-icons-link" href="#" target="_blank" rel="noopener noreferrer">
            <svg class="tco-icon tco-icon--${item.name}" title="${item.name}" viewBox="0 0 100 100">
              <use xlink:href="/img/icons.svg#icon-${item.name}"></use>
            </svg>
            <span class="tco-accessibly-hidden">${item.name}</span>
          </a>
        </li>
      `);
    }
  });

  return `
    <div class="tco-social-icons tco-container-wrapper--navy">
      <ul class="tco-social-icons-list tco-social-icons-list--small">
        ${iconSet.join('')}
      </ul>
    </div>
  `;
};

export default {
  title: 'Components / Social Icons'
};
