import React from "react";

class List extends React.Component{

    render(){
        
        return (

            this.props.features[this.props.featureKey].map((item, index) => {
                const selectedClass = item.name === this.props.selectedFeatures[this.props.featureKey].name ? 'feature__selected' : '';
                const featureClass = 'feature__option ' + selectedClass;
                return <li key={index} className="feature__item">
                    <div className={featureClass}
                    
                    onClick={e => this.props.updateFeature(this.props.featureKey, item)}>
                        { item.name }
                        ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                        .format(item.cost) })
                    </div>
                </li>
            })
        )

    }

}

export default List;