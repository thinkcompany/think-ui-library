import { text, boolean } from '@storybook/addon-knobs';

export const contactForm = () => {
  const nameLabel = text('Name label', 'Your Name');
  const namePlaceholder = text(
    'Name placeholder',
    'Enter your first and last name'
  );
  const emailLabel = text('Email label', 'Your Email');
  const emailPlaceholder = text(
    'Email placeholder',
    'Enter your email address'
  );
  const companyLabel = text('Email label', 'Your Company');
  const companyPlaceholder = text(
    'Company placeholder',
    "Enter your company's name"
  );
  const messageLabel = text('Message label', 'What do you have in mind?');
  const messagePlaceholder = text('Message placeholder', 'Bitcoin server farm');
  const timingLabel = text(
    'Timing label',
    'When would you like to get started?'
  );
  const timingPlaceholder = text(
    'Timing placeholder',
    'Enter a date or timeframe'
  );
  const submitLabel = text('Submit label', 'Send message');
  const smallForm = boolean('Smaller version?', false);
  const formVersion = smallForm ? 'small' : 'full';

  return `
      <section class="tco-contact-form-container">
        <form class="tco-contact-form tco-contact-form--${formVersion}">
          <div class="tco-form-row">
            <label for="contact-name" class="tco-form-label">
              ${nameLabel}<span class="tco-field-required">*</span>
            </label>
            <input
              type="text"
              class="tco-form-input tco-form-input--medium"
              id="contact-name"
              name="contact-name"
              placeholder="${namePlaceholder}"
            />
          </div>
          <div class="tco-form-row tco-form-row--split">
            <div class="tco-form-row--split-group">
              <label for="contact-email" class="tco-form-label">
                ${emailLabel}<span class="tco-field-required">*</span>
              </label>
              <input
                type="text"
                class="tco-form-input tco-form-input--medium"
                id="contact-email"
                name="contact-email"
                placeholder="${emailPlaceholder}"
              />
            </div>
            <div class="tco-form-row--split-group">
              <label for="contact-company" class="tco-form-label">
                ${companyLabel}<span class="tco-field-required">*</span>
              </label>
              <input
                type="text"
                class="tco-form-input tco-form-input--medium"
                id="contact-company"
                name="contact-company"
                placeholder="${companyPlaceholder}"
              />
            </div>
          </div>
          <div class="tco-form-row">
            <label for="contact-message" class="tco-form-label">
              ${messageLabel}<span class="tco-field-required">*</span>
            </label>
            <textarea
              class="tco-form-textarea"
              id="contact-message"
              name="contact-message"
              placeholder="${messagePlaceholder}"
              rows="1"
            ></textarea>
          </div>
          ${
            smallForm
              ? ''
              : `
            <div class="tco-form-row">
              <label for="contact-timing" class="tco-form-label">
                ${timingLabel}<span class="tco-field-required">*</span>
              </label>
              <input
                class="tco-form-input tco-form-input--medium"
                id="contact-timing"
                name="contact-timing"
                placeholder="${timingPlaceholder}"
              />
            </div>
          `
          }
          <div class="tco-form-row tco-form-row--button">
            <button type="submit" class="tco-btn tco-btn--primary">
              ${submitLabel}
            </button>
          </div>
          <footer class="tco-contact-form-footer">
            <p class="tco-contact-form-footer-text">By submitting this form, you’re allowing us to store the information you submit.</p>
            <p class="tco-contact-form-footer-text">We promise we’ll never, ever, ever share it though.</p>
            <p class="tco-contact-form-footer-text">Please read our <a href="#">Privacy Policy</a> to learn more.</p>
          </footer>
        </form>
      </section>
  `;
};

export const WithColumns = () => {
  return `
    <div class="tco-container-wrapper">
      <div class="tco-container">
        <div class="tco-columns tco-columns">
          <div class="tco-column tco-column--50-50"></div>
          <div class="tco-column tco-column--50-50">${contactForm()}</div>
        </div>
      </div>
    </div>
  `;
};

export default {
  title: 'Components / Contact Form'
};
