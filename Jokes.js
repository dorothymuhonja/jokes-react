import React from "react";

export default function Jokes(props) {
    return (
        <div className="container">
            {props.setup && <h3>Setup: {props.setup}</h3>}
            <p>Punchline: {props.punchline}</p>
            <hr/>
        </div>

    )
}