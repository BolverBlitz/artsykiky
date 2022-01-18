import { useState } from "react"

const test = () => {
    const [number, setNumber] = useState(0)
    return <>
    <style jsx>{`
    .knopp {
        position: relative;
        z-index: 10;
    }
    .wrapper {
        perspective: 400px;
        height:500px;
        width:500px;
    }
    .front {
        position: absolute;
        background: red;
        width: 100px;
        height: 100px;
        transition: all 1s linear;
        transform: rotateY(${number}deg) translateZ(50px);
        box-shadow: 0 0 0.5em #000a inset;
    }
    .back {
        position: absolute;
        background: red;
        width: 100px;
        height: 100px;
        transition: all 1s linear;
        transform: rotateY(${number}deg) translateZ(-50px);
        box-shadow: 0 0 0.5em #000a inset;
    }
    .cube`}</style>
    <button className="knopp" onClick={()=>setNumber(number => number +100)}>testknopf</button>
    <div className="wrapper">
    <div className="front"/><div className="back"/><div className="left"/><div className="right"/></div></>
}
export default test