
import React from 'react'
import '../../../assets/css/sharedTeamwork/teamworkbanner.css'


export default function TeamworkBanner() {
    return (
        <React.Fragment>
            <div className='teamwork-Banner'>
                <div className='container-fluid custom-container'>
                    <div className="row">
                        <div className="col-lg-6 " style={{position: "static"}}>
                            <div className="row teamwork-healine">
                                <div className="col-lg-12" style={{position: "static"}}>
                                    <p className="teamwork-healineDesc">Teamwork <span className="horizontalLine" > _________</span> </p>
                                </div>
                            </div>
                            <p className="teamwork-nextHeadline">
                                Build your team with us
                            </p>
                            <p className="teamwork-nextHeadlineDesc">
                                Best way to build your best developers team, perfect opportunity to projects 
                            </p>
                            <button type="text" className="btn btn-primary teamwork-button_fwc_pa_banner marginTop20">Build your team</button>
                        </div>
                    </div>
                </div>
            </div>

    </React.Fragment>


    )
}