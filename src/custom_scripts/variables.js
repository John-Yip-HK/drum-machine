import { stopAudio } from "./keypadHandlers";

const appVariables = {
  bankNum: 0,
  powerOn: true,
  volume: null,
  playingSwitcher: [],
  setPower() {
    this.powerOn = !this.powerOn;
    if (!this.powerOn) {
      document.getElementById("display-content").innerHTML = `&nbsp`;
      this.setVolume(0.0);
    } else {
      this.setVolume(document.getElementById("volume-range").value);
    }
  },
  setBankNum() {
    this.bankNum = this.bankNum === 0 ? 1 : 0;
    document.getElementById("display-content").innerHTML =
      this.bankNum === 0 ? "Heater Kit" : "Piano Kit";
    stopAudio();
  },
  setVolume(newVolume) {
    this.volume = (newVolume * 1.0) / 100;
  },
};

const objToStr = {}.toString;

for (let varName in appVariables) {
  if (objToStr.call(appVariables[varName]).includes("Function"))
    appVariables[varName] = appVariables[varName].bind(appVariables);
}

export default appVariables;
