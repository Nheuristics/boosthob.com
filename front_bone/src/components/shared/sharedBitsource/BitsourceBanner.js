
import React from 'react'
import '../../../assets/css/sharedBitsource/bitsourcebanner.css'


export default function BitsourceBanner() {
    return (
        <React.Fragment>
            <div className='bitsourcebanner-Banner'>
                <div className='container-fluid custom-container'>
                    <div className="row">
                        <div className="col-lg-6 " style={{position: "static"}}>
                            <div className="row bitsourcebanner-healine">
                                <div className="col-lg-12" style={{position: "static"}}>
                                    <p className="bitsourcebanner-healineDesc">BitSource <span className="horizontalLine" > _________</span> </p>
                                </div>
                            </div>
                            <p className="bitsourcebanner-nextHeadline">
                                Develop with Bitsource & get notifications to reviewers
                            </p>
                            <p className="bitsourcebanner-nextHeadlineDesc">
                                Develop with Bitsource & get notifications to reviewers
                            </p>
                            <button type="text" className="btn btn-primary bitsourcebanner-button_fwc_pa_banner marginTop20">Switch to official website</button>
                        </div>
                    </div>
                </div>
            </div>

    </React.Fragment>


    )
}