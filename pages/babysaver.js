import styles from "../styles/babysaver.module.scss"
import Head from 'next/head'

function babysaver() {
    var babies = []
    for (var bby = 1; bby < 101; bby = bby + 1) {
        babies.push(<input type="radio" className={styles.check + ' ' + styles["baby" + bby]} id={"baby" + bby} />)
        babies.push(<label htmlFor={"baby" + bby} className={styles.baby + ' ' + styles["baby" + bby]}></label>)
    }

    var lennart = (<div className={styles.wrapper}>
        <Head>
            <title>Save the babies</title>
        </Head>

        <div className={styles.body + ' ' + styles.scene + ' ' + styles.babysaver}>
            <div className={styles.frame}>
                <input type="checkbox" className={styles.startinput} id="start" />

                <label className={styles.state} htmlFor="start">
                    <span className={styles.start}>Start</span>
                </label>

                <div className={styles.intro}>
                    <h1>Save the babies</h1>

                    <div className={styles.anweisung}>
                        <p>You have to catch the babies</p>
                        <p>How you do that?</p>
                        <p>You have to hurry up. Click on the babies to put them safely to bed.</p>
                        <p>Each rescued baby gives you a point.</p>
                        <p>You can save 100 babies. Try to catch them all.</p>
                    </div>
                </div>

                {
                    babies
                }


                <div className={styles.babies}>

                    <div className={styles.kopf}>
                        <div className={styles.auge}></div>
                        <div className={styles.auge}></div>
                        <div className={styles.nase}></div>
                    </div>

                    <div className={styles.koerper}>
                        <div className={styles.arm}></div>
                        <div className={styles.arm}></div>
                        <div className={styles.bein}></div>
                        <div className={styles.bein}></div>
                    </div>
                </div>


                <div className={styles.footer}>
                    <div className={styles.punkte}>
                        You saved:&nbsp;<span></span>&nbsp;of 100 babies
                    </div>
                </div>

                <div className={styles.gameover}>
                    <h1>Game over</h1>
                    <p className={styles.punkte}>Your current score is&nbsp;<span></span></p>
                    <p className={styles.text}>You can try again by clicking&nbsp;<a href="">here</a></p>
                </div>
            </div>
        </div>

    </div>)

    return lennart
}

export default babysaver