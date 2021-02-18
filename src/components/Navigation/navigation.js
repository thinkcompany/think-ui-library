export default class Nav {
  constructor() {
    this.$mobileMenuBtn;
    this.$mobileMenuTitle;
    this.$siteNav;
    this.$logo;
  }

  setupEventHandler() {
    const openNavText = 'Open Mobile Navigation';
    const closeNavText = 'Close Mobile Navigation';

    this.$mobileMenuBtn.addEventListener(
      'click',
      () => {
        //const currentText = this.$mobileMenuTitle.textContent;
        this.$mobileMenuBtn.classList.toggle('tco-site-header-toggle--open');
        //  this.$siteNav.classList.toggle('tco-site-nav--open');
        //this.$logo.classList.toggle('tco-site-header-logo--open');
        console.log('heyo');

        // currentText === openNavText
        //   ? (this.$mobileMenuTitle.textContent = closeNavText)
        //   : (this.$mobileMenuTitle.textContent = openNavText);
      },
      false
    );

    console.log('test');
  }

  init() {
    document.addEventListener('DOMContentLoaded', () => {
      this.$mobileMenuBtn = document.querySelector('#menu-toggle');
      this.$logo = document.querySelector('.tco-site-header-logo');
      this.$mobileMenuTitle = document.querySelector(
        '[data-mobile-menu-title]'
      );

      this.$siteNav = document.querySelector('.tco-site-nav');

      if (this.$mobileMenuBtn) {
        this.setupEventHandler();
      }
    });
  }
}
