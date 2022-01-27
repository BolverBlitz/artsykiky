import  styles  from "../styles/squidgameRedlightGreenlight.module.scss"
import  Head from 'next/head'

function squidgameRedlightGreenlight () {
    return <div>
                <Head>
                    <title>Squid Game</title>
                </Head>
                <div className={styles.wrapper}>
                    <div className={styles.areabackground}>
                        <div className={styles.timer}>
                            <span></span>    
                        </div>
                        <div className={styles.floor}></div>
                        <div className={styles.gameover}>Eliminated</div>
                            <h1>Squid Game - Red light, Green ligth</h1>
                                <input className={styles.inputCircle, styles.inputCircle1} type="radio" id="circle1" />
                                <input className={styles.inputCircle, styles.inputCircle2} type="radio" id="circle2" />
                                <input className={styles.inputCircle, styles.inputCircle3} type="radio" id="circle3" />
                                <input className={styles.inputCircle, styles.inputCircle4} type="radio" id="circle4" />
                                <input className={styles.inputCircle, styles.inputCircle5} type="radio" id="circle5" />
                                <input className={styles.inputCircle, styles.inputCircle6} type="radio" id="circle6" />
    
                                <label htmlFor="circle1" className={styles.pajaro, styles.pajaro1}><span></span></label>
                                <label htmlFor="circle2" className={styles.pajaro, styles.pajaro2}><span></span></label>
                                <label htmlFor="circle3" className={styles.pajaro, styles.pajaro3}><span></span></label>
                                <label htmlFor="circle4" className={styles.pajaro, styles.pajaro4}><span></span></label>
                                <label htmlFor="circle5" className={styles.pajaro, styles.pajaro5}><span></span></label>
                                <label htmlFor="circle6" className={styles.pajaro, styles.pajaro6}><span></span></label>
                            <div className={styles.sum}>SCORE:</div>
    
                        </div>
                    </div>
                </div>

}

export default squidgameRedlightGreenlight