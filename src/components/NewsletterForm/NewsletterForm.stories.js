const renderForm = () => `
<div class="gf_browser_chrome gform_wrapper newsletter-form_wrapper gform_legacy_markup_wrapper" id="gform_wrapper_21"><form method="post" enctype="multipart/form-data" id="gform_21" class="newsletter-form gform_legacy_markup" action="/events/">
                        <div class="gform_body gform-body"><ul id="gform_fields_21" class="gform_fields top_label form_sublabel_below description_below"><li id="field_21_1" class="gfield newsletter-field gfield_contains_required field_sublabel_below field_description_below gfield_visibility_visible"><label class="gfield_label" for="input_21_1">Your Email<span class="gfield_required"><span class="gfield_required gfield_required_asterisk">*</span></span></label><div class="ginput_container ginput_container_email">
                            <input name="input_1" id="input_21_1" type="text" value="" class="medium" tabindex="10111" placeholder="name@email.com" aria-required="true" aria-invalid="false">
                        </div></li><li id="field_21_2" class="gfield gform_validation_container field_sublabel_below field_description_below gfield_visibility_visible"><label class="gfield_label" for="input_21_2">Email</label><div class="ginput_container"><input name="input_2" id="input_21_2" type="text" value=""></div><div class="gfield_description" id="gfield_description_21_2">This field is for validation purposes and should be left unchanged.</div></li></ul></div>
        <div class="gform_footer top_label"> <input type="submit" id="gform_submit_button_21" class="gform_button button btn" value="Sign me up" tabindex="10112" onclick="if(window[&quot;gf_submitting_21&quot;]){return false;}  window[&quot;gf_submitting_21&quot;]=true;  " onkeypress="if( event.keyCode == 13 ){ if(window[&quot;gf_submitting_21&quot;]){return false;} window[&quot;gf_submitting_21&quot;]=true;  jQuery(&quot;#gform_21&quot;).trigger(&quot;submit&quot;,[true]); }">
            <input type="hidden" class="gform_hidden" name="is_submit_21" value="1">
            <input type="hidden" class="gform_hidden" name="gform_submit" value="21">

            <input type="hidden" class="gform_hidden" name="gform_unique_id" value="">
            <input type="hidden" class="gform_hidden" name="state_21" value="WyJbXSIsImVlNDAxYThjZWUzYTM0Y2UyNTJkMjdkMTZhYmI0NmU3Il0=">
            <input type="hidden" class="gform_hidden" name="gform_target_page_number_21" id="gform_target_page_number_21" value="0">
            <input type="hidden" class="gform_hidden" name="gform_source_page_number_21" id="gform_source_page_number_21" value="1">
            <input type="hidden" name="gform_field_values" value="">

        </div>
                        </form>
                        </div>
`;

export const NewsletterForm = () => {
  return `
  <div class="tco-newsletter-form tco-card-container--shadow">
    <div class="tco-newsletter-form-content-container">
      <div class="tco-newsletter-form-content">
        <h2 class="tco-type-display--small">Stay in the know</h2>
        <p class="tco-type-body--sans-small">Receive blog posts, useful tools, and company updates straight to your inbox.</p>
      </div>
      <div class="tco-doodle"></div>
    </div>
    <div class="tco-newsletter-form-container">
      ${renderForm()}
      <p class="tco-newsletter-form-disclaimer">We keep it brief, make it easy to unsubscribe, and never share your information.</p>
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
