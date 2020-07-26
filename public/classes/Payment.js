// Left off on Lesson 14 - Modules
// https://www.youtube.com/watch?v=EpOPR03z4Vw&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=14
//...................implements HasFormatter <= Lesson 16
export class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    } // always remember you need these brackets!!!
    format() {
        return `${this.recipient} is owed $${this.amount} for ${this.details}`;
    }
}
