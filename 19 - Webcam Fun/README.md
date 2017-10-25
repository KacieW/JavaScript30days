# Webcam
It should run on a secured server. We use the package provided for this exercise to run a localhost server for this app.

## Get的skill
1. **`Navigator.mediaDevices`** : read-only property returns a `MediaDevices` object, which provides access to connected media input devices like 
cameras and microphones, as well as screen sharing.

2. **`Navigator.MediaDevices.getUserMedia(constraints)`** : With the user's permission through a prompt, turns on a camera or screensharing and/or 
a microphone on the system and provides a MediaStream containing a video track and/or an audio track with the input. It returns a Promise.

3. **`constraints`** : The constraints parameter is a MediaStreamConstraints object with two members: video and audio, describing the media types 
requested. 

4. **`MediaStream`** : The MediaStream interface represents a stream of media content.

5. **`window.URL.createObjectURL()`** : it is a static method creates a DOMString containing a URL representing the object given in the 
parameter. 
```javascript
var constraints  = {video:true, audio:false}; //request a video type
function getVideo(){
  navigator.mediaDevices.getUserMedia(constraints)
  .then(function(MediaStream){//MediaStream has an id, it contains the live stream as a string
    video.src = window.URL.createObjectURL(MediaStream);//change the string to a URL for video to play
    video.play();
  })
  .catch(function (err){console.log('Err', err);});//it is a promise
}
```

6. Image on canvas
  - **Draw image on a canvas** : `ctx.drawImage(image, dx, dy, dWidth, dHeight)`
  - **Get image data** : `ctx.getImageData(sx, sy, sw, sh)`, it returns an imageData Object
  - **Put image back to canvas** : `ctx.putImageData(imageData, dx, dy)`
  ```javascript
  setInterval(function(){
    ctx.drawImage(video, 0, 0, width, height);
    var pixels = ctx.getImageData(0,0,width, height);//pull the data out
    //pixels = redEffect(pixels);
    ctx.putImageData(pixels, 0,0); //put the data back after changed the rgba by redEffect function.
  }, 16); 
  //every 16 ms, we request to draw the video on the canvas, additionally we can get the image data to mess with the rgba
  ```

7. **`canvas.toDataURL()`** : returns a data URI containing a representation of the image in the format specified by the type parameter. 
`canvas.toDataURL('image/jpeg')` will return the data in jpeg type.

8. **`canplay`** Event : The canplay event occurs when the browser can start playing the specified audio/video (when it has buffered enough to 
begin). 
