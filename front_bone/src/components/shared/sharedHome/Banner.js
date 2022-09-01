
import React from 'react'
import '../../../assets/css/sharedHome/banner.css'


export default function Banner() {
    return (

        <React.Fragment>
        <div className='bubHubBanner'>
            <div className='container-fluid custom-container'>
                <div className="row">
                    <div className="col-lg-6 " style={{position: "static"}}>
                        <div className="row bubHubhealine">
                            <div className="col-lg-12" style={{position: "static"}}>
                                <p className="bubHubhealineDesc">BoostHub <span className="horizontalLine" > _________</span> </p>
                            </div>
                            {/* <div className="col-lg-9" style={{position: "static"}}>
                                <div className="horizontalLine"></div>
                            </div> */}
                        </div>
                        <p className="nextHeadline">
                            {/* THE REVOLUTION IN DIGITAL RECRUITMENT */}
                            BEST PRACTICE ON BOTH CODING STYLE & PERFORMANCE
                        </p>
                        {/* <p className="bubHubBartag">BUSINESS DEVELOPMENT</p> */}
                        <button type="text" className="btn btn-primary button_fwc_pa_banner marginTop20">GET STARTED FOR FREE</button>
                        {/* <div className="progress">
                            <div className="progress-bar bg-success progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "90%"}}>
                            </div>
                        </div> */}
                    </div>
                    <div className="col-lg-6 bubHubMarginLeft" style={{position: "static"}}>
                        <p className="bubHubdesc" style={{position: "static"}}>
                            Accelerate The Hiring Process and Boost
                            The Success Rate of Candidates
                        </p>
                        <div className='row' >
                            <div className='col-lg-6' style={{position: "static"}}>
                                <p className='thsn-element-title'> Proficient Coding Style</p>
                                <p className='thsn-element-desc'>
                                    Manage your professional identity and engage with your professional network.
                                    Access knowledge, insights and opportunities. 
                                    
                                </p>
                            </div>
                            <div className='col-lg-6' style={{position: "static"}}>
                                <p className='thsn-element-title' style={{position: "static"}}> Bit Source </p>
                                <p className='thsn-element-desc' style={{position: "static"}}> Open Source Code Repository</p>
                            </div>
                            
                        </div>
                        <div className='linePartition'></div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-lg-6' style={{position: "static"}}>
                        <div className="row bubHub-margin" >
                            {/* <img src="assets/images/fstg.jpg" class="bubHub-img" ></img> */}
                        </div>
                    </div>
                    <div className='col-lg-6' style={{position: "static"}}>
                        <div className='row'>
                            <div className='col-lg-6' style={{position: "static"}}>
                                <ul className='bubHubchecks' >
                                    {/* <li ><i className='fa fa-check'></i>Artificial Intelligence</li>
                                    <li ><i className='fa fa-check'></i>Natural Language processing</li>
                                    <li ><i className='fa fa-check'></i>Visual Intelligence</li>
                                    <li ><i className='fa fa-check'></i>Machine Learning</li> */}
                                </ul>
                            </div>
                            <div className='col-lg-6' style={{position: "static"}}>
                                <div className='bubHubreleasingcard' >
                                    {/* <img src='assets/images/bioreleasedate.png' style={{width: "100%"}}></img> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </React.Fragment>


// {/*         

//         // <React.Fragment>

//         <div className='container-fluid HomeBanner'>
//             <div className='container color12'> */}

                

                // {/* <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                //     <div className="carousel-inner">
                //         <div className="carousel-item active">
                //             <img src="../../assets/images/bankin-&-fincal-image-banner2.jpg" className="d-block w-510" alt="..."/>
                //         </div>
                //         <div className="carousel-item">
                //             <img src="../../assets/images/banking-&-fn-Ser-sec-03-img01.jpg" className="d-block w-50" alt="..."/>
                //         </div>
                //         <div className="carousel-item">
                //             <img src="../../assets/images/bankin-&-fincal-image-banner2.jpg" className="d-block w-50" alt="..."/>
                //         </div>
                        
                //     </div>
                //     <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                //         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                //         <span className="visually-hidden">Previous</span>
                //     </button>
                //     <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                //         <span className="carousel-control-next-icon" aria-hidden="true"></span>
                //         <span className="visually-hidden">Next</span>
                //     </button>

                // </div> */}
// {/* 

//             </div>
//         </div>
//         </React.Fragment> */}

    )
}