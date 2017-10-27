# Speech synthesis
Use SpeechSynthesis interface of web speech API to read the information from a textArea. Avaliable to adjust its speed and pitch.

## Skill to get
1. The SpeechSynthesis interface.
It is the controller interface of the speech service. It can be used to retrieve information on device, like start and pause speech.
  - `SpeechSynthesis.cancel()`: It removes all utterances from the utterance queue.
  - `SpeechSynthesis.getVoices()` : It return a list of voice objects. It contains all the voices of the device.
  - `SpeechSynthesis.speak()` : add a utterance to the queue. it will be spoken when the one before it have been spoken.
  - `SpeechSynthesis.onvoiceschanged` event handler : Fired when the SpeechSynthesis.getVoices() method has changed.
  
2. SpeechSynthesisUtterance interface.
It represents a speech request. It contains the content to read and information about how to read it (e.g. language, pitch and volume.)
  - `SpeechSynthesisUtterance.text` property : Gets and sets the text needs to be spoken.
  - `SpeechSynthesisUtterance.voice` : Gets and sets the voice that will be used to speak the utterance.
  - `SpeechSynthesisUtterance.lang` : Gets and sets the language of the utterance.
  
3. Pass the `this` value to the setVoice function, which is a closure. We need to make a copy of the `this` value.
```javascript
function setVoice(){
  var self = this;//it is a closure, we need to keep a copy of this.
   msg.voice = voices.find(function(x){
     if(x.name == self.value){
       return x;
     }
   });
   toggle();
}
```

4. Pass parameters to the eventlistener callback function.
  - Use `.bind()` to pass the `false` parameter the the toggle function. `stopButton.addEventListener('click', toggle.bind(null, false)); `
  - Use inline callback function.
  `stopButton.addEventListener('click', function(){toggle(false)});` Or `stopButton.addEventListener('click', ()=>toggle(false));`
