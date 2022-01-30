import  styles  from "../styles/3Dcube.module.scss"
import  Head from 'next/head'

function DreiDcube () {
    return <div className={styles.wrapper}> 
      <Head>
          <title>3Dcube</title>
      </Head>

      <div className={styles.scene}>    
        <div className={styles.squish}>
          <div className={styles.front}/>
          <div className={styles.back}/>
          <div className={styles.right}/>
          <div className={styles.left}/>
          <div className={styles.top}/>
          <div className={styles.bottom}/>
        </div>
        <div className={styles.floor}/>
          <div className={styles.ballshadow}/>
      </div>
      <div className={styles.ball}></div>
    
  
    </div>
}

export default DreiDcube