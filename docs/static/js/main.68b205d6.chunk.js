(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],{26:function(e,n,t){},31:function(e,n,t){},32:function(e,n,t){"use strict";t.r(n);var a=t(1),c=t.n(a),r=t(20),o=t.n(r),s=(t(26),t(34)),i=t(33),m=t(21),d=t(0),u=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(i.a,{children:Object(d.jsx)(m.a,{id:"display",children:Object(d.jsx)("h3",{children:Object(d.jsx)("span",{id:"display-content",children:"\xa0"})})})})})},l=t(10),h=t(11),p=t(13),j=t(12),f=t(18),b={bankNum:0,powerOn:!0,volume:null,playingSwitcher:[],setPower:function(){this.powerOn=!this.powerOn,this.powerOn?this.setVolume(document.getElementById("volume-range").value):(document.getElementById("display-content").innerHTML="&nbsp",this.setVolume(0))},setBankNum:function(){this.bankNum=0===this.bankNum?1:0,document.getElementById("display-content").innerHTML=0===this.bankNum?"Heater Kit":"Piano Kit",E()},setVolume:function(e){this.volume=1*e/100}},w={}.toString;for(var O in b)w.call(b[O]).includes("Function")&&(b[O]=b[O].bind(b));var v=b,k=function(){var e=new Map;function n(e,n){this.audio_url=e,this.resource=new Audio(e),this.resource.volume=n}function t(e,t,a){this.channels=[],this.num=a,this.index=0;for(var c=0;c<a;++c)this.channels.push(new n(e,t))}n.prototype.play=function(){this.resource.play()},t.prototype.play=function(e){this.channels.forEach((function(n){return n.resource.volume=e})),this.channels[this.index++].play(),this.index=this.index<this.num?this.index:0},t.prototype.stop=function(){this.channels.forEach((function(e){e.resource.pause(),e.resource.currentTime=0}))};var a=[{name:"Heater 1",link:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{name:"Heater 2",link:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{name:"Heater 3",link:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{name:"Heater 4",link:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{name:"Clap",link:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{name:"Open HH",link:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{name:"Kick n' Hat",link:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{name:"Kick",link:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{name:"Closed HH",link:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}],c=[{name:"Chord 1",link:"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"},{name:"Chord 2",link:"https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"},{name:"Chord 3",link:"https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"},{name:"Shaker",link:"https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"},{name:"Open HH",link:"https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"},{name:"Closed HH",link:"https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"},{name:"Punchy Kick",link:"https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"},{name:"Side Stick",link:"https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"},{name:"Snare",link:"https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"}];return["Q","W","E","A","S","D","Z","X","C"].forEach((function(n,r){var o=[a[r],c[r]];o.forEach((function(e){return e.switcher=new t(e.link,v.volume,e.link.includes("Chord")?5:10)})),e.set(n,o)})),e}();function y(e){var n,t=document.getElementById("display-content"),a=Object(f.a)(document.querySelectorAll(".drum-pad"));try{for(a.s();!(n=a.n()).done;){var c=n.value;if(c.innerHTML===e){c.style.backgroundColor="#123456";var r=k.get(e)[v.bankNum],o=r.switcher.channels[0].resource.duration;t.innerHTML=r.name,v.playingSwitcher.push(r.switcher),r.switcher.play(v.volume),setTimeout((function(){return v.playingSwitcher.shift()}),1e4*o);break}}}catch(s){a.e(s)}finally{a.f()}}function g(e){v.powerOn&&y(e.key.toUpperCase())}function x(e){v.powerOn&&y(e.target.innerHTML)}function H(){var e,n=Object(f.a)(document.querySelectorAll(".drum-pad"));try{for(n.s();!(e=n.n()).done;){e.value.style.backgroundColor="#495057"}}catch(t){n.e(t)}finally{n.f()}}function E(){v.playingSwitcher.forEach((function(e){return e.stop()})),v.playingSwitcher=[]}var C=function(e){Object(p.a)(t,e);var n=Object(j.a)(t);function t(){return Object(l.a)(this,t),n.apply(this,arguments)}return Object(h.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",g),document.addEventListener("keyup",H),document.addEventListener("pointerdown",x),document.addEventListener("pointerup",H)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",g),document.removeEventListener("keyup",H),document.removeEventListener("pointerdown",x),document.removeEventListener("pointerup",H)}},{key:"render",value:function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)(i.a,{children:[Object(d.jsx)(m.a,{className:"drum-pad",children:"Q"}),Object(d.jsx)(m.a,{className:"drum-pad",children:"W"}),Object(d.jsx)(m.a,{className:"drum-pad",children:"E"})]}),Object(d.jsxs)(i.a,{children:[Object(d.jsx)(m.a,{className:"drum-pad",children:"A"}),Object(d.jsx)(m.a,{className:"drum-pad",children:"S"}),Object(d.jsx)(m.a,{className:"drum-pad",children:"D"})]}),Object(d.jsxs)(i.a,{children:[Object(d.jsx)(m.a,{className:"drum-pad",children:"Z"}),Object(d.jsx)(m.a,{className:"drum-pad",children:"X"}),Object(d.jsx)(m.a,{className:"drum-pad",children:"C"})]})]})}}]),t}(a.Component),S=t(8),L=t(35);function _(){v.powerOn&&setTimeout((function(){return document.getElementById("display-content").innerHTML="&nbsp"}),300)}var B=function(e){Object(p.a)(t,e);var n=Object(j.a)(t);function t(e){var a;return Object(l.a)(this,t),(a=n.call(this,e)).updatePowerSwitch=a.updatePowerSwitch.bind(Object(S.a)(a)),a.powerOnChangeHandler=a.powerOnChangeHandler.bind(Object(S.a)(a)),a.updateVolume=a.updateVolume.bind(Object(S.a)(a)),a}return Object(h.a)(t,[{key:"componentDidMount",value:function(){this.updatePowerSwitch(v.powerOn),v.setVolume(document.getElementById("volume-range").value),document.getElementById("volume-range").addEventListener("pointerup",_)}},{key:"updatePowerSwitch",value:function(e){document.getElementById("power-switch").checked=e}},{key:"powerOnChangeHandler",value:function(){v.setPower(),E(),this.updatePowerSwitch(v.powerOn)}},{key:"updateVolume",value:function(){v.setVolume(document.getElementById("volume-range").value),v.powerOn&&(document.getElementById("display-content").innerHTML="Volume: ".concat(document.getElementById("volume-range").value))}},{key:"componentWillUnmount",value:function(){document.getElementById("volume-range").removeEventListener("pointerup",_)}},{key:"render",value:function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)(i.a,{children:[Object(d.jsx)(m.a,{children:Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(L.a.Switch,{className:"form-switch-sm form-switch-md",id:"power-switch",onChange:this.powerOnChangeHandler}),Object(d.jsx)(L.a.Label,{htmlFor:"power-switch",children:"Power"})]})}),Object(d.jsx)(m.a,{children:Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(L.a.Switch,{className:"form-switch-sm form-switch-md",id:"bank-switch",onChange:v.setBankNum}),Object(d.jsx)(L.a.Label,{htmlFor:"bank-switch",children:"Bank"})]})})]}),Object(d.jsx)(i.a,{children:Object(d.jsx)(m.a,{children:Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(L.a.Range,{id:"volume-range",onChange:this.updateVolume}),Object(d.jsx)(L.a.Label,{htmlFor:"volume-range",children:"Volume"})]})})})]})}}]),t}(a.Component);t(30),t(31);var z=function(){return Object(d.jsx)(s.a,{fluid:!0,id:"outer-container",children:Object(d.jsxs)(s.a,{id:"drum-machine",children:[Object(d.jsx)(i.a,{id:"disp-ctrl",children:Object(d.jsxs)(s.a,{children:[Object(d.jsx)(u,{}),Object(d.jsx)(B,{})]})},"disp-ctrl"),Object(d.jsx)(i.a,{id:"keypad",children:Object(d.jsx)(s.a,{id:"drum-pads",children:Object(d.jsx)(C,{})})},"keypad")]})})},N=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,36)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,r=n.getLCP,o=n.getTTFB;t(e),a(e),c(e),r(e),o(e)}))};o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(z,{})}),document.getElementById("root")),N()}},[[32,1,2]]]);
//# sourceMappingURL=main.68b205d6.chunk.js.map