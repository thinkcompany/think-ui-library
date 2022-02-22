document.addEventListener('DOMContentLoaded', () => {
  const searchOpen = document.querySelector('#search-open');
  const searchClose = document.querySelector('#search-close');
  const globalSearch = document.querySelector('.tco-global-search');

  searchOpen.addEventListener('click', () => {
    globalSearch.classList.add('tco-global-search--open');
    searchOpen.classList.add('tco-site-header-toggle--search-hide');
  });

  searchClose.addEventListener('click', () => {
    globalSearch.classList.remove('tco-global-search--open');
    searchOpen.classList.remove('tco-site-header-toggle--search-hide');
  });
});
