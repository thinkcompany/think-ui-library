const renderForm = () => `
  <div class="hbspt-form" id="hbspt-form-1644601504797-6313753982"><form novalidate="" accept-charset="UTF-8" action="https://forms.hsforms.com/submissions/v3/public/submit/formsnext/multipart/20557547/6374fe45-06cf-46bb-9633-6d6870bbd098" enctype="multipart/form-data" id="hsForm_6374fe45-06cf-46bb-9633-6d6870bbd098" method="POST" class="hs-form stacked hs-form-private hsForm_6374fe45-06cf-46bb-9633-6d6870bbd098 hs-form-6374fe45-06cf-46bb-9633-6d6870bbd098 hs-form-6374fe45-06cf-46bb-9633-6d6870bbd098_724d27b5-e7d5-4455-8d5d-b6404d35cb1f" data-form-id="6374fe45-06cf-46bb-9633-6d6870bbd098" data-portal-id="20557547" target="target_iframe_6374fe45-06cf-46bb-9633-6d6870bbd098" data-reactid=".hbspt-forms-0" data-hs-cf-bound="true"><div class="hs_email hs-email hs-fieldtype-text field hs-form-field" data-reactid=".hbspt-forms-0.1:$0"><label id="label-email-6374fe45-06cf-46bb-9633-6d6870bbd098" class="" placeholder="Enter your Email" for="email-6374fe45-06cf-46bb-9633-6d6870bbd098" data-reactid=".hbspt-forms-0.1:$0.0"><span data-reactid=".hbspt-forms-0.1:$0.0.0">Email</span><span class="hs-form-required" data-reactid=".hbspt-forms-0.1:$0.0.1">*</span></label><legend class="hs-field-desc" style="display:none;" data-reactid=".hbspt-forms-0.1:$0.1"></legend><div class="input" data-reactid=".hbspt-forms-0.1:$0.$email"><input id="email-6374fe45-06cf-46bb-9633-6d6870bbd098" class="hs-input" type="email" name="email" required="" placeholder="name@email.com" value="" autocomplete="email" data-reactid=".hbspt-forms-0.1:$0.$email.0" inputmode="email"></div></div><noscript data-reactid=".hbspt-forms-0.2"></noscript><div class="hs_submit hs-submit" data-reactid=".hbspt-forms-0.5"><div class="hs-field-desc" style="display:none;" data-reactid=".hbspt-forms-0.5.0"></div><div class="actions" data-reactid=".hbspt-forms-0.5.1"><input type="submit" value="Subscribe" class="hs-button primary large" data-reactid=".hbspt-forms-0.5.1.0"></div></div><noscript data-reactid=".hbspt-forms-0.6"></noscript><input name="hs_context" type="hidden" value="{&quot;rumScriptExecuteTime&quot;:1583.3999999761581,&quot;rumServiceResponseTime&quot;:2382.099999964237,&quot;rumFormRenderTime&quot;:2.600000023841858,&quot;rumTotalRenderTime&quot;:2385.800000011921,&quot;rumTotalRequestTime&quot;:751.1999999880791,&quot;lang&quot;:&quot;en&quot;,&quot;embedType&quot;:&quot;REGULAR&quot;,&quot;renderRawHtml&quot;:&quot;true&quot;,&quot;embedAtTimestamp&quot;:&quot;1644601505170&quot;,&quot;formDefinitionUpdatedAt&quot;:&quot;1643325885919&quot;,&quot;pageUrl&quot;:&quot;https://www.thinkcompany.com/events/&quot;,&quot;pageTitle&quot;:&quot;Events and Webinars - Design | Think Company&quot;,&quot;source&quot;:&quot;FormsNext-static-5.450&quot;,&quot;sourceName&quot;:&quot;FormsNext&quot;,&quot;sourceVersion&quot;:&quot;5.450&quot;,&quot;sourceVersionMajor&quot;:&quot;5&quot;,&quot;sourceVersionMinor&quot;:&quot;450&quot;,&quot;timestamp&quot;:1644601505170,&quot;userAgent&quot;:&quot;Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36&quot;,&quot;originalEmbedContext&quot;:{&quot;region&quot;:&quot;na1&quot;,&quot;portalId&quot;:&quot;20557547&quot;,&quot;formId&quot;:&quot;6374fe45-06cf-46bb-9633-6d6870bbd098&quot;,&quot;target&quot;:&quot;#hbspt-form-1644601504797-6313753982&quot;,&quot;hutk&quot;:&quot;e38fe4838f3c231ca8f76fe244b5351c&quot;},&quot;formValidity&quot;:{&quot;email&quot;:{&quot;valid&quot;:true}},&quot;renderedFieldsIds&quot;:[&quot;email&quot;],&quot;formTarget&quot;:&quot;#hbspt-form-1644601504797-6313753982&quot;,&quot;correlationId&quot;:&quot;14701a77-52b1-48c3-8791-2c3af8e681dc&quot;,&quot;contentType&quot;:&quot;standard-page&quot;,&quot;hutk&quot;:&quot;e38fe4838f3c231ca8f76fe244b5351c&quot;,&quot;captchaStatus&quot;:&quot;NOT_APPLICABLE&quot;}" data-reactid=".hbspt-forms-0.7"><iframe name="target_iframe_6374fe45-06cf-46bb-9633-6d6870bbd098" style="display:none;" data-reactid=".hbspt-forms-0.8"></iframe></form></div>
`;

export const NewsletterForm = () => {
  return `
  <div class="tco-container-wrapper">
    <div class="tco-container tco-container--default">
      <div class="tco-newsletter-form tco-card-container--shadow">
        <div class="tco-newsletter-form-content-container">
          <h2 class="tco-type-display--small">Stay in the know</h2>
            <p class="tco-type-body--sans-small">Receive blog posts, useful tools, and company updates straight to your inbox.</p>
        </div>
        <div class="tco-newsletter-form-container tco-form--hubspot">
          ${renderForm()}
          <p class="tco-newsletter-form-disclaimer">We keep it brief, make it easy to unsubscribe, and never share your information.</p>
          <p class="tco-newsletter-form-disclaimer">This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" target="_blank" >Privacy Policy</a> and <a href="https://policies.google.com/terms" target="_blank">Terms of Service</a> apply.</p>
        </div>
      </div>
    </div>
  </div>
  `;
};

NewsletterForm.parameters = {
  controls: { hideNoControlsWarning: true }
};

export default {
  title: 'Components / Newsletter Form'
};
