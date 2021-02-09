import { text } from '@storybook/addon-knobs';

import thinkBubble from 'assets/img/think-bubble-white.svg';

export const floatingButton = () => {
  const contactLabel = text('Contact label', '');

  return `
  <button class="tco-floating-btn tco-btn">
    <span class="tco-floating-btn-icon tco-floating-btn-icon--chat">
    <svg class="tco-icon" width="16" height="16" viewBox="0 0 16 16">
      <title>Chat</title>
      <use xlink:href="/img/icons.svg#icon-chat"></use>
    </svg>
    <span class="tco-accessibly-hidden">Open contact form</span>
    </span>
    <span class="tco-floating-btn-icon tco-floating-btn-icon--close">
      <svg class="tco-icon" width="16" height="16" viewBox="0 0 16 16">
        <title>Close</title>
        <use xlink:href="/img/icons.svg#icon-chevron-down"></use>
      </svg>
      <span class="tco-accessibly-hidden">Close contact form</span>
    </span>
    <span class="tco-floating-btn-label">${contactLabel}</span>
  </button>
`;
};

export const floatingForm = () => {
  const intro = text(
    'Intro',
    'Ask us about our services or a related topic and a Thinker will respond shortly.'
  );
  const emailLabel = text('Email label', 'Your Email*');
  const emailPlaceholder = text(
    'Email placeholder',
    'Enter your email address'
  );
  const messageLabel = text('Message label', 'Your Message*');
  const messagePlaceholder = text(
    'Message placeholder',
    'Is a hotdog a sandwich?'
  );
  const submitLabel = text('Submit label', 'Send message');
  const disclaimer = text(
    'Disclaimer',
    'By submitting this form, you’re allowing us to store the information you submit. We promise we’ll never, ever, ever share it though.'
  );

  return `
  <div class="tco-floating-modal tco-floating-modal--show">
    <div class="tco-floating-modal-wrapper">
      <div id="tco-floating-modal-focus-top" tabindex="0"></div>
      <section class="tco-floating-modal-body">
        <header class="tco-floating-modal-header">
          <button class="tco-floating-form-btn--close tco-btn" type="button">
          <svg class="tco-icon" width="16" height="16" viewBox="0 0 16 16">
            <title>Close</title>
            <use xlink:href="/img/icons.svg#icon-close"></use>
          </svg>
          </button>
          <img class="tco-floating-logo-img" src="${thinkBubble}" alt="Close contact form" />
          <h2 class="tco-type-cursive--large">Hi there!</h2>
          <p class="tco-type-body">${intro}</p>
        </header>
        <form class="tco-floating-form">
          <div class="tco-form-row">
            <label for="contact-email" class="tco-form-label">
              ${emailLabel}
            </label>
            <input
              type="text"
              class="tco-form-input tco-form-input--medium"
              id="contact-email"
              name="contact-email"
              placeholder="${emailPlaceholder}"
            />
          </div>
          <div class="tco-form-row">
            <label for="contact-message" class="tco-form-label">
              ${messageLabel}
            </label>
            <textarea
              class="tco-form-textarea"
              id="contact-message"
              name="contact-message"
              placeholder="${messagePlaceholder}"
              rows="1"
            ></textarea>
            <p class="tco-type-body--sans-small">*Required</p>
          </div>
          <button type="submit" class="tco-btn tco-btn--primary">
            ${submitLabel}
          </button>
          <footer class="tco-floating-form-footer">
            <p class="tco-type-body--sans-small">${disclaimer} Please read our <a href="#">Privacy Policy</a> to learn more.</p>
          </footer>
        </form>
      </section>
      <button class="tco-floating-btn tco-floating-form-btn--collapse tco-btn">
        <span class="tco-floating-btn-icon tco-floating-btn-icon--chat">
        <svg class="tco-icon" width="16" height="16" viewBox="0 0 16 16">
            <title>Chat</title>
            <use xlink:href="/img/icons.svg#icon-chat"></use>
          </svg>
        </span>
        <span class="tco-floating-btn-icon tco-floating-btn-icon--close">
          <svg class="tco-icon" width="16" height="16" viewBox="0 0 16 16">
            <title>Close</title>
            <use xlink:href="/img/icons.svg#icon-chevron-down"></use>
          </svg>
        </span>
        <span class="tco-floating-btn-label"></span>
      </button>
      <div id="tco-floating-modal-focus-bottom" tabindex="0"></div>
    </div>
  </div>
  `;
};
export default {
  title: 'Components / Floating Form'
};
