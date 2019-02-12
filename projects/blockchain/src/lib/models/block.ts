import { Transaction } from './transaction';

export class Block {
    public index: number;
    public timestamp: number;
    public transactions: Transaction[];
    public nonce: string;
    public hash: string;
    public oldhash: string;

    constructor(
        index: number,
        timestamp: number,
        transactions: Transaction[],
        nonce: string,
        hash: string,
        oldhash: string
    ) {
        this.index = index;
        this.timestamp = timestamp;
        this.transactions = transactions;
        this.hash = hash;
        this.nonce = nonce;
        this.oldhash = oldhash;
    }
}
