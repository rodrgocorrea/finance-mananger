export class GroupExpenses {
    title;
    partiaValue;
    amount;
    #numberOfParticipants;

    constructor(title, numberOfParticipants, amount){
        this.title = titulo;
        this.#numberOfParticipants = numberOfParticipants;
        this.amount = total;
        this.partiaValue = (amount / numberOfParticipants).toFixed(2);
    }
}