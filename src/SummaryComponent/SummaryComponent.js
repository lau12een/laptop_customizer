import React from "react";
import SummaryList from "./SummaryList";
import Total from "./Total";


class SummaryComponent extends React.Component{


    render() {

        return (
            <section className="main__summary">
            <h3>NEW GREENLEAF 2018</h3>
                <SummaryList selectedFeatures = {this.props.selectedFeatures}/>
                <Total selectedFeatures= {this.props.selectedFeatures}/>
            </section>
            
        )

    }
}

export default SummaryComponent;