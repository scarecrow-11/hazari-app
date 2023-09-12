'use client'
import styles from './DeckView.module.css'
import { Suit, Card, Deck } from '../../types'
import { useState, useEffect, useCallback } from 'react'
import { Card as AntCard, Space, notification } from 'antd'
import { SuitView } from '../suit-view'
import { getNumberOfCardsInHand, MAX_NUMBER_OF_CARDS_IN_HAND } from '../../utils'
import { deck } from '../../data'

interface DeckViewProps {
    onChange: (selectedDeck: Deck) => void;
}

export const DeckView = ({ onChange }: DeckViewProps) => {
    const [selectedDeck, setSelectedDeck] = useState<Deck>({ spade: [], diamond: [], club: [], heart: [] })
    const [disableUnselectedCards, setDisableUnselectedCards] = useState(false)

    useEffect(() => {
        if (getNumberOfCardsInHand(selectedDeck) >= MAX_NUMBER_OF_CARDS_IN_HAND) {
            setDisableUnselectedCards(true)
            notification.warning({
                message: 'Hands Full!',
                description: `Maximum number of '${MAX_NUMBER_OF_CARDS_IN_HAND}' cards reached.`,
                placement: 'bottomLeft'
            })
        } else {
            if (disableUnselectedCards) {
                setDisableUnselectedCards(false)
            }
        }
        onChange(selectedDeck)
    }, [selectedDeck, disableUnselectedCards, onChange])

    const onSelectedCardsChange = useCallback((suit: Suit, selectedCards: Card[]) => {
        setSelectedDeck(prevSelectedDeck => ({ ...prevSelectedDeck, [suit]: selectedCards }))
    }, [])

    return (
        <AntCard className={styles.card}>
            <Space direction='horizontal'>
                {
                    Object.keys(deck).map(suit =>
                        <SuitView
                            key={suit}
                            suit={suit as Suit}
                            cards={deck[suit as Suit]}
                            disableUnselectedCards={disableUnselectedCards}
                            onChange={onSelectedCardsChange}
                        />
                    )
                }
            </Space>
        </AntCard>
    )
}

DeckView.defaultProps = {
    onChange: () => {}
}