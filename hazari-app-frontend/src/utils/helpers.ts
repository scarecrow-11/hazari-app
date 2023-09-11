import { Card } from '../types'

export const getCardId = (card: Card) => `${card.suit}-${card.value}`