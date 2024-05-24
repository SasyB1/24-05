import { Component } from '@angular/core';
import { iBikini } from '../../Models/i-bikini';
import { ActivatedRoute } from '@angular/router';
import { BikiniService } from '../../bikini.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
})
export class DetailComponent {
  currentBikini!: iBikini;

  constructor(
    private route: ActivatedRoute,
    private bikiniSvc: BikiniService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      let bikiniCurrent = this.bikiniSvc.getByModel(params.model);
      if (bikiniCurrent) this.currentBikini = bikiniCurrent;
      console.log(this.currentBikini);
      console.log(bikiniCurrent);
      console.log(this.bikiniSvc.getByModel(params.model));
      console.log(params.model);
    });
  }
}
