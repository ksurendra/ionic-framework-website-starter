import './index-2cd7e630.js';
export { g as getPlatforms, i as isPlatform } from './ionic-global-a175fa73.js';
import './utils-35117408.js';
import './helpers-d8b49b57.js';
export { c as createAnimation } from './animation-f72ade61.js';
export { a as LIFECYCLE_DID_ENTER, c as LIFECYCLE_DID_LEAVE, L as LIFECYCLE_WILL_ENTER, b as LIFECYCLE_WILL_LEAVE, d as LIFECYCLE_WILL_UNLOAD } from './index-157155ee.js';
export { iosTransitionAnimation } from './ios.transition-11c6a0fa.js';
export { mdTransitionAnimation } from './md.transition-3e9127c1.js';
export { g as getTimeGivenProgression } from './cubic-bezier-685f606a.js';
export { createGesture } from './index-e44ebcc6.js';
import './hardware-back-button-784b7e3c.js';
export { m as menuController } from './index-9af8638a.js';
export { b as actionSheetController, a as alertController, l as loadingController, m as modalController, p as pickerController, c as popoverController, t as toastController } from './overlays-998692a2.js';

const setupConfig = (config) => {
    const win = window;
    const Ionic = win.Ionic;
    if (Ionic && Ionic.config && Ionic.config.constructor.name !== 'Object') {
        console.error('ionic config was already initialized');
        return;
    }
    win.Ionic = win.Ionic || {};
    win.Ionic.config = Object.assign(Object.assign({}, win.Ionic.config), config);
    return win.Ionic.config;
};
const getMode = () => {
    const win = window;
    const config = win && win.Ionic && win.Ionic.config;
    if (config) {
        if (config.mode) {
            return config.mode;
        }
        else {
            return config.get('mode');
        }
    }
    return 'md';
};

export { getMode, setupConfig };
