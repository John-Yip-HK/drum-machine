import appVariables from "./variables";

const audioMap = (function init() {
  const map = new Map();

  const audioLinksOne = [
    {
      name: "Heater 1",
      link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      name: "Heater 2",
      link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      name: "Heater 3",
      link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      name: "Heater 4",
      link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      name: "Clap",
      link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      name: "Open HH",
      link: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      name: "Kick n' Hat",
      link: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      name: "Kick",
      link: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      name: "Closed HH",
      link: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ];
  const audioLinksTwo = [
    {
      name: "Chord 1",
      link: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
    },
    {
      name: "Chord 2",
      link: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
    },
    {
      name: "Chord 3",
      link: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
    },
    {
      name: "Shaker",
      link: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
    },
    {
      name: "Open HH",
      link: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
    },
    {
      name: "Closed HH",
      link: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
    },
    {
      name: "Punchy Kick",
      link: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
    },
    {
      name: "Side Stick",
      link: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
    },
    {
      name: "Snare",
      link: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
    },
  ];
  const keys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

  keys.forEach((key, id) =>
    map.set(key, [audioLinksOne[id], audioLinksTwo[id]])
  );

  return map;
})();

function Channel(audio_url, audio_volume) {
  this.audio_url = audio_url;
  this.resource = new Audio(audio_url);
  this.resource.volume = audio_volume;
}

Channel.prototype.play = function () {
  this.resource.play();
};

function Switcher(audio_url, audio_volume, num) {
  this.channels = [];
  this.num = num;
  this.index = 0;

  for (let i = 0; i < num; ++i)
    this.channels.push(new Channel(audio_url, audio_volume));
}

Switcher.prototype.play = function () {
  this.channels[this.index++].play();
  this.index = this.index < this.num ? this.index : 0;
};

function findAudioToPlay(key) {
  const display = document.getElementById("display");

  for (let keypad of document.querySelectorAll(".drum-pad")) {
    if (keypad.innerHTML === key) {
      keypad.style.backgroundColor = "#123456";

      const audioObject = audioMap.get(key)[appVariables.bankNum];
      display.innerHTML = audioObject.name;
      new Switcher(audioObject.link, appVariables.volume, 1).play();
    }
  }
}

function tapAndPlay(event) {
  if (appVariables.powerOn) findAudioToPlay(event.key.toUpperCase());
}

function clickAndPlay(event) {
  if (appVariables.powerOn) findAudioToPlay(event.target.innerHTML);
}

function keypadReset() {
  for (let keypad of document.querySelectorAll(".drum-pad"))
    keypad.style.backgroundColor = "#495057";
}

export {
  tapAndPlay as keydownHandler,
  keypadReset as pointerupHandler,
  clickAndPlay as pointerdownHandler,
};
