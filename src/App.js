import './App.css';
import song1 from './audio/incoming-voiceover.mp3'
import song2 from './audio/ringtone.mp3'
import {Howl} from 'howler';
function App() {
  navigator.mediaDevices.getUserMedia({ audio: { output: true } })
  .then(function(stream) {
    var sound = new Howl({
      src: [song1],
      autoplay: true,
    });
    var sound2 = new Howl({
      loop: true,
      src: [song2]
    });
    sound2.pause();
    
    // Clear listener after first call.
    sound.once('load', function(){
      sound.play();
    });
    sound.on('end', function(){
      sound2.play();
    });
  })
  .catch(function(err) {
    // Permission denied or error occurred
    console.error('Error accessing speaker:', err);
  });
  return (
    <div className="App">
          v.6
      </div>
  );
}

export default App;
