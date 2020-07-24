// Left off on Lesson 14 - Modules
// https://www.youtube.com/watch?v=EpOPR03z4Vw&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=14

export class Invoice{
  constructor(
    readonly client: string,
    private details: string,
    public amount: number,
  ){} // always remember you need these brackets!!!

  format(){
    return `${this.client} owes $${this.amount} for ${this.details}`
  }
}
