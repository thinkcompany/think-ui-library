import { select } from '@storybook/addon-knobs';

const sizes = {
  Default: 'tco-container--default',
  Mid: 'tco-container--mid',
  Narrow: 'tco-container--narrow'
};

const colors = {
  Default: '',
  Tan: 'tco-container-wrapper--tan',
  Blue: 'tco-container-wrapper--blue',
  Navy: 'tco-container-wrapper--navy',
  Glass: 'tco-container-wrapper--glass'
};

export const Default = () => {
  const containerSize = select('Size', sizes, sizes.Default);
  const containerColor = select('State', colors, colors.Default);

  return `
  <div class="tco-container-wrapper ${containerColor}">
    <div class="tco-container ${containerSize}"> 
      <p>I'm accessible text!</p>
      <a href="#">I'm an accessible link!</a>
    </div>
  </div>`;
};

export const Mid = () => {
  const containerSize = select('Size', sizes, sizes.Mid);
  const containerColor = select('State', colors, colors.Navy);

  return `
  <div class="tco-container-wrapper ${containerColor}">
    <div class="tco-container ${containerSize}"> 
      <p>I'm accessible text!</p>
      <a href="#">I'm an accessible link!</a>
    </div>
  </div>`;
};

export const Narrow = () => {
  const containerSize = select('Size', sizes, sizes.Narrow);
  const containerColor = select('State', colors, colors.Navy);

  return `
  <div class="tco-container-wrapper ${containerColor}">
    <div class="tco-container ${containerSize}"> 
      <p>I'm accessible text!</p>
      <a href="#">I'm an accessible link!</a>
    </div>
  </div>`;
};

export const Tan = () => {
  const containerSize = select('Size', sizes, sizes.Default);
  const containerColor = select('State', colors, colors.Tan);

  return `
  <div class="tco-container-wrapper ${containerColor}">
    <div class="tco-container ${containerSize}"> 
      <p>I'm accessible text!</p>
      <a href="#">I'm an accessible link!</a>
    </div>
  </div>`;
};

export const Navy = () => {
  const containerSize = select('Size', sizes, sizes.Default);
  const containerColor = select('State', colors, colors.Navy);

  return `
  <div class="tco-container-wrapper ${containerColor}">
    <div class="tco-container ${containerSize}"> 
      <p>I'm accessible text!</p>
      <a href="#">I'm an accessible link!</a>
    </div>
  </div>`;
};

export const Blue = () => {
  const containerSize = select('Size', sizes, sizes.Default);
  const containerColor = select('State', colors, colors.Blue);

  return `
  <div class="tco-container-wrapper ${containerColor}">
    <div class="tco-container ${containerSize}"> 
      <p>I'm accessible text!</p>
      <a href="#">I'm an accessible link!</a>
    </div>
  </div>`;
};

export const WithComponent = () => {
  const containerSize = select('Size', sizes, sizes.Default);
  const containerColor = select('State', colors, colors.Tan);

  return `
  <div class="tco-container ${containerSize} ${containerColor}">
  <div class="tco-card tco-card--summary">
  <a href="#" class="tco-card-link">
    <div class="tco-card-image-container">
      <img class="tco-card-image" alt="Card image" src="https://3vwizk2qtr8l3diwrm3r2ba0-wpengine.netdna-ssl.com/wp-content/themes/tbiv3/img/svgs/services-full-experience-service.svg" />
    </div>
    <div class="tco-card-content-container">
      <h3 class="tco-card-content-heading">Heading!</h3>
      <p class="tco-card-content-description"> lorem ipsum text </p>
    </div>
  </a>
</div>
  </div>`;
};

export default {
  title: 'Components / Containers'
};
