'use client'
import styles from './SuitView.module.css'
import { Suit, Card } from '../../types'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Space, Divider, Button } from 'antd'
import { getCardId } from '../../utils'

interface SuitViewProps {
    suit: Suit;
    cards: Card[];
    disableUnselectedCards: boolean;
    onChange: (suit: Suit, selectedCards: Card[]) => void;
}

const DECK_IMAGE_BASE_URL = '/images/deck'

export const SuitView = ({ suit, cards, disableUnselectedCards, onChange }: SuitViewProps) => {
    const [selectedCards, setSelectedCards] = useState<Card[]>([])

    useEffect(() => {
        onChange(suit, selectedCards)
    }, [suit, selectedCards, onChange])

    const onClick = (selectedCard: Card) => {
        setSelectedCards(prevSelectedCards => {
            if (prevSelectedCards.find(card => getCardId(card) === getCardId(selectedCard))) {
                return prevSelectedCards.filter(card => getCardId(card) !== getCardId(selectedCard))
            }
            return prevSelectedCards.concat([selectedCard])
        })
    }

    const isCardSelected = (selectedCard: Card) => Boolean(selectedCards.find(card => getCardId(card) === getCardId(selectedCard)))

    return (
        <Space direction='vertical'>
            <div className={styles.titleImageContainer}>
                <Image
                    src={`${DECK_IMAGE_BASE_URL}/${suit}.png`}
                    alt='Suit'
                    width={36}
                    height={36}
                />
            </div>
            <Divider className={styles.divider} />
            {
                cards.map(card =>
                    <Button
                        key={card.value}
                        className={styles.button}
                        type={isCardSelected(card) ? 'primary' : 'default'}
                        block={true}
                        disabled={isCardSelected(card) ? false : disableUnselectedCards}
                        icon={
                            <Image
                                src={`${DECK_IMAGE_BASE_URL}/${card.suit.toLowerCase()}.png`}
                                alt='Suit'
                                width={16}
                                height={16}
                            />
                        }
                        onClick={() => onClick(card)}
                    >
                        <strong>{card.value}</strong>
                    </Button>
                )
            }
        </Space>
    )
}

SuitView.defaultProps = {
    suit: '',
    cards: [],
    disableUnselectedCards: false,
    onChange: () => {}
}