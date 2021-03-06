// Left off on Lesson 14 - Modules
// https://www.youtube.com/watch?v=EpOPR03z4Vw&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=14

import { HasFormatter } from '../interfaces/HasFormatter.js' // Lesson 16
//...................implements HasFormatter <= Lesson 16
export class Invoice implements HasFormatter {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number,
  ){} // always remember you need these brackets!!!

  format(){ // <= this implements HasFormatter
    return `${this.client} owes $${this.amount} for ${this.details}`
  }
}
