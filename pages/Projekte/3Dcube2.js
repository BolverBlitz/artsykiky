import  styles  from "../../styles/Projekte/3Dcube2.module.scss"
import  Head from 'next/head'

function DreiDcube () {
    return <div className={styles.wrapper}> 
    <Head>
        <title>3Dcube</title>
    </Head>
    <div className={styles.scene}>
    <div className={styles.floor}></div>
    <div className={styles.cube}>
      <div className={styles.front}></div>
      <div className={styles.back}></div>
      <div className={styles.left}></div>
      <div className={styles.right}></div>
      <div className={styles.top}>
        <div className={styles.ballShadow}></div>
      </div>
      <div className={styles.bottom}></div>
    </div>
    <div className={styles.ball}></div>
  </div>
</div>
}

export default DreiDcube