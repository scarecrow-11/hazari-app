import { Suit } from '../../types'
import { Space } from 'antd'
import { SuitView } from '../suit-view'
import { deck } from '../../data'

export const DeckView = () => {
    return (
        <Space direction='horizontal'>
            {
                Object.keys(deck).map(suit =>
                    <SuitView
                        key={suit}
                        suit={suit as Suit}
                        cards={deck[suit as Suit]}
                    />
                )
            }
        </Space>
    )
}

export default DeckView