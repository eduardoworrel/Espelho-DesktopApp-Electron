navigator.getUserMedia({video: true, audio: false}, (localMediaStream) => {
  var video = document.querySelector('video')
  video.srcObject = localMediaStream
  video.autoplay = true
}, (e) => {})