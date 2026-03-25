import { useState } from "react"

export default function Baller(){
    const [ball, setBalls] = useState(0);

    const handleBall = () =>{
        const updatedBall = ball + 1;
        setBalls(updatedBall);
    }
    const handleNOBall = ()=>{
        const updatedBall = ball + 0;
        alert("NoBall");
        setBalls(updatedBall);
    }

    return(
        <div>
            <h3>Player: Pagla Baller</h3>
            {
                ball > 5 && <p>1 Over</p>
            }
            <h1>Ball:{ball}</h1>
            <button onClick={handleBall}>Ball</button>
            <button onClick={handleNOBall}>No Ball</button>
        </div>
    )
}