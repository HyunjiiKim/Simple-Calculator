import React from "react";

const Viewer = ({count}) => {
    return(
        <div>
            <h3>The Result: </h3>
            <h3>{count}</h3>
        </div>
    );
}

export default Viewer;