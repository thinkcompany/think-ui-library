export default class Nav {
  constructor() {
    this.$mobileMenuBtn;
    this.$mobileMenuTitle;
    this.$siteNav;
  }

  setupEventHandler() {
    const openNavText = 'Open Mobile Navigation';
    const closeNavText = 'Close Mobile Navigation';

    this.$mobileMenuBtn.addEventListener(
      'click',
      () => {
        const currentText = this.$mobileMenuTitle.textContent;

        this.$mobileMenuBtn.classList.toggle('tco-menu-site-nav--open');

        currentText === openNavText
          ? (this.$mobileMenuTitle.textContent = closeNavText)
          : (this.$mobileMenuTitle.textContent = openNavText);
      },
      false
    );
  }

  init() {
    document.addEventListener('DOMContentLoaded', () => {
      this.$mobileMenuBtn = document.querySelector('[data-mobile-menu-button]');
      this.$mobileMenuTitle = document.querySelector(
        '[data-mobile-menu-title]'
      );

      this.$siteNav = document.querySelector('.tco-menu-site-nav');

      this.setupEventHandler();
    });
  }
}
