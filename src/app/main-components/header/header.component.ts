import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @HostListener('window:scroll')
  onWIndowScroll() {
    let navbarColorChange = document.querySelector('.navbar');
    if (navbarColorChange)
      if (window.scrollY > 1) {
        navbarColorChange.classList.add('scroll');
      } else {
        navbarColorChange.classList.remove('scroll');
      }
  }
  show: boolean = false;
}
