import { Component } from '@angular/core';
import { BikiniService } from '../../bikini.service';
import { iBikini } from '../../Models/i-bikini';

@Component({
  selector: 'app-yamamay',
  templateUrl: './yamamay.component.html',
  styleUrl: './yamamay.component.scss',
})
export class YamamayComponent {
  bikiniArr: iBikini[] = [];
  constructor(private bikiniSvc: BikiniService) {}

  async ngOnInit() {
    this.bikiniArr = await this.bikiniSvc.getBrandBikini('Yamamay');
    console.log(this.bikiniArr);
  }
}
