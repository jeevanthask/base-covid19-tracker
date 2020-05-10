import React from "react";
import './currenttime.module.css'

class Currenttime extends React.Component{

    MyFunction() {
        var tempDate = new Date();
        var date = tempDate.getFullYear() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDate() +' '+ tempDate.getHours()+':'+ tempDate.getMinutes()+':'+ tempDate.getSeconds();
        const currDate = "Last Updated On : "+date;
        return (
            <p>{currDate}</p>
        );
    }

    render() {
        return(
            <div className="row">
                <div className="col-md-12">
                    <span align="center" style={{fontSize:20}}>{this.MyFunction()}</span>
                </div>
            </div>
        )
    }
}

export default Currenttime