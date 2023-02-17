import React, { useState } from "react";

export default function Hook() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Voce clicou {count} vezes</p>
            <button onClick={() => setCount(count + 1)}>
                CLICA
            </button>
        </div>
    );
}