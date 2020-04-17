'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./index-ad32ca8b.js');
const ionicGlobal = require('./ionic-global-0dc7ffc4.js');
require('./utils-99a927ad.js');
require('./helpers-f7a034d4.js');
const animation = require('./animation-05de5688.js');
const index$1 = require('./index-9d18c2c1.js');
const ios_transition = require('./ios.transition-e4e04d3b.js');
const md_transition = require('./md.transition-48228b1e.js');
const cubicBezier = require('./cubic-bezier-7fd071cd.js');
const index$2 = require('./index-a3a13ea1.js');
require('./hardware-back-button-9af398da.js');
const index$3 = require('./index-f3835a2d.js');
const overlays = require('./overlays-14910fc2.js');

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

exports.getPlatforms = ionicGlobal.getPlatforms;
exports.isPlatform = ionicGlobal.isPlatform;
exports.createAnimation = animation.createAnimation;
exports.LIFECYCLE_DID_ENTER = index$1.LIFECYCLE_DID_ENTER;
exports.LIFECYCLE_DID_LEAVE = index$1.LIFECYCLE_DID_LEAVE;
exports.LIFECYCLE_WILL_ENTER = index$1.LIFECYCLE_WILL_ENTER;
exports.LIFECYCLE_WILL_LEAVE = index$1.LIFECYCLE_WILL_LEAVE;
exports.LIFECYCLE_WILL_UNLOAD = index$1.LIFECYCLE_WILL_UNLOAD;
exports.iosTransitionAnimation = ios_transition.iosTransitionAnimation;
exports.mdTransitionAnimation = md_transition.mdTransitionAnimation;
exports.getTimeGivenProgression = cubicBezier.getTimeGivenProgression;
exports.createGesture = index$2.createGesture;
exports.menuController = index$3.menuController;
exports.actionSheetController = overlays.actionSheetController;
exports.alertController = overlays.alertController;
exports.loadingController = overlays.loadingController;
exports.modalController = overlays.modalController;
exports.pickerController = overlays.pickerController;
exports.popoverController = overlays.popoverController;
exports.toastController = overlays.toastController;
exports.getMode = getMode;
exports.setupConfig = setupConfig;
