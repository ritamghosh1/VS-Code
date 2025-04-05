function togglePlayPause(){
    let video = document.querySelector("video");
    if(video.paused) {
      video.play();
      document.getElementById("toggle").innerHTML = "Pause";
    }else {
      video.pause();
      document.getElementById("toggle").innerHTML = "Play";
    }
  }