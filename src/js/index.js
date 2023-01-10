import showPass from "./show-pass";
import fancybox from "./fancybox";
import rangeSlider from './range-slider';
import theme from './theme';
import inputmask from "./inputmask";
import scrollTo from "./scrollTo";
import tab from 'npm-kit-tab';
import toggle from 'npm-kit-toggle';
import ripple from 'npm-kit-ripple';
import mobileMenu from './mobile-menu';
import scrollHeader from './scroll-header';
import outNumber from './out-number';
import filter from './filter';
import search from './search';
import copyLink from './copy-link';
import Swiper, { Navigation, Pagination, Scrollbar, Autoplay, Grid, Thumbs, EffectFade, Lazy } from 'swiper';

import '../scss/index.scss';

Swiper.use([Navigation, Pagination, Scrollbar, Autoplay, Grid, Thumbs, EffectFade, Lazy]);
Swiper.defaults.touchStartPreventDefault = false
window.Swiper = Swiper
window.ripple = ripple
window.addEventListener('DOMContentLoaded', () => loadHandler())

function loadHandler() {
	fancybox.init()
	showPass.init()
	scrollTo.init()
	rangeSlider.init()
	tab.init()
	toggle.init()
	ripple.init()
	theme.init()
	inputmask.init(document)

	ripple.attach('.btn')
	ripple.attach('.waved')
	ripple.deAttach('.btn--link')

	mobileMenu.init()
	scrollHeader.init()
	outNumber.init()
	filter.init()
	search.init()
	copyLink.init()

}