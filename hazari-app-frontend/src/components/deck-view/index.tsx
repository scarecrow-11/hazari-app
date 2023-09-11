'use client'
import { Suit, Card, Deck } from '../../types'
import { useState, useEffect, useCallback } from 'react'
import { Space } from 'antd'
import { SuitView } from '../suit-view'
import { deck } from '../../data'

interface DeckViewProps {
    onChange: (selectedDeck: Deck) => void;
}

export const DeckView = ({ onChange }: DeckViewProps) => {
    const [selectedDeck, setSelectedDeck] = useState<Deck>({ spade: [], diamond: [], club: [], heart: [] })

    useEffect(() => {
        onChange(selectedDeck)
    }, [selectedDeck, onChange])

    const onSelectedCardsChange = useCallback((suit: Suit, selectedCards: Card[]) => {
        setSelectedDeck(prevSelectedDeck => ({
            ...prevSelectedDeck,
            [suit]: selectedCards
        }))
    }, [])

    return (
        <Space direction='horizontal'>
            {
                Object.keys(deck).map(suit =>
                    <SuitView
                        key={suit}
                        suit={suit as Suit}
                        cards={deck[suit as Suit]}
                        onChange={onSelectedCardsChange}
                    />
                )
            }
        </Space>
    )
}

DeckView.defaultProps = {
    onChange: () => {}
}