import React from 'react';
import colors from 'colors.json';

const LEVEL_AA = 4.5;
const LEVEL_AA_LARGE = 3;
const LEVEL_AAA = 7;
const hex = color => {
  let temp = color.charAt(0) === '#' ? color.substring(1, 7) : color;

  if (temp.length === 3) {
    const c0 = temp.charAt(0);
    const c1 = temp.charAt(1);
    const c2 = temp.charAt(2);

    temp = [c0, c0, c1, c1, c2, c2].join('');
  }

  return temp;
};
const hex2rgb = color => {
  return {
    r: parseInt(color.substring(0, 2), 16),
    g: parseInt(color.substring(2, 4), 16),
    b: parseInt(color.substring(4, 6), 16)
  };
};
const luminance = color => {
  const rgb = hex2rgb(hex(color));
  /* eslint-disable */
  const a = [rgb.r, rgb.g, rgb.b].map(v => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  /* eslint-enable */

  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
};
const contrast = (color1, color2) => {
  const l1 = luminance(color1) + 0.05;
  const l2 = luminance(color2) + 0.05;
  return Math.max(l1, l2) / Math.min(l1, l2);
};
const initialCap = str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
const getColorList = data => {
  const list = [];

  data.map(item => {
    if (item.variants) {
      item.variants.map(variant => {
        list.push({
          name: `${initialCap(item.section)}
          ${initialCap(item.name)}
          ${initialCap(variant.name)}`,
          color: variant.color,
          var: `$color-${item.section}-${item.name}-${variant.name}`
        });
      });
    } else {
      list.push({
        name: `${initialCap(item.section)} ${initialCap(item.name)}`,
        color: item.color,
        var: `$color-${item.section}-${item.name}`
      });
    }
  });

  return list;
};
const allColors = getColorList(colors);
const systemColors = getColorList(
  colors.filter(item => {
    return item.section === 'system';
  })
);
const brandColors = getColorList(
  colors.filter(item => {
    return item.section === 'brand';
  })
);
const nameBlock = input =>
  input.name ? (
    <p>
      <strong>{input.name}</strong>
    </p>
  ) : null;
const varBlock = input =>
  input.var ? (
    <p>
      <code>{input.var}</code>
    </p>
  ) : null;
const hexBlock = input =>
  input.color ? (
    <p>
      <code>{input.color}</code>
    </p>
  ) : null;
const a11yBlock = ratio => {
  let a11y = [];

  if (ratio >= LEVEL_AA_LARGE) {
    a11y = ['AA Large'];
  }
  if (ratio >= LEVEL_AA) {
    a11y = ['AA', 'AAA Large'];
  }
  if (ratio >= LEVEL_AAA) {
    a11y = ['AAA'];
  }

  return a11y.map(item => (
    <span key={item} className="a11y-tag">
      {item}
    </span>
  ));
};

const swatch = (item, over) => {
  const ratio = over && contrast(item.color, over.color);

  if (over && ratio <= LEVEL_AA_LARGE) {
    return null;
  }

  if (over) {
    return (
      <div
        className="documentation-block documentation-color"
        style={{ background: item.color }}
      >
        <div className="text" style={{ color: over.color }}>
          <span>Aa</span>
        </div>
        <footer>
          {nameBlock(over)}
          {varBlock(over)}
          {hexBlock(over)}
          <div className="a11y-tag-container">{a11yBlock(ratio)}</div>
        </footer>
      </div>
    );
  }
  return (
    <div
      className="documentation-block documentation-color"
      style={{ background: item.color }}
    >
      <div className="color-block"></div>
      <footer>
        {nameBlock(item)}
        {varBlock(item)}
        {hexBlock(item)}
      </footer>
    </div>
  );
};
const swatchGrid = (item, list) => {
  return (
    <div key={item} className="documentation-grid--feature">
      {swatch(item)}
      <div className="documentation-grid">
        {list.map(color => swatch(item, color))}
      </div>
    </div>
  );
};
const genAllColors = list => {
  return (
    <div className="documentation-grid">{list.map(item => swatch(item))}</div>
  );
};
const genColorType = list => {
  return (
    <div className="documentation-grid--list">
      {list.map(item => swatchGrid(item, allColors))}
    </div>
  );
};

export const all = () => genAllColors(allColors);
export const brand = () => genColorType(brandColors);
export const system = () => genColorType(systemColors);
export default {
  title: 'Primitives / Colors'
};
