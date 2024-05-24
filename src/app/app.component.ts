import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = '24-05';

  ngOnInit() {
    let audio = new Audio();
    audio.src = '../../../assets/audio/audio.mp3';
    audio.muted = true; // start off muted
    audio.play();

    setTimeout(() => {
      audio.muted = false; // unmute after a delay
    }, 1000); // adjust delay as needed
  }
}
