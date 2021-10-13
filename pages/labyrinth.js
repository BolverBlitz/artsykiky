import  styles  from "../styles/labyrinth.module.scss"
import  Head from 'next/head'

function Labyrinth() {
    return <div className={styles.wrapper}>
        <Head>
            <title>Labyrinth</title>
        </Head>
        <div className={styles.intro}>
            <h2>Labyrinth by artsykiky</h2>
            <p>Reach the end from the beginning.</p>
            <p>Click on the numbers as you pass them.</p>
            <p><input id="username" type="text" placeholder="Your Username" /></p>
        </div>

        <ul className={styles.area}>
            <li className={styles.first}></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <input id="second" type="checkbox" value="1"/>
            <li className={styles.level2}></li>
            <li className={styles.level2}></li>
            <li className={styles.level2}></li>
            <li className={styles.level2}></li>
            <li className={styles.level2}></li>
            <input id="third" type="checkbox" value="2"/>
            <li className={styles.level3}></li>
            <li className={styles.level3}></li>
            <li className={styles.level3}></li>
            <li className={styles.level3}></li>
            <li className={styles.level3}></li>
            <input id="fourth" type="checkbox" value="3"/>
            <li className={styles.level4}></li>
            <li className={styles.level4}></li>
            <li className={styles.level4}></li>
            <li className={styles.level4}></li>
            <li className={styles.level4} onMouseOver={handleWin}></li>
            <li className={styles.level4}></li>

            <li className={styles.empty}></li>
            <li className={styles.error}>
                <h1>The greatest failure in life is to stop trying.</h1>
            </li>
            <li className={styles.exit}>
                <h1>Winning doesn´t always mean being first. Winning means you´re doing better than you´ve ever done before.</h1>
            </li>
        </ul>
        <p id="Winners"><button onClick={handleScore}>LoadScore</button></p>
    </div>
}

const handleWin = async (e) =>  {
    const getUrl = window.location;
    const baseUrl = getUrl.protocol + "//" + getUrl.host + "/";
    const Username = document.getElementById('username').value

    if(Username.length >= 1){
        const result = await fetch(`${baseUrl}/api/labyrinth/handleWin?Username=${Username}`);
        if(result.status === 200){
            console.log(`Added Username ${Username}`)
            fetch(`${baseUrl}/api/labyrinth/getUsers`)
            .then((res) => { 
                return res.json() 
            })
            .then((jsonData) => {
                let UserScoreList = []
                jsonData.map( User => {
                    UserScoreList.push(User.username)
                })
                document.getElementById('Winners').innerHTML = UserScoreList.join('<br>')
            })
            .catch((err) => {
                console.error(err);
            });
        }else if(result.status === 400){
            alert("Username already exists")
        }
    }else{
        alert("No username was given")
    }
}

const handleScore = (e) =>  {
    const getUrl = window.location;
    const baseUrl = getUrl.protocol + "//" + getUrl.host + "/";

    fetch(`${baseUrl}/api/labyrinth/getUsers`)
    .then((res) => { 
        return res.json() 
      })
      .then((jsonData) => {
          let UserScoreList = []
        jsonData.map( User => {
            UserScoreList.push(User.username)
        })
        document.getElementById('Winners').innerHTML = UserScoreList.join('<br>')
      })
      .catch((err) => {
        console.error(err);
      });
}

export default Labyrinth