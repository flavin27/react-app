import React, {useState, useEffect} from "react";

export default function Update() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        document.title = `Voce clicou ${count} vezes`
    })
    return (
        <div>
            <p>Vooce clicou {count} vezes</p>
            <button onClick={() => setCount(count + 1)}>
            CLica
            </button>
        </div>
    )
} 