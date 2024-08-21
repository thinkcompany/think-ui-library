const treatments = ['flat', 'shadow', 'none'];

const Template = args => {
  const {
    nameLabel,
    namePlaceholder,
    emailLabel,
    emailPlaceholder,
    companyLabel,
    companyPlaceholder,
    messageLabel,
    messagePlaceholder,
    timingLabel,
    timingPlaceholder,
    submitLabel,
    smallForm,
    treatment
  } = args;

  let formVersion = 'full';

  if (smallForm) {
    formVersion = 'small';
  }

  return `
  <div class="tco-container-wrapper">
    <div class="tco-container">
      <section class="tco-contact-form-container tco-card-container--${treatment}">
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
        </form>
        <footer class="tco-contact-form-footer">
          <p class="tco-contact-form-footer-text">By submitting this form, you're allowing us to store the information you submit.</p>
          <p class="tco-contact-form-footer-text">We promise we'll never, ever, ever share it though.</p>
          <p class="tco-contact-form-footer-text">Please read our <a href="#">Privacy Policy</a> to learn more.</p>
        </footer>
      </section>
    </div>
  </div>
  `;
};

export const ContactForm = Template.bind({});

export default {
  title: 'Components / Contact Form',
  args: {
    treatment: treatments[1],
    nameLabel: 'Your Name',
    namePlaceholder: 'Enter your first and last name',
    emailLabel: 'Your Email',
    emailPlaceholder: 'Enter your email address',
    companyLabel: 'Your Company',
    companyPlaceholder: "Enter your company's name",
    messageLabel: 'How can we help you?',
    messagePlaceholder: 'Starting a new project? Questions?',
    submitLabel: 'Send message',
    timingLabel: 'When would you like to get started?',
    timingPlaceholder: 'Enter a date or time frame',
    smallForm: false
  },
  argTypes: {
    treatment: {
      name: 'border treatment',
      control: 'inline-radio',
      options: treatments
    },
    nameLabel: {
      name: 'name label'
    },
    namePlaceholder: {
      name: 'name placeholder'
    },
    emailLabel: {
      name: 'email label'
    },
    emailPlaceholder: {
      name: 'email placeholder'
    },
    companyLabel: {
      name: 'company label'
    },
    companyPlaceholder: {
      name: 'company placeholder'
    },
    messageLabel: {
      name: 'message label'
    },
    messagePlaceholder: {
      name: 'message placeholder'
    },
    timingLabel: {
      name: 'timing label'
    },
    timingPlaceholder: {
      name: 'timing placeholder'
    },
    submitLabel: {
      name: 'submit label'
    },
    smallForm: {
      name: 'small version'
    }
  }
};
