'use strict';

const Homey = require('homey');

module.exports = class EspressifApp extends Homey.App {

  /**
   * onInit is called when the app is initialized.
   */
  async onInit() {
    this.log('Espressif ZigBee has been initialized');
  }

};
