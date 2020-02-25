var video;
var volume;

function getVid(){
	video = document.getElementById("myVideo");
}

function playVid() { 
	video.play();
	console.log("Play Video");
	volume = document.querySelector("#volume");
	volume.innerHTML = video.volume * 100 + "%";

} 

function pauseVid() { 
	video.pause();
	console.log("Pause Video");
} 

function decreaseSpeed() { 
	video.playbackRate = video.playbackRate * .8;
  	console.log("Speed is "+ video.playbackRate);
} 

function increaseSpeed() {
	video.playbackRate = video.playbackRate * 1.25;
	console.log("Speed is "+ video.playbackRate);
} 

function skipAhead() {
	video.currentTime = video.currentTime + 60;
	console.log("Current location is "+ video.currentTime);
	if(video.currentTime >= video.duration){
		video.play();
	}
} 

function mute() { 
	if(video.muted){
		video.muted = false;
		console.log("Unmuted");
		document.querySelector("#mute").innerHTML = "Mute"
		video.volume = 1;
	}
	else{
		video.muted = true;
		console.log("Muted");
		video.muted.innerHTML = "muted";
		document.querySelector("#mute").innerHTML = "Unmute";
		video.volume = 0;
	}

}

function changeVolume() {
	let slider = document.querySelector('#volumeSlider')
	video.volume = slider.value/100;
	console.log("Volume is " + video.volume);
	volume.innerHTML = video.volume * 100 + "%";
}
       
function gray() { 
	let gray = document.querySelector('#myVideo')
	gray.classList.toggle("grayscale")
	console.log("In grayscale")
}

function color() {
	let gray = document.querySelector('#myVideo')
	gray.classList.toggle("grayscale")
	console.log("In color") 
}
