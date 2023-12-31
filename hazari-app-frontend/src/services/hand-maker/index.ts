import { Card, Hand, OptimalHands } from '../../types'
import { getCardId, MAX_NUMBER_OF_CARDS } from '../../utils'

const threeOfAKindComparator = (card: Card, card1: Card) => card.value === card1.value

const straightFlushComparator = (cardsInHand: Card[], card1: Card) =>
    (
        (cardsInHand[cardsInHand.length - 1].rank + 1 === card1.rank) ||
        (cardsInHand[cardsInHand.length - 1].value === '2' && card1.value === 'A')
    ) &&
    cardsInHand[cardsInHand.length - 1].suit === card1.suit

const straightComparator = (cardsInHand: Card[], card1: Card) =>
    (cardsInHand[cardsInHand.length - 1].rank + 1 === card1.rank) ||
    (cardsInHand[cardsInHand.length - 1].value === '2' && card1.value === 'A')

const flushComparator = (card: Card, card1: Card) => card.suit === card1.suit

const pairComparator = (card: Card, card1: Card) => card.value === card1.value

const getThreeOfAKindHands = (cards: Card[], latestHandRank: number) => {
    const threeOfAKindHands: Hand[] = []
    let takenCardIds: string[] = []
    let handRank = latestHandRank || 1

    if (cards.length <= 4) {
        return {
            threeOfAKindHands,
            remainingCards: cards,
            latestHandRank: handRank
        }
    }

    for (let i = 0; i < cards.length; i++) {
        const card = cards[i]
        const cardsInHand: Card[] = [card]
        if (takenCardIds.length >= cards.length - 4) {
            break
        }
        if (takenCardIds.includes(getCardId(card))) {
            continue
        }
        for (let j = 0; j < cards.length; j++) {
            const card1 = cards[j]
            if (cardsInHand.length === 3) {
                break
            }
            if (j === i || takenCardIds.includes(getCardId(card1))) {
                continue
            }
            if (threeOfAKindComparator(card, card1) && cardsInHand.length < 3) {
                cardsInHand.push(card1)
            }
        }
        if (cardsInHand.length === 3) {
            threeOfAKindHands.push({
                cardsInHand,
                handRank
            })
            handRank++
            takenCardIds = takenCardIds.concat(cardsInHand.map(card => getCardId(card)))
        }
    }

    return {
        threeOfAKindHands,
        remainingCards: cards.filter(card => !takenCardIds.includes(getCardId(card))),
        latestHandRank: handRank
    }
}

const getStraightFlushHands = (cards: Card[], latestHandRank: number) => {
    const straightFlushHands: Hand[] = []
    let takenCardIds: string[] = []
    let handRank = latestHandRank || 1

    if (cards.length <= 4) {
        return {
            straightFlushHands,
            remainingCards: cards,
            latestHandRank: handRank
        }
    }

    for (let i = 0; i < cards.length; i++) {
        const card = cards[i]
        const cardsInHand: Card[] = [card]
        if (takenCardIds.length >= cards.length - 4) {
            break
        }
        if (takenCardIds.includes(getCardId(card))) {
            continue
        }
        for (let j = 0; j < cards.length; j++) {
            const card1 = cards[j]
            if (cardsInHand.length === 3) {
                break
            }
            if (j === i || takenCardIds.includes(getCardId(card1))) {
                continue
            }
            if (straightFlushComparator(cardsInHand, card1) && cardsInHand.length < 3) {
                cardsInHand.push(card1)
            }
        }
        if (cardsInHand.length === 3) {
            straightFlushHands.push({
                cardsInHand,
                handRank
            })
            handRank++
            takenCardIds = takenCardIds.concat(cardsInHand.map(card => getCardId(card)))
        }
    }

    return {
        straightFlushHands,
        remainingCards: cards.filter(card => !takenCardIds.includes(getCardId(card))),
        latestHandRank: handRank
    }
}

const getStraightHands = (cards: Card[], latestHandRank: number) => {
    const straightHands: Hand[] = []
    let takenCardIds: string[] = []
    let handRank = latestHandRank || 1

    if (cards.length <= 4) {
        return {
            straightHands,
            remainingCards: cards,
            latestHandRank: handRank
        }
    }

    for (let i = 0; i < cards.length; i++) {
        const card = cards[i]
        const cardsInHand: Card[] = [card]
        if (takenCardIds.length >= cards.length - 4) {
            break
        }
        if (takenCardIds.includes(getCardId(card))) {
            continue
        }
        for (let j = 0; j < cards.length; j++) {
            const card1 = cards[j]
            if (cardsInHand.length === 3) {
                break
            }
            if (j === i || takenCardIds.includes(getCardId(card1))) {
                continue
            }
            if (straightComparator(cardsInHand, card1) && cardsInHand.length < 3) {
                cardsInHand.push(card1)
            }
        }
        if (cardsInHand.length === 3) {
            straightHands.push({
                cardsInHand,
                handRank
            })
            handRank++
            takenCardIds = takenCardIds.concat(cardsInHand.map(card => getCardId(card)))
        }
    }

    return {
        straightHands,
        remainingCards: cards.filter(card => !takenCardIds.includes(getCardId(card))),
        latestHandRank: handRank
    }
}

const getFlushHands = (cards: Card[], latestHandRank: number) => {
    const flushHands: Hand[] = []
    let takenCardIds: string[] = []
    let handRank = latestHandRank || 1

    if (cards.length <= 4) {
        return {
            flushHands,
            remainingCards: cards,
            latestHandRank: handRank
        }
    }

    for (let i = 0; i < cards.length; i++) {
        const card = cards[i]
        const cardsInHand: Card[] = [card]
        if (takenCardIds.length >= cards.length - 4) {
            break
        }
        if (takenCardIds.includes(getCardId(card))) {
            continue
        }
        for (let j = 0; j < cards.length; j++) {
            const card1 = cards[j]
            if (cardsInHand.length === 3) {
                break
            }
            if (j === i || takenCardIds.includes(getCardId(card1))) {
                continue
            }
            if (flushComparator(card, card1) && cardsInHand.length < 3) {
                cardsInHand.push(card1)
            }
        }
        if (cardsInHand.length === 3) {
            flushHands.push({
                cardsInHand,
                handRank
            })
            handRank++
            takenCardIds = takenCardIds.concat(cardsInHand.map(card => getCardId(card)))
        }
    }

    return {
        flushHands,
        remainingCards: cards.filter(card => !takenCardIds.includes(getCardId(card))),
        latestHandRank: handRank
    }
}

const getPairHands = (cards: Card[], latestHandRank: number) => {
    let pairHands: Hand[] = []
    let takenCardIds: string[] = []
    let handRank = latestHandRank || 1

    if (cards.length <= 4) {
        return {
            pairHands,
            remainingCards: cards,
            latestHandRank: handRank
        }
    }

    for (let i = 0; i < cards.length; i++) {
        const card = cards[i]
        const cardsInHand: Card[] = [card]
        if (takenCardIds.length >= cards.length - 4) {
            break
        }
        if (takenCardIds.includes(getCardId(card))) {
            continue
        }
        for (let j = 0; j < cards.length; j++) {
            const card1 = cards[j]
            if (cardsInHand.length === 3) {
                break
            }
            if (j === i || takenCardIds.includes(getCardId(card1))) {
                continue
            }
            if (pairComparator(card, card1) && cardsInHand.length < 2) {
                cardsInHand.push(card1)
            }
        }
        if (cardsInHand.length === 3) {
            pairHands.push({
                cardsInHand,
                handRank
            })
            handRank++
            takenCardIds = takenCardIds.concat(cardsInHand.map(card => getCardId(card)))
        }
    }

    let remainingCards = cards.filter(card => !takenCardIds.includes(getCardId(card)))
    pairHands = pairHands.map(pairHand => {
        const updatedPairHand = {
            ...pairHand,
            cardsInHand: remainingCards.length ?
                pairHand.cardsInHand.concat([remainingCards[remainingCards.length - 1]]) :
                pairHand.cardsInHand
        }
        return updatedPairHand
    })

    return {
        pairHands,
        remainingCards,
        latestHandRank: handRank
    }
}

const getBottomHands = (cards: Card[], latestHandRank: number) => {
    const bottomHands: Hand[] = []
    let takenCardIds: string[] = []
    let handRank = latestHandRank || 1

    if (cards.length <= 4) {
        return {
            bottomHands,
            remainingCards: cards,
            latestHandRank: handRank
        }
    }

    for (let i = 0; i < cards.length; i++) {
        const card = cards[i]
        const cardsInHand: Card[] = [card]
        if (takenCardIds.length >= cards.length - 4) {
            break
        }
        if (takenCardIds.includes(getCardId(card))) {
            continue
        }
        for (let j = cards.length - 1; j >= 0; j--) {
            const card1 = cards[j]
            if (cardsInHand.length === 3) {
                break
            }
            if (j === i || takenCardIds.includes(getCardId(card1))) {
                continue
            }
            if (cardsInHand.length < 3) {
                cardsInHand.push(card1)
            }
        }
        if (cardsInHand.length === 3) {
            bottomHands.push({
                cardsInHand,
                handRank
            })
            handRank++
            takenCardIds = takenCardIds.concat(cardsInHand.map(card => getCardId(card)))
        }
    }

    return {
        bottomHands,
        remainingCards: cards.filter(card => !takenCardIds.includes(getCardId(card))),
        latestHandRank: handRank
    }
}

export const getOptimalHands = (cards: Card[]) => {
    if (cards.length !== MAX_NUMBER_OF_CARDS) {
        return {
            threeOfAKindHands: [],
            straightFlushHands: [],
            straightHands: [],
            flushHands: [],
            pairHands: [],
            bottomHands: [],
            remainingHands: [
                {
                    cardsInHand: cards,
                    handRank: 1
                }
            ]
        } as OptimalHands
    }

    const handRank = 1
    const sortedCards = cards.sort((a, b) => a.rank - b.rank)
    const threeOfAKindHands = getThreeOfAKindHands(sortedCards, handRank)
    const straightFlushHands = getStraightFlushHands(threeOfAKindHands.remainingCards, threeOfAKindHands.latestHandRank)
    const straightHands = getStraightHands(straightFlushHands.remainingCards, straightFlushHands.latestHandRank)
    const flushHands = getFlushHands(straightHands.remainingCards, straightHands.latestHandRank)
    const pairHands = getPairHands(flushHands.remainingCards, flushHands.latestHandRank)
    const bottomHands = getBottomHands(pairHands.remainingCards, pairHands.latestHandRank)

    return {
        threeOfAKindHands: threeOfAKindHands.threeOfAKindHands,
        straightFlushHands: straightFlushHands.straightFlushHands,
        straightHands: straightHands.straightHands,
        flushHands: flushHands.flushHands,
        pairHands: pairHands.pairHands,
        bottomHands: bottomHands.bottomHands,
        remainingHands: [
            {
                cardsInHand: bottomHands.remainingCards,
                handRank: bottomHands.latestHandRank
            }
        ]
    } as OptimalHands
}