import { Component } from '@angular/core';
import { BikiniService } from '../../bikini.service';
import { iBikini } from '../../Models/i-bikini';

@Component({
  selector: 'app-calzedonia',
  templateUrl: './calzedonia.component.html',
  styleUrl: './calzedonia.component.scss',
})
export class CalzedoniaComponent {
  bikiniArr: iBikini[] = [];
  constructor(private bikiniSvc: BikiniService) {}

  async ngOnInit() {
    this.bikiniArr = await this.bikiniSvc.getBrandBikini('Calzedonia');
    console.log(this.bikiniArr);
  }
}
