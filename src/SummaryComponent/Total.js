import React from "react";

function Total(props){


    const total = Object.keys(props.selectedFeatures)
          .reduce((acc, curr) => acc + props.selectedFeatures[curr].cost, 0); 

    return (
    
        <div className="summary__total">
        <div className="summary__total__label">Your Price: </div>
        <div className="summary__total__value">
        { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
            .format(total) }
        </div>
        </div>
    )

}

export default Total;
