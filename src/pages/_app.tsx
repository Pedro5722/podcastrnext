import '../styles/global.scss'

import { Header } from '../components/Header';
import { Player} from '../components/Player';
import {PlayerContextProvider} from '../contexts/playerContext'

import styles from '../styles/app.module.scss';

function MyApp({ Component, pageProps }) {
  return(
    <PlayerContextProvider>
    <div className={styles.Wrapper}>
      <main>
        <Header />
        <Component {...pageProps} />
      </main>
      <Player />
    </div>
    </PlayerContextProvider>
  )
}
  
export default MyApp
