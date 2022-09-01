
import React from 'react'
import '../../../assets/css/sharedHome/supportinglanguages.css'


export default function SupportingLanguages() {
    return (
        <React.Fragment>
            <div className='container'>
                <div className='text-center marginTop5'>
                    <img src='assets/images/supportinglangauges.svg' ></img>
                </div>
                <div className='text-center marginTop3'>
                    <a href='dwd' className='SL-HLine marginTop5'>
                        Explore and get fluent in 8 programming languages
                    </a>
                    <div className='row marginTop5' >
                        <div className='col-lg-3' style={{position: "static"}}>
                            <img src='assets/images/cpp.svg' />
                            <div className='text-center marginTop5'>
                                <a href='#' className='SL-LName'>C++20</a>
                            </div>
                        </div>
                        <div className='col-lg-3' style={{position: "static"}}>
                            <img src='assets/images/c.svg' />
                            <div className='text-center marginTop5'>
                                <a href='#' className='SL-LName'>C-98</a>
                            </div>
                        </div>
                        <div className='col-lg-3' style={{position: "static"}}>
                            <img src='assets/images/python.svg' />
                            <div className='text-center marginTop5'>
                                <a href='#' className='SL-LName'>Python-3.6</a>
                            </div>
                        </div>
                        <div className='col-lg-3' style={{position: "static"}}>
                            <img src='assets/images/csharp.svg' />
                            <div className='text-center marginTop5'>
                                <a href='#' className='SL-LName'>C#</a>
                            </div>
                        </div>
                    </div>
                    <div className='row marginTop5'>
                        <div className='col-lg-3' style={{position: "static"}}>
                            <img src='assets/images/java.svg' />
                            <div className='text-center marginTop5'>
                                <a href='#' className='SL-LName'>Java</a>
                            </div>
                        </div>
                        <div className='col-lg-3' style={{position: "static"}}>
                            <img src='assets/images/javascript.svg' />
                            <div className='text-center marginTop5'>
                                <a href='#' className='SL-LName'>Javascript</a>
                            </div>
                        </div>
                        <div className='col-lg-3' style={{position: "static"}}>
                            <img src='assets/images/go.svg' />
                            <div className='text-center marginTop5'>
                                <a href='#' className='SL-LName'>Go Lang</a>
                            </div>
                        </div>
                        <div className='col-lg-3' style={{position: "static"}}>
                            <img src='assets/images/ruby.svg' />
                            <div className='text-center marginTop5'>
                                <a href='#' className='SL-LName'>Ruby</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>


    )}