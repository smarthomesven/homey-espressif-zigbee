const { ZigBeeDevice } = require("homey-zigbeedriver");

class Device extends ZigBeeDevice {
  async onNodeInit({ zclNode }) {
  }
}

module.exports = Device;