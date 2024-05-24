import { Injectable } from '@angular/core';
import { iBikini } from './Models/i-bikini';

@Injectable({
  providedIn: 'root',
})
export class BikiniService {
  bikiniArr: iBikini[] = [];
  constructor() {}

  async getBikini(): Promise<void> {
    const response = await fetch('../assets/db.json');
    const data: iBikini[] = await response.json();
    this.bikiniArr = data;
  }

  getRandomBikini(): iBikini[] {
    const shuffled = [...this.bikiniArr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 2);
  }

  async getBrandBikini(brand: string): Promise<iBikini[]> {
    await this.getBikini();
    return this.bikiniArr.filter((bikini: iBikini) => bikini.brand === brand);
  }
}
