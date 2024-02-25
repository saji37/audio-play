import './App.css';
import song1 from './audio/incoming-voiceover.mp3'
import song2 from './audio/ringtone.mp3'
function App() {
  navigator.mediaDevices.getUserMedia({ audio: { output: true } })
  .then(function(stream) {
    // Permission granted, you can now use the stream to output audio
  })
  .catch(function(err) {
    // Permission denied or error occurred
    console.error('Error accessing speaker:', err);
  });


  const audio = new Audio(song1);
  audio.load();
  audio.autoplay=true;
  audio.play=true;
  // const handleIncommingVoiceEnd = () => {
  //   const ringtoneAudioElement = document.getElementById(
  //     'ringtone',
  //   );
  //   if (ringtoneAudioElement) ringtoneAudioElement.play();
  // }
  return (
    <div className="App">
          {/* <audio
            src={song1}
            playsInline
            autoPlay
            onEnded={handleIncommingVoiceEnd}
          />
          <audio id="ringtone" src={song2} loop playsInline />     */}
      </div>
  );
}

export default App;
