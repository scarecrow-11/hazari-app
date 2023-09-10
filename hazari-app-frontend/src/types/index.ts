export enum Suit {
    CLUB = 'club',
    DIAMOND = 'diamond',
    HEART = 'heart',
    SPADE = 'spade'
}

export interface Card {
    value: string;
    suit: string;
    rank: number;
    reward: number;
}

export type Deck = {
    [key in Suit]: Card[];
}