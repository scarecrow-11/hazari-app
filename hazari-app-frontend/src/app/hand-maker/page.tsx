import styles from './HandMaker.module.css'
import { DeckView } from '../../components'

const HandMakerPage = () => {
    return (
        <div className={styles.container}>
            <DeckView />
        </div>
    )
}

export default HandMakerPage