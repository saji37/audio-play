import './App.css';
import song1 from './audio/incoming-voiceover.mp3'
import song2 from './audio/ringtone.mp3'
function App() {
  navigator.mediaDevices.getUserMedia({ audio: { output: true } })
  .then(function(stream) {
    var audioContext = new (window.AudioContext || window.webkitAudioContext)();
    // Permission granted, you can now use the stream to output audio
var audioElement = new Audio(song1);

// Mute the audio immediately after creating the Audio element
// audioElement.muted = true;

// Create a source node
var source = audioContext.createMediaElementSource(audioElement);

// Connect the source to the context's destination (speakers)
source.connect(audioContext.destination);

// Delay the start of audio playback
setTimeout(function() {
  // audioElement.muted = false;
    audioElement.play();
}, 100);
audioElement.onended = handleIncommingVoiceEnd;
  })
  .catch(function(err) {
    // Permission denied or error occurred
    console.error('Error accessing speaker:', err);
  });



  const handleIncommingVoiceEnd = () => {
    var audioContext = new (window.AudioContext || window.webkitAudioContext)();
    var audioElement2 = new Audio(song2);
    // Mute the audio immediately after creating the Audio element
    // audioElement2.muted = true;
    
    // Create a source node
    var source = audioContext.createMediaElementSource(audioElement2);
    
    // Connect the source to the context's destination (speakers)
    source.connect(audioContext.destination);
    
    // Delay the start of audio playback
    setTimeout(function() {
      // audioElement2.muted = false;
        audioElement2.play();
        audioElement2.loop = true;
    }, 100);
  }
  return (
    <div className="App">
      v.3
    </div>
  );
}

export default App;
