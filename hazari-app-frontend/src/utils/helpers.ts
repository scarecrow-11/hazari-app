import { Card, Deck } from '../types'

export const getCardId = (card: Card) => `${card.suit}-${card.value}`

export const getNumberOfCardsInHand = (selectedDeck: Deck) => Object.values(selectedDeck).reduce((acc: number, cardsInSuit: Card[]) => acc + cardsInSuit.length, 0)