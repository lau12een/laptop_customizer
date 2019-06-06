import React from "react";


class SummaryList extends React.Component{


    render() {

        return (
        
        Object.keys(this.props.selectedFeatures)
              .map(key => <div className="summary__option" key={key}>
                <div className="summary__option__label">{key}  </div>
                <div className="summary__option__value">{this.props.selectedFeatures[key].name}</div>
                <div className="summary__option__cost">
                  { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                      .format(this.props.selectedFeatures[key].cost) }
                </div>
            </div>)

            
        )

    }
}

export default SummaryList;