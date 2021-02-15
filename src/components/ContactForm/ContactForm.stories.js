import { text } from '@storybook/addon-knobs';

export const contactForm = () => {
  const nameLabel = text('Name label', 'Your Name*');
  const namePlaceholder = text(
    'Name placeholder',
    'Enter your first and last name'
  );
  const emailLabel = text('Email label', 'Your Email*');
  const emailPlaceholder = text(
    'Email placeholder',
    'Enter your email address'
  );
  const companyLabel = text('Email label', 'Your Email*');
  const companyPlaceholder = text(
    'Company placeholder',
    "Enter your company's name"
  );
  const messageLabel = text('Message label', 'What do you have in mind?*');
  const messagePlaceholder = text(
    'Message placeholder',
    'Next gen blockchain cloud-based AI chatbot'
  );
  const timingLabel = text(
    'Timing label',
    'When would you like to get started?*'
  );
  const timingPlaceholder = text(
    'Timing placeholder',
    'Enter a date or timeframe'
  );
  const submitLabel = text('Submit label', 'Send message');
  const disclaimer = text(
    'Disclaimer',
    'By submitting this form, you’re allowing us to store the information you submit. We promise we’ll never, ever, ever share it though.'
  );

  return `
      <section class="tco-contact-form-container">
        <form class="tco-contact-form">
          <div class="tco-form-row">
            <label for="contact-name" class="tco-form-label">
              ${nameLabel}
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
            <div class="tco-form-row--split-group">
              <label for="contact-company" class="tco-form-label">
                ${companyLabel}
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
              ${messageLabel}
            </label>
            <textarea
              class="tco-form-textarea"
              id="contact-message"
              name="contact-message"
              placeholder="${messagePlaceholder}"
              rows="1"
            ></textarea>
          </div>
          <div class="tco-form-row">
            <label for="contact-timing" class="tco-form-label">
              ${timingLabel}
            </label>
            <input
              class="tco-form-input tco-form-input--medium"
              id="contact-timing"
              name="contact-timing"
              placeholder="${timingPlaceholder}"
            />
          </div>
          <div class="tco-form-row tco-form-row--button">
            <button type="submit" class="tco-btn tco-btn--primary">
              ${submitLabel}
            </button>
          </div>
          <footer class="tco-contact-form-footer">
            <p class="tco-type-body--sans-small">${disclaimer}</p>
            <p class="tco-type-body--sans-small">Please read our <a href="#">Privacy Policy</a> to learn more.</p>
          </footer>
        </form>
      </section>
  `;
};
export default {
  title: 'Components / Contact Form'
};
