import { Component } from '@angular/core';
import { BikiniService } from '../../bikini.service';
import { iBikini } from '../../Models/i-bikini';

@Component({
  selector: 'app-tezenis',
  templateUrl: './tezenis.component.html',
  styleUrl: './tezenis.component.scss',
})
export class TezenisComponent {
  bikiniArr: iBikini[] = [];
  constructor(private bikiniSvc: BikiniService) {}

  async ngOnInit() {
    this.bikiniArr = await this.bikiniSvc.getBrandBikini('Tezenis');
    console.log(this.bikiniArr);
  }
}
