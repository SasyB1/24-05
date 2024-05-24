import { Component } from '@angular/core';
import { BikiniService } from '../../bikini.service';
import { iBikini } from '../../Models/i-bikini';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {
  bikiniArr: iBikini[] = [];
  constructor(private bikiniSvc: BikiniService) {}

  async ngOnInit() {
    await this.bikiniSvc.getBikini();
    this.bikiniArr = this.bikiniSvc.getRandomBikini();
    console.log(this.bikiniArr);
  }
}
