'use client'
import styles from './HandMaker.module.css'
import { Deck, OptimalHands } from '../../types'
import { useState, useCallback } from 'react'
import { Space, Button } from 'antd'
import { DeckView, HandsView } from '../../components'
import { getOptimalHands } from '../../services/hand-maker'
import { getNumberOfCardsInSelectedDeck, MAX_NUMBER_OF_CARDS } from '../../utils'

const HandMakerPage = () => {
    const [selectedDeck, setSelectedDeck] = useState<Deck>({ spade: [], diamond: [], club: [], heart: [] })
    const [optimalHands, setOptimalHands] = useState<OptimalHands>({
        threeOfAKindHands: [],
        straightFlushHands: [],
        straightHands: [],
        flushHands: [],
        pairHands: [],
        bottomHands: [],
        remainingHands: []
    })
    const [isOptimalHandsVisible, setIsOptimalHandsVisible] = useState(false)

    const onSelectedDeckChange = useCallback((selectedDeck: Deck) => {
        setSelectedDeck(selectedDeck)
    }, [])

    const onMakeHands = () => {
        const selectedCards = Object.values(selectedDeck).flat()
        const optimalHands = getOptimalHands(selectedCards)
        setOptimalHands(optimalHands)
        setIsOptimalHandsVisible(true)
    }

    return (
        <div className={styles.container}>
            <Space direction='vertical' size='large'>
                <DeckView onChange={onSelectedDeckChange} />
                <Button
                    type='primary'
                    size='large'
                    block={true}
                    disabled={getNumberOfCardsInSelectedDeck(selectedDeck) < MAX_NUMBER_OF_CARDS}
                    onClick={onMakeHands}
                >
                    {'Make Hands'}
                </Button>
            </Space>
            {
                isOptimalHandsVisible &&
                <HandsView optimalHands={optimalHands} />
            }
        </div>
    )
}

export default HandMakerPage