'use client'
import styles from './HandMaker.module.css'
import { Deck } from '../../types'
import { useState, useCallback } from 'react'
import { DeckView } from '../../components'

const HandMakerPage = () => {
    const [selectedDeck, setSelectedDeck] = useState<Deck>({ spade: [], diamond: [], club: [], heart: [] })

    const onSelectedDeckChange = useCallback((selectedDeck: Deck) => {
        setSelectedDeck(selectedDeck)
    }, [])

    return (
        <div className={styles.container}>
            <DeckView
                onChange={onSelectedDeckChange}
            />
        </div>
    )
}

export default HandMakerPage