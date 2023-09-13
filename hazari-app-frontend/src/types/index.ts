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

export interface Hand {
    cardsInHand: Card[];
    handRank: number;
}

export interface OptimalHands {
    threeOfAKindHands: Hand[];
    straightFlushHands: Hand[];
    straightHands: Hand[];
    flushHands: Hand[];
    pairHands: Hand[];
    bottomHands: Hand[];
    remainingHands: Hand[];
}