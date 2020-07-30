class Nav {
  constructor() {
    this.$mobileMenuBtn;
    this.$mobileMenuTitle;
    this.$siteNav;
    this.$body;
  }

  setupEventHandler() {
    const openNavText = 'Open Mobile Navigation';
    const closeNavText = 'Close Mobile Navigation';

    this.$mobileMenuBtn[0].addEventListener(
      'click',
      () => {
        const currentText = this.$mobileMenuTitle[0].textContent;

        this.$mobileMenuBtn[0].classList.toggle('menu-site-nav--open');

        currentText === openNavText
          ? (this.$mobileMenuTitle[0].textContent = closeNavText)
          : (this.$mobileMenuTitle[0].textContent = openNavText);
      },
      false
    );
  }

  init() {
    document.addEventListener('DOMContentLoaded', () => {
      this.$mobileMenuBtn = document.querySelectorAll(
        '[data-mobile-menu-button]'
      );
      this.$mobileMenuTitle = document.querySelectorAll(
        '[data-mobile-menu-title]'
      );

      this.$siteNav = document.querySelectorAll('.menu-site-nav');

      this.$body = document.getElementsByTagName('body');

      this.setupEventHandler();
    });
  }
}

export { Nav };
