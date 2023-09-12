'use client'
import styles from './HandMaker.module.css'
import { Deck } from '../../types'
import { useState, useCallback } from 'react'
import { Space, Button } from 'antd'
import { DeckView } from '../../components'

const HandMakerPage = () => {
    const [selectedDeck, setSelectedDeck] = useState<Deck>({ spade: [], diamond: [], club: [], heart: [] })

    const onSelectedDeckChange = useCallback((selectedDeck: Deck) => {
        setSelectedDeck(selectedDeck)
    }, [])

    const onMakeHands = () => {
    }

    return (
        <div className={styles.container}>
            <Space direction='vertical' size='large'>
                <DeckView onChange={onSelectedDeckChange} />
                <Button type='primary' size='large' block={true} onClick={onMakeHands}>
                    {'Make Hands'}
                </Button>
            </Space>
        </div>
    )
}

export default HandMakerPage