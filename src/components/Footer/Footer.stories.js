const footer = () => {
  return `
    <div class="tco-site-footer">
        
      <div class="tco-site-footer-content">
        <p>Give us a call at <a class="tco-btn-link tco-btn-link--on-tint" href="tel:+18002969190">800.296.9190</a> or <a class="tco-btn-link tco-btn-link--on-tint" href="#">send us a message.</a></p>
        <p>Visit us in <a class="tco-btn-link tco-btn-link--on-tint" href="#">Philadelphia, Conshohocken, or Denver.</a></p>
        <p>Sign up for our <a class="tco-btn-link tco-btn-link--on-tint" href="#">quarterly email newsletter.</a></p>
      </div>
      
      <div class="tco-site-footer-social">  
        <a class="tco-site-footer-social-icon" href="#">
          <span class="tco-accessibly-hidden">facebook</span>
          <svg class="tco-icon" width="16" height="16" viewBox="0 0 16 16" >
              <use xlink:href="/img/icons.svg#icon-facebook"></use>
          </svg>
        </a>
          
        <a class="tco-site-footer-social-icon" href="#">
          <span class="tco-accessibly-hidden">twitter</span>
          <svg class="tco-icon" width="16" height="16" viewBox="0 0 16 16" >
              <use xlink:href="/img/icons.svg#icon-twitter"></use>
          </svg>
        </a>
        
        <a class="tco-site-footer-social-icon" href="#">
          <span class="tco-accessibly-hidden">linkedin</span>
          <svg class="tco-icon" width="16" height="16" viewBox="0 0 16 16" >
            <use xlink:href="/img/icons.svg#icon-linkedin"></use>
          </svg>
        </a>
        
        <a class="tco-site-footer-social-icon" href="#">
          <span class="tco-accessibly-hidden">instagram</span>
          <svg class="tco-icon" width="16" height="16" viewBox="0 0 16 16" >
            <use xlink:href="/img/icons.svg#icon-instagram"></use>
          </svg>
        </a>
      
        <a class="tco-site-footer-social-icon" href="#">
          <span class="tco-accessibly-hidden">youtube</span>
          <svg class="tco-icon" width="16" height="16" viewBox="0 0 16 16" >
              <use xlink:href="/img/icons.svg#icon-youtube"></use>
          </svg>
        </a>
      </div>
      
      <div class="tco-site-footer-divider"><hr /></div>
      
      <div class="tco-site-footer-copyright">
        <p>&copy; 2020 Think Company, Inc. All rights reserved.</p>
        <p><a class="tco-btn-link tco-btn-link--on-tint" href="#"> Privacy Policy.</a></p>
      </div>
    </div>
  `;
};

export { footer };

export default {
  title: 'Navigation / Global'
};
