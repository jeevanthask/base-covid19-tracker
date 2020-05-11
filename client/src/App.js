import React from 'react'
import Navbar from "./components/navbar/navbar";
import Symptoms from "./components/symptoms/symptoms";
import Howtoprevent1 from "./components/howtoprevent/howtoprevent1";
import Howtoprevent2 from "./components/howtoprevent/howtoprevent2";
import Currenttime from "./components/time/currenttime";
import Reactloading from "./components/react-loading/reactloading";
import Genderpiechart from "./components/genderdistribution/genderpiechart";
import App2 from "./components/globallargeapp/App";
import Map from "./components/map/map";
import Localhospitalindividuals from "./components/totallocalindividulasinhospitals/localhospitalindividuals";
import Foreignhospitalindividuals from "./components/totallocalindividulasinhospitals/foreignhospitalindividuals";
import Currentlocalhospitalindividuals
    from "./components/totallocalindividulasinhospitals/currentlocalhospitalindividuals";
import Currentforeignhospitalindividuals
    from "./components/totallocalindividulasinhospitals/currentforeignhospitalindividuals";
import Localnewcases from "./components/newupdates/localnewcases";
import Globalnewcases from "./components/newupdates/globalnewcases";
import Districtdistribution from "./components/districdistribution/districtdistribution";
import Sltotalcasesbreakdown from "./components/sltotalcasesbreakdown/sltotalcasesbreakdown";
import Rendercards from "./components/cards/rendercards";
import './style/appstyle.module.css'
import Rendernewupdates from "./components/newupdates/rendernewupdates";
import Essentailcontacts from "./components/essentialcontacts/essentailcontacts";
import Footer from "./components/footer/footer";
import Coronahistory from "./components/coronahistory/coronahistory";
import Newsymptoms from "./components/coronahistory/newsymptoms";
import FatalityRateComparison from "./components/fatalityratecomparison/fatality rate comparison";
import Growthrate from "./components/growthrate/growthrate";
import Recoveryrate from "./components/recoveryrate/recoveryrate";
import Currentnews from "./components/currentnews/currentnews";


class App extends React.Component {

    constructor() {
        super()
        this.state = {
            data: null
        }
    }

    componentDidMount() {
        let data = fetch('https://www.healthpromo.gov.lk/api/get-current-statistical').then((resp) => {
            resp.json().then((res) => {
                this.setState({
                    data: res.data
                })
            })
        })
    }

    render() {
        if (this.state.data) {
            return (
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 m-2">
                            <Navbar/>
                        </div>
                    </div>

                    <div className="row ">
                        <div className="col-md-12 m-2 ">
                            <Currenttime/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 m-2">
                            <Rendercards data={this.state.data}/>
                        </div>
                    </div>

                    <div className="row p-2" style={{marginTop: 10}}>
                        <div className="col-md-6">
                            <Coronahistory/>
                        </div>

                        <div className="col-md-6">
                            <Newsymptoms/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 m-2">
                            <App2/>
                        </div>
                    </div>

                    <div className="row" style={{marginTop: 10}}>

                        <div className="col-md-12 text-center m-2">
                            <h4>How To Prevent</h4>
                        </div>
                        <div className="col-md-6">
                            <Howtoprevent1/>
                        </div>
                        <div className="col-md-6">
                            <Howtoprevent2/>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-md-6"><Sltotalcasesbreakdown data={this.state.data}/></div>
                        <div className="col-md-6"><Genderpiechart/></div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 m-2">
                            <Localhospitalindividuals data={this.state.data}/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 m-2">
                            <Foreignhospitalindividuals data={this.state.data}/>
                        </div>
                    </div>

                    <div className="row ">
                        <div className="col-md-6 text-center col-sm-12">
                            <Currentnews/>
                        </div>
                        <div className="col-md-6 text-center col-sm-12">
                            <Recoveryrate/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 m-2">
                            <Currentlocalhospitalindividuals data={this.state.data}/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 m-2">

                        </div>
                    </div>

                    <div className="row ">
                        <div className="col-md-6 text-center col-sm-12">
                            <FatalityRateComparison/>
                        </div>
                        <div className="col-md-6 text-center col-sm-12">
                            <Growthrate/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-12">
                                    <Districtdistribution/>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <Rendernewupdates data={this.state.data}/>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <Essentailcontacts/>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <Map/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <Footer/>
                        </div>
                    </div>
                </div>

            )
        } else {
            return (
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4"><Reactloading/></div>
                    <div className="col-md-4"></div>

                </div>
            )
        }

    }
}

export default App;
