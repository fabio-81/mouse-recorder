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


// Variables/data
let isRecording = false;
let mouseMoves = []

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
isRecording = !isRecording
if(isRecording == true){
			//clear array
			mouseMoves=[]
	console.log("Recording")

				
	
}
else if(isRecording == false){
	// mouseMoves.forEach(move => {
	// 	console.log(move)
	// });
	console.log("Not Recording");

	
}
})

// Replay recording
$replayRecording.addEventListener('click',event =>{
	const $cursor = document.getElementById('cursor')

	//run through the array
	mouseMoves.forEach((mouse) =>{
	mouseMoves.forEach((mouse)=>{
		//set timeout value to slow down mouse movement
	setTimeout(()=>{
	$cursor.style.setProperty('--x',mouse.x)
	$cursor.style.setProperty('--y',mouse.y)
	},3000);


	})
	})
})

	

