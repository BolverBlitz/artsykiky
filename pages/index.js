import Link from "next/link"
import  styles  from "../styles/index.module.scss"
import  Head from 'next/head'
import  Image from 'next/image'
import Logo from '../public/logoartsykiky.png'
{/*import 'bootstrap/dist/css/bootstrap.css'*/}


export default function Home() {
  return <div className={styles.wrapper}> 
    <Head>
        <title>Artsykiky</title>
    </Head>

    <body>
      <div className={styles.center}>
        <Image src={Logo} alt="Logo" width={922.5} height={368} priority/>
      </div>
        <div className={styles.mt80}>
          <p><Link href="/labyrinth" passhref><a className={styles.unterseiten}>LABYRINTH</a></Link></p>
          <p><Link href="/3Dcube" passhref><a className={styles.unterseiten}>3D CUBE</a></Link></p>
          {/*<p><Link href="/SquidGameRedlightGreenlight" passhref><a className={styles.unterseiten}>Squid Game Redlight Greenlight</a></Link></p>*/}
          {/*<p><Link href="/CSSBoxModel" passhref><a className={styles.unterseiten}>CSS Box Model</a></Link></p>*/}
          </div>
    </body>
    </div>
  
}
