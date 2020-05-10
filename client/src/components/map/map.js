import React from "react";
import HeatMap from '../../images/heatmap.png'
import './map.module.css'

class Map extends React.Component {
    render() {
        return (
            <div>
                <div className="row p-3" style={{marginTop: 2}}>
                    <div className="p-3" style={{backgroundColor: '#FFFFFF'}}>
                        <h3 className="text-center">Heat Map</h3>
                        <div>
                            <img src={HeatMap}/>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Map