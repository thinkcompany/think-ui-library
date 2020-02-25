import React from 'react';

const config = [
  {
    name: 'Body Type Style',
    class: '',
    sass: '@include type-style-body',
    textLength: 8
  },
  {
    name: 'Type Style 1',
    class: 'type-style-1',
    sass: '@include type-style-1',
    textLength: 4
  }
];

const genText = length => {
  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac pharetra velit. Suspendisse dictum consequat ornare. Nullam efficitur pharetra est quis ornare. Nunc a dignissim odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius leo vitae dui pellentesque, et rhoncus turpis feugiat. Curabitur interdum ipsum in nulla scelerisque, eget ullamcorper massa pharetra. Nam sed odio in magna placerat eleifend in vitae dui. Suspendisse potenti. Donec ac cursus velit, quis rhoncus nunc. Curabitur ante leo, faucibus in luctus ullamcorper, pretium ut neque. Sed dignissim magna ut pulvinar consectetur. Proin ullamcorper ante aliquam purus aliquam pulvinar. Sed laoreet aliquet massa ac imperdiet. Sed pellentesque leo vitae risus facilisis, id eleifend dui dapibus. Etiam rhoncus euismod ex sit amet laoreet. Sed mollis placerat eros, vel consequat dui elementum a. Nam accumsan vitae lectus a tempus. Nunc non finibus quam. Sed convallis urna sed hendrerit tempor. Aenean euismod, diam in ornare imperdiet, eros purus ornare lectus, quis porttitor nulla mauris in est. Nullam consectetur vel velit ut ornare. Donec cursus viverra diam, vel bibendum metus. Nunc ipsum enim, commodo ac consectetur eget, rhoncus ut lectus. Fusce aliquet cursus faucibus. Suspendisse semper laoreet est, at mollis felis vehicula sed. Quisque in justo at nibh facilisis finibus eget non risus. Pellentesque vitae leo at risus sodales iaculis in nec urna. Nam at magna nec orci placerat suscipit ut quis justo. Maecenas posuere suscipit dapibus. Donec ac felis viverra, finibus velit sit amet, pulvinar ligula. Sed dictum odio sed hendrerit feugiat. Praesent euismod urna eget rutrum semper. Curabitur est lacus, suscipit vitae vestibulum at, volutpat ut leo. Etiam fermentum mi in tellus aliquet, vitae porttitor nibh tristique. Nam vehicula ligula sit amet diam pellentesque, et efficitur dolor pulvinar. Nullam tempor libero a eros lacinia hendrerit. Duis eu blandit nisl. Etiam ipsum turpis, interdum at dolor quis, tempus fermentum magna. Pellentesque maximus in arcu eget aliquam. Vivamus a quam tortor. In varius augue non ipsum interdum egestas. Nunc mollis nisi nunc, sit amet porttitor urna iaculis quis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin sit amet scelerisque magna. Etiam eleifend libero scelerisque velit lobortis dignissim. Nunc nec ligula at lorem vehicula maximus. Fusce scelerisque consequat ligula, sit amet pellentesque sapien lacinia quis. Pellentesque euismod, orci nec consequat dignissim, arcu augue accumsan lectus, in vestibulum elit nisi ultrices purus. Fusce in est molestie, varius augue a, aliquam felis. Vestibulum sit amet sapien id turpis sagittis hendrerit. Maecenas eget velit sit amet velit dapibus facilisis. Mauris convallis enim sit amet leo cursus porttitor. Sed risus erat, tristique sit amet elit quis, suscipit auctor sem. Praesent cursus est id nisi egestas malesuada. Donec at neque porttitor, auctor neque id, ullamcorper enim. Aliquam fringilla justo a orci commodo pharetra. Morbi elit tellus, venenatis eu facilisis ac, commodo id magna. Nunc diam odio, consequat tempus elementum commodo, facilisis laoreet nisi. Donec erat mauris, sodales a condimentum a, mattis at enim. Nam libero lectus, pharetra ac elementum eget, rutrum nec sem.`.split(
    '. '
  );

  return `${text.slice(0, length).join('. ')}.`;
};
const wrapGrid = input => (
  <div className="documentation-grid--list">{input}</div>
);
const nameBlock = input =>
  input.name ? (
    <p>
      <strong>{input.name}</strong>
    </p>
  ) : null;
const classBlock = input =>
  input.class ? (
    <p>
      <code>.{input.class}</code>
    </p>
  ) : null;
const sassBlock = input =>
  input.sass ? (
    <p>
      <code>{input.sass}</code>
    </p>
  ) : null;
const typeItem = (input, demoLength) => (
  <div
    key={input.name}
    className="documentation-block documentation-typography"
  >
    <div className="type-block">
      <p className={input.class}>{genText(input.textLength)}</p>
    </div>
    <div className="type-block type-block--demo">
      <div>
        <p>{genText(demoLength)}</p>
        <p className={input.class}>${genText(input.textLength)}</p>
        <p>{genText(demoLength)}</p>
      </div>
    </div>
    <footer>
      {nameBlock(input)}
      {classBlock(input)}
      {sassBlock(input)}
    </footer>
  </div>
);
export const all = () => wrapGrid(config.map(item => typeItem(item, 8)));
export default {
  title: 'Primitives / Typography'
};
