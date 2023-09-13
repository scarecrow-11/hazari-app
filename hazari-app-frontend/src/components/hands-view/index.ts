import { OptimalHands } from '../../types'

interface HandsViewProps {
    optimalHands: OptimalHands;
}

const handsViewDefaultProps = {
    optimalHands: {
        threeOfAKindHands: [],
        straightFlushHands: [],
        straightHands: [],
        flushHands: [],
        pairHands: [],
        bottomHands: [],
        remainingCards: []
    }
}

export const HandsView = ({ optimalHands }: HandsViewProps = handsViewDefaultProps) => {
    return (
        null
    )
}