const stopwatchCounterStart = document.getElementById("start");
const stopwatchCounterReset = document.getElementById("reset");
const stopwatchCounterPause = document.getElementById("pause");
const stopwatchCounterCount = document.getElementById("count");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");


let watchIsRunning;
let timer = null;
var sec = 0;
let min;


//for start 
function start() {
	if (!watchIsRunning) {
		watchIsRunning = true;
		timer = setInterval(() => {
			sec++;
			let { second, min } = getMin(sec);
			minutes.textContent = min < 10 ? "0" + min : min;
			seconds.textContent = second < 10 ? "0" + second : second;
		}, 1000);
	}
}


// for reset 

function reset() {
	var tbody = document.getElementById("tr_area");
	watchIsRunning = false;
	clearInterval(timer);
	min = sec = ms = 0;
	minutes.textContent = "00";
	seconds.textContent = "00";
	tbody.innerHTML = '';
}

// for pause

function pause() {
	watchIsRunning = false;
	clearInterval(timer);
}

const getMin = (sec) => {
	min = parseInt(sec / 60);
	let remainder = sec % 60;
	let second = parseInt(remainder);
	return {
		min,
		second,
	};
};
stopwatchCounterStart.addEventListener("click", start);
stopwatchCounterPause.addEventListener("click", pause);
stopwatchCounterReset.addEventListener("click", reset);
stopwatchCounterCount.addEventListener('click', count);


// for show time count 
var tbody = document.getElementById("tr_area");
var c = 0 ;
function count() {
	
	if(sec == 0){
		alert('Start Stropwatch!')
	}else{
		tbody.innerHTML += `<tr class='bg-warning btn-block p-3'>
	<td class="bg-dark rounded-circle p-1 text-light">${c}  </td>
	<td class="text-dark">Minutes : ${min} & ===> </td> 
	<td class="text-primary">Seconds : ${sec}</td>
   </tr>
   `;
	}
	c++;
	
}