import styles from './SuitView.module.css'
import { Suit, Card } from '../../types'
import Image from 'next/image'
import { Space, Divider, Button } from 'antd'

interface SuitViewProps {
    suit: Suit;
    cards: Card[];
}

const DECK_IMAGE_BASE_URL = '/images/deck'

export const SuitView = ({ suit, cards }: SuitViewProps) => {
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
                cards.map(({ suit, value }) =>
                    <Button
                        key={value}
                        className={styles.button}
                        type='default'
                        block={true}
                        icon={
                            <Image
                                src={`${DECK_IMAGE_BASE_URL}/${suit.toLowerCase()}.png`}
                                alt='Suit'
                                width={16}
                                height={16}
                            />
                        }
                    >
                        <strong>{value}</strong>
                    </Button>
                )
            }
        </Space>
    )
}

SuitView.defaultProps = {
    suit: '',
    cards: []
}

export default SuitView