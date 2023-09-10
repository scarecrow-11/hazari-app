import styles from './page.module.css'
import Link from 'next/link'
import { Button } from 'antd'
import { PATHS } from '../utils'

const HomePage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.navContainer}>
        <Link className={styles.link} href={PATHS.PLAY}>
          <Button type='primary' size='large' block={true}>
            {'Play'}
          </Button>
        </Link>
        <Link className={styles.link} href={PATHS.HAND_MAKER}>
          <Button type='default' size='large' block={true}>
            {'Hand Maker'}
          </Button>
        </Link>
      </div>
    </main>
  )
}

export default HomePage