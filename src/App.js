import './App.css';
import song1 from './audio/incoming-voiceover.mp3'
import song2 from './audio/ringtone.mp3'
import {Howl, Howler} from 'howler';
function App() {
  navigator.mediaDevices.getUserMedia({ audio: { output: true } })
  .then(function(stream) {
    var sound = new Howl({
      src: [song1]
    });
    
    // Clear listener after first call.
    sound.once('load', function(){
      sound.play();
    });
    
    // Fires when the sound finishes playing.
    sound.on('end', function(){
      handleIncommingVoiceEnd();
    });
  })
  .catch(function(err) {
    // Permission denied or error occurred
    console.error('Error accessing speaker:', err);
  });



  const handleIncommingVoiceEnd = () => {
    var sound2 = new Howl({
      loop: true,
      src: [song2]
    });
    // Clear listener after first call.
    sound2.once('load', function(){
      sound2.play();
    });
  }
  return (
    <div className="App">
          v.6
      </div>
  );
}

export default App;
