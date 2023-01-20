// Import Styles
import './main.scss';
import './components/TextInput/inputexpand.js';
import './components/Navigation/global-search.js';
import './components/Tabs/tabs.js';
import './components/MotionCards/motion-cards.js';

import './components/Quote/quote-carousel.js';

import './components/TextCircle/text-circle.js';
import './components/TextUnderline/text-underline.js';

// Components for Site
import Nav from './components/Navigation/navigation';

// Load Components
const nav = new Nav();

nav.init();
