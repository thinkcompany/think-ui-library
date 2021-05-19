export default class Nav {
  constructor() {
    this.$mobileMenuBtn;
    this.$siteNav;
    this.$logo;
    this.$body;
    this.$wrapper;
    this.$container;
    this.$menu;
  }

  menuLocation() {
    const vw = this.$body.clientWidth;
    const container = this.$container;

    const menu = this.$menu;

    if (vw < 1280) {
      container.prepend(menu);
    }
  }

  setupEventHandler() {
    const wrapper = this.$wrapper;
    const container = this.$container;
    const menu = this.$menu;
    const menuClone = menu.cloneNode(true);

    let menuOpen = false;

    menuClone.classList.add('tco-site-nav-menu--primary-clone');
    menuClone.setAttribute('tabindex', '-1');
    wrapper.before(menuClone);

    this.$mobileMenuBtn.addEventListener(
      'click',
      () => {
        menuOpen = !menuOpen;
        this.$body.classList.toggle('tco-body--freeze');
        this.$mobileMenuBtn.classList.toggle('tco-site-header-toggle--open');
        this.$siteNav.classList.toggle('tco-site-nav--open');
        this.$logo.classList.toggle('tco-site-header-logo--open');

        if (menuOpen === true) {
          container.prepend(menu);
        } else {
          wrapper.before(menu);
        }
      },
      false
    );
  }

  init() {
    document.addEventListener('DOMContentLoaded', () => {
      this.$body = document.body;
      this.$mobileMenuBtn = document.querySelector('#menu-toggle');
      this.$logo = document.querySelector('.tco-site-header-logo');
      this.$siteNav = document.querySelector('.tco-site-nav');
      this.$wrapper = document.querySelector('.tco-site-nav-wrapper');
      this.$container = document.querySelector('.tco-site-nav-container');
      this.$menu = document.querySelector('.tco-site-nav-menu--primary');

      if (this.$mobileMenuBtn) {
        this.setupEventHandler();
        this.menuLocation();
      }
    });
  }
}
