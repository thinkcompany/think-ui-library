/**
 * Concatonates a directory of individual SVGs into a single SVG sheet
 * For recommended SVG usage see the docs
 */
/* eslint-disable no-sync */

const fs = require('fs-extra');
const path = require('path');
const SVGSpriter = require('svg-sprite');
const cwd = process.cwd();

/**
 * configure options for svg-sprite
 * see the svg-sprite docs for details
 * https://github.com/jkphl/svg-sprite/blob/master/docs/configuration.md
 */
const config = {
    dest: './src/assets/img/',
    shape: { // SVG shape related options
        id: { // SVG shape ID related options
            separator: '-', // Separator for directory name traversal
            generator: name => `icon-${path.parse(name).name}`, // SVG shape ID generator callback
            // pseudo: '~' // File name separator for shape states (e.g. ':hover')/
        },
        dimension: {// Dimension related options
            maxWidth: 2000, // Max. shape width
            maxHeight: 2000, // Max. shape height
            precision: 2, // Floating point precision
            attributes: false, // Width and height attributes on embedded shapes
        },
        spacing: { // Spacing related options
            padding: 0, // Padding around all shapes
            box: 'content' // Padding strategy (similar to CSS `box-sizing`)
        }
    },
    variables: {},
    mode: {
        symbol: {
            sprite: 'icons.svg',
            dest: ''
        },
    }
};

const configLogos = {
    dest: './src/assets/img/',
    shape: { // SVG shape related options
        id: { // SVG shape ID related options
            separator: '-', // Separator for directory name traversal
            generator: name => `icon-${path.parse(name).name}`, // SVG shape ID generator callback
            // pseudo: '~' // File name separator for shape states (e.g. ':hover')/
        },
        dimension: {// Dimension related options
            maxWidth: 2000, // Max. shape width
            maxHeight: 2000, // Max. shape height
            precision: 2, // Floating point precision
            attributes: false, // Width and height attributes on embedded shapes
        },
        spacing: { // Spacing related options
            padding: 0, // Padding around all shapes
            box: 'content' // Padding strategy (similar to CSS `box-sizing`)
        }
    },
    variables: {},
    mode: {
        symbol: {
            sprite: 'logos.svg',
            dest: ''
        },
    }
};

// instantiate svg-sprite
const spriter = new SVGSpriter(config);
const logoSprite = new SVGSpriter(configLogos);

const svgList = fs.readdirSync(`${cwd}/src/assets/svg/`);
const logoList = fs.readdirSync(`${cwd}/src/assets/img/logos/`);

// Add SVG source files
svgList.forEach(svg => {
    const dir = `${cwd}/src/assets/svg/${svg}`;

    spriter.add(dir, null, fs.readFileSync(dir, {encoding: 'utf-8'}));
});

logoList.forEach(svg => {
    const dir = `${cwd}/src/assets/img/logos/${svg}`;

    logoSprite.add(dir, null, fs.readFileSync(dir, {encoding: 'utf-8'}));
});

// Compile the sprite
spriter.compile((error, result) => {
    const { path, contents } = result.symbol.sprite; // eslint-disable-line no-shadow

    fs.writeFileSync(path, contents);
});

logoSprite.compile((error, result) => {
    const { path, contents } = result.symbol.sprite; // eslint-disable-line no-shadow

    fs.writeFileSync(path, contents);
});
