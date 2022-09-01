
import React from 'react'
import '../../../assets/css/sharedLogin/bannerlogin.css'


export default function BannerLogin() {
    return (
        <React.Fragment>
        <div className='loginBanner'>
            <div className='container-fluid logincustom-container'>
                
                <div className='text-center loginhealine5'>
                    <p className='logingithubhealineDesc '>Code practice and mentorship for everyone</p>
                    <button type="text" className="btn btn-primary github_button_fwc_pa_banner ">
                        <p style={{marginLeft:"10px"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                            </svg>
                        </p>
                        
                        Sign Up with Github
                    </button>
                </div>

                <div className="row">
                    
                    {/* <div className='col-lg-1 vr login-vr1 loginhealine'></div> */}
                    <div className="col-lg-6 text-center" style={{position: "static"}}>
                        <div className="row loginhealine">
                            <div className="col-lg-12" style={{position: "static"}}>
                                <p className="loginhealineDesc">FOR EMPLOYERS <span className="horizontalLine" > _________</span> </p>
                            </div>
                            
                        </div>
                        <p className="nextHeadline120">
                            IMPROVE YOUR CODING PRACTICE
                        </p>
                        <p className='nextHeadline110'>
                            The industry’s #1 website for technical interview prep,<br/>
                             coding challenges, and expert videos.
                        </p>
                        <div className='row'>
                            <div className='col-lg-7 text-right'>
                                <button type="text" className="btn btn-primary loginbutton_fwc_pa_banner marginTop5 "> Try a free trial for 1 Month</button>
                            </div>
                            <div className='col-lg-1 text-center loginhealine3'>
                                <p className=" login_p_fwc_pa_banner "> or</p>
                            </div>
                            <div className='col-lg-4 text-left loginhealine3'>
                                <a href='#' className=" login_a_fwc_pa_banner  ">Learn more</a>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-lg-6 text-center" style={{position: "static"}}>
                        <div className="row loginhealine">
                            <div className="col-lg-12" style={{position: "static"}}>
                                <p className="loginhealineDesc">FOR DEVELOPERS <span className="horizontalLine" > _________</span> </p>
                            </div>
                            
                        </div>
                        <p className="nextHeadline120">
                            IMPROVE YOUR CODING PRACTICE
                        </p>
                        <p className='nextHeadline110'>
                            The industry’s #1 website for technical interview prep,<br/>
                             coding challenges, and expert videos.
                        </p>
                        <div className='row'>
                            <div className='col-lg-6 text-right'>
                                <button type="text" className="btn btn-primary loginbutton_fwc_pa_banner marginTop5 ">Try a free challenge</button>
                            </div>
                            <div className='col-lg-1 text-center loginhealine3'>
                                <p className=" login_p_fwc_pa_banner "> or</p>
                            </div>
                            <div className='col-lg-5 text-left loginhealine3'>
                                <a href='#' className=" login_a_fwc_pa_banner  ">Learn more</a>
                            </div>
                        </div>
                    </div>
                    {/* <img src='assets/images/login_banner.svg' className='login-img-banner'></img> */}

                </div>
            </div>

        </div>

    </React.Fragment>



    )
}