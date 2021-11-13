const appVariables = {
  bankNum: 0,
  powerOn: true,
  volume: null,
  setPower() {
    this.powerOn = !this.powerOn;
    if (!this.powerOn) {
      document.getElementById("display").innerHTML = `&nbsp`;
      this.setVolume(0.0);
    } else {
      this.setVolume(document.getElementById("volume-range").value);
    }
  },
  setBankNum() {
    this.bankNum = this.bankNum === 0 ? 1 : 0;
  },
  setVolume(newVolume) {
    this.volume = (newVolume * 1.0) / 100;
  },
};

appVariables["setPower"] = appVariables["setPower"].bind(appVariables);
appVariables["setBankNum"] = appVariables["setBankNum"].bind(appVariables);
appVariables["setVolume"] = appVariables["setVolume"].bind(appVariables);

export default appVariables;
