import './App.css';
import song1 from './audio/incoming-voiceover.mp3'
import song2 from './audio/ringtone.mp3'
import {Howl} from 'howler';
import { Platform } from 'react-native';
function App() {
  navigator.mediaDevices.getUserMedia({ audio: true })
  .then(function(stream) {
    var sound = new Howl({
      src: [song1],
      autoplay: true,
    });
    var sound2 = new Howl({
      loop: true,
      src: [song2],
    });
    sound2.pause();
    
    // Clear listener after first call.
    sound.play();
    sound.on('end', function(){
      sound2.play();
    });

    document.addEventListener('visibilitychange', function() {
     if( Platform.OS === 'ios'){
      if (document.hidden) {
        sound2.play();
      } else {
        sound2.pause();
        sound2.play();
      }
    }
    });  
  })
  .catch(function(err) {
    // Permission denied or error occurred
    console.error('Error accessing speaker:', err);
  });
  return (
    <div className="App">
      <h5>V.22</h5>
      </div>
  );
}

export default App;
