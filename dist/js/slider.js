/* Нашел в сети и, вроде как, адаптировал.
   В курсе. Через жопу адаптировал. */

function showValue(val,slidernum,vertical) {
	var thumb = document.querySelector(".sliderthumb");
	var shell = document.querySelector(".slidershell");
	var track = document.querySelector(".slidertrack");
	var fill = document.querySelector(".sliderfill");
	var rangevalue = document.querySelector(".slidervalue");
	var slider = document.querySelector(".slider");
	var pc = val/(slider.max - slider.min);
	var thumbsize = 40;
	var bigval = 900;
	var smallval = 40;
	var tracksize = bigval - thumbsize;
	var fillsize = 10;
	var filloffset = 15;
	var bordersize = 0;
	var loc = vertical ? (1 - pc) * tracksize : pc * tracksize;

	rangevalue.innerHTML = val;

	fill.style.opacity = pc + 1 > 1 ? 1 : pc + 0.2;

	rangevalue.style.top = (vertical ? loc : 0) + "px";
	rangevalue.style.left = (vertical ? 0 : loc) + "px";
	thumb.style.top =  (vertical ? loc : 0) + "px";
	thumb.style.left = (vertical ? 0 : loc) + "px";
	fill.style.top = (vertical ? loc + (thumbsize/2) : filloffset + bordersize) + "px";
	fill.style.left = (vertical ? filloffset + bordersize : 0) + "px";
	fill.style.width = (vertical ? fillsize : loc + (thumbsize/2)) + "px";
	fill.style.height = (vertical ? bigval - filloffset - fillsize - loc : fillsize) + "px";
	shell.style.height = (vertical ? bigval : smallval) + "px";
	shell.style.width = (vertical ? smallval : bigval) + "px";
	track.style.height = (vertical ? bigval - 4 : fillsize) + "px";
	track.style.width = (vertical ? fillsize : bigval - 4) + "px";
	track.style.left = (vertical ? filloffset + bordersize : 0) + "px";
	track.style.top = (vertical ? 0 : filloffset + bordersize) + "px";
}
function setValue(val,num,vertical) {
	document.querySelector(".slider").value = val;
	showValue(val,num,vertical);
}
document.addEventListener('DOMContentLoaded', function(){
  setValue(0,0,false);
})
