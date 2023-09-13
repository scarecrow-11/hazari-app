import styles from './HandsView.module.css'
import { Card, Hand, OptimalHands } from '../../types'
import Image from 'next/image'
import { Space, Card as AntCard } from 'antd'
import { DECK_IMAGE_BASE_URL } from '../../utils'

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
        remainingHands: []
    }
}

export const HandsView = ({ optimalHands }: HandsViewProps = handsViewDefaultProps) => {
    return (
        <AntCard size='small'>
            <Space direction='horizontal' align='start' size='small'>
                {
                    Object.values(optimalHands).map((value: Hand[]) =>
                        value.map(({ cardsInHand, handRank }: Hand) =>
                            <Space key={handRank} direction='vertical' align='center' size='small'>
                                <strong>{handRank}</strong>
                                <AntCard className={styles.card} size='small'>
                                    <Space direction='vertical' size='small'>
                                        {
                                            cardsInHand.map(({ suit, value }: Card) =>
                                                <AntCard
                                                    key={`${suit}-${value}`}
                                                    size='small'
                                                    bodyStyle={{
                                                        margin: 0,
                                                        padding: 0,
                                                        display: 'flex',
                                                        flexDirection: 'row',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        gap: '8px'
                                                    }}
                                                >
                                                    <Image
                                                        src={`${DECK_IMAGE_BASE_URL}/${suit.toLowerCase()}.png`}
                                                        alt='Suit'
                                                        width={16}
                                                        height={16}
                                                    />
                                                    <strong>{value}</strong>
                                                </AntCard>
                                            )
                                        }
                                    </Space>
                                </AntCard>
                            </Space>
                        )
                    )
                }
            </Space>
        </AntCard>
    )
}