// 1. When a user presses the record button, start recording actions(change recording between true and false)
// 2. When recording, push an object with the important data to the array
//			- Clear the array before starting a new recording
// 3. Stop a recording by pressing the same button
//			- Print all of the position to the console using forEach: 123px 345px
// 4. Replay the recording by iterating through the Array and move a custom cursor to the position that was recorded
//			- Ensure there is not current a recording going on (various ways to prevent that case)

// DOM elements
const $startAndStop = document.getElementById('startAndStop')
const $replayRecording = document.getElementById('replayRecording')
const $cursor = document.getElementById('cursor')

// Variables/data
let isRecording = false;
let mouseMoves = []
let startTime = 0;
// Each movement of the mouse
window.addEventListener('mousemove', (event) => {
	if (isRecording) {
		// console.log(event.clientX, event.clientY, event.timeStamp)
		// Record the data to the Array
	mouseMoves.push({x:event.clientX,y:event.clientY, t:event.timeStamp})
}

})

// Start/stop the recording
$startAndStop.addEventListener('click', () =>{
isRecording=!isRecording;
if(isRecording == true){
	startTime = event.timeStamp
	
	console.log("Recording")

				
	
}
else if(isRecording == false){
	

	console.log("Not Recording");

	
}
})

// Replay recording
$replayRecording.addEventListener('click',(event)=>{
	
	replay()
})
	

let replay= ()=>{

// if(count < mouseMoves.length){
	mouseMoves.forEach(movement =>{
		setTimeout(()=>{
			$cursor.style.setProperty('--x',movement.x)
			$cursor.style.setProperty('--y',movement.y)
			// count++	
			// replay()
			
		},movement.t-startTime);
	
	})
	
}




	