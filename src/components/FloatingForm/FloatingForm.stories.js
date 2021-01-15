import { boolean, text } from '@storybook/addon-knobs';

import chatIcon from 'assets/svg/floating-form-chat.svg';
import closeIcon from 'assets/svg/floating-form-close.svg';

export const floatingButton = () => {
  const contactLabel = text('Contact label', '');
  const showClose = boolean('Show close', false);
  const closeClass = showClose ? 'tco-floating-form-btn--close' : '';

  return `
  <button class="tco-floating-btn ${closeClass} tco-btn">
    <span class="tco-floating-btn-icon tco-floating-btn-icon--chat">
      <img class="tco-floating-btn-icon-img" src="${chatIcon}" alt="Open contact form" />
      <span class="tco-accessibly-hidden">Open contact form</span>
    </span>
    <span class="tco-floating-btn-icon tco-floating-btn-icon--close">
      <img class="tco-floating-btn-icon-img" src="${closeIcon}" alt="Close contact form" />
      <span class="tco-accessibly-hidden">Close contact form</span>
    </span>
    <span class="tco-floating-btn-label">${contactLabel}</span>
  </button>
`;
};

export const floatingForm = () => {
  return `
  <div class="tco-floating-modal tco-floating-modal--show">
    <div class="tco-floating-modal-wrapper">
      <div id="tco-floating-modal-focus-top" tabindex="0"></div>
      <section class="tco-floating-modal-body">
        <header class="tco-floating-modal-header">
          <h2 class="tco-type-display--small">We Can Help</h2>
          <p class="tco-type-body">Ask us about our services or a related topic and a Thinker will respond shortly.</p>
        </header>
        <form class="tco-floating-form">
          <div class="tco-form-row">
            <label for="contact-email" class="tco-form-label">
              Your Email*
            </label>
            <input
              type="text"
              class="tco-form-input tco-form-input--medium"
              id="contact-email"
              name="contact-email"
            />
          </div>
          <div class="tco-form-row">
            <label for="contact-message" class="tco-form-label">
              Message
            </label>
            <textarea
              class="tco-form-textarea"
              id="contact-message"
              name="contact-message"
            ></textarea>
            <p class="tco-type-body">*Required</p>
          </div>
          <button type="submit" class="tco-btn tco-btn--secondary">
            Let's talk
          </button>
        </form>
        <button class="tco-btn tco-btn-link">No, thanks</button>
        <footer class="tco-floating-modal-footer">
          <p class="tco-type-body--small">By submitting this form, you're allowing us to store the information you submit.
            Please read our <a target="_blank" href="/privacy-policy">Privacy Policy</a> to learn more.</p>
        </footer>
      </section>
      <button class="tco-floating-btn tco-floating-form-btn--close tco-btn">
        <span class="tco-floating-btn-icon tco-floating-btn-icon--chat">
          <img class="tco-floating-btn-icon-img" src="${chatIcon}" alt="Open contact form" />
        </span>
        <span class="tco-floating-btn-icon tco-floating-btn-icon--close">
          <img class="tco-floating-btn-icon-img" src="${closeIcon}" alt="Close contact form" />
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
