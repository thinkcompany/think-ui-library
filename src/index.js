// Import Styles
import './main.scss';

// Components for Site
import Nav from './components/Navigation/navigation';
import './components/Headline/headline.js';
import './components/TextCircle/text-circle.js';
import './components/TextHighlight/text-highlight.js';
import './components/TextUnderline/text-underline.js';
import './components/MotionCards/motion-cards.js';
import './components/TextInput/inputexpand.js';
import './components/Navigation/global-search.js';
import './components/Quote/quote-carousel.js';
import './components/Arrows/arrow.js';
import './components/Tabs/tabs.js';
import './components/Accordion/accordion.js';
import './components/ListImage/list-image-motion.js';

// Load Components
const nav = new Nav();

nav.init();
