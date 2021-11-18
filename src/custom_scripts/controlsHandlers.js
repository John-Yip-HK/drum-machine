import appVariables from "./variables";

function updateDisplayWhenVolumeChanges() {
  if (appVariables.powerOn) {
    setTimeout(
      () => (document.getElementById("display-content").innerHTML = `&nbsp`),
      300
    );
  }
}

export { updateDisplayWhenVolumeChanges as updateDisplay };
