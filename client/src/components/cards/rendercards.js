import React from "react";
import LocalCard from "./local";
import GlobalCard from "./global";
import './cards.module.css'

class Rendercards extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isTrue: true
        }
    }

    returnLocalCount = (props) => {
        return (
            <LocalCard data={this.props.data}/>
        )
    }

    returnGlobalCount = (props) => {
        return (
            <GlobalCard data={this.props.data}/>
        )
    }

    handleLocal = () => {
        this.setState({
            isTrue: !this.state.isTrue
        })
    }

    handleGlobal = () => {
        this.setState({
            isTrue: !this.state.isTrue
        })
    }

    render() {

        return (
            <dvi className="card-container">
                <div>
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-primary" onClick={this.handleGlobal}>Global</button>
                        <button type="button" className="btn btn-warning" onClick={this.handleLocal}>Local</button>
                    </div>

                </div>
                  
                <div style={{marginTop:10}}>
                    {
                        this.state.isTrue ? this.returnGlobalCount(this.props) : this.returnLocalCount(this.props)
                    }
                </div>
            </dvi>
        )
    }
}

export default Rendercards