import React from "react";

export default function jokes({setup, punchLine}) {
    return(
        <div className="jokes">
            {setup && <p className="joke--setup">setup: {setup}</p>}
            {punchLine && <p className="joke--punchLine">punchLine: {punchLine}</p>}
            <hr />
        </div>
    )
}