import Head from 'next/head'
import React from "react";
import SlickHoneymoonSlider from '../components/Slick_Sliders/SlickDestinationsSlider';



export default function Home() {

    return (
        <div>
           
            <div>

             

              

                <section className="trending pb-4 pt-1" style={{ backgroundImage: "url(images/shape-1.png)", backgroundPosition: "center" }}>
                    <div className="container delightfulContainer" >
                        <div className="section-title mb-6  mx-auto text-center">
                            <h4 className="mb-1 theme1">Slider Image </h4>

                        </div>
                        <div className='container'>
                            <div className="col-lg-12 ">
                                <SlickHoneymoonSlider
                                   package1Image="/images/image/Data.jpg"
                                   package2Image="/images/image/ai ml.jpg"
                                   package3Image="/images/image/app.png"
                                   package4Image="/images/image/web.jpg"
                                   package5Image="/images/image/graphic.jpg"
                                   package6Image="/images/image/mechanical.jpg"
                                  />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="trending pb-4 pt-1" style={{ backgroundImage: "url(images/shape-1.png)", backgroundPosition: "center" }}>
                    <div className="container delightfulContainer" >
                        <div className="section-title mb-6  mx-auto text-center">
                            <h4 className="mb-1 theme1">Service List</h4>
                           
                        </div>
                        <div className='container'>
                            <div className="col-lg-12 ">
                                <SlickHoneymoonSlider
                                    package1Image="/images/image/Data.jpg"
                                    package2Image="/images/image/ai ml.jpg"
                                    package3Image="/images/image/app.png"
                                    package4Image="/images/image/web.jpg"
                                    package5Image="/images/image/graphic.jpg"
                                    package6Image="/images/image/mechanical.jpg"
                                    package1Name="Data Processing"
                                    package2Name="Ai & Ml"
                                    package3Name="App Development"
                                    package4Name="web Development"
                                    package5Name="Graphic Designer"
                                    package6Name="Mechanical Engineer"
                                     />
                            </div>
                        </div>
                    </div>
                </section>
              
                <section className="trending pb-4 pt-1" style={{ backgroundImage: "url(images/shape-1.png)", backgroundPosition: "center" }}>
                    <div className="container delightfulContainer" >
                        <div className="section-title mb-6  mx-auto text-center">
                            <h4 className="mb-1 theme1">Team Member List</h4>
                            <div className='container'>
                            <div className="col-lg-12 ">
                                <SlickHoneymoonSlider
                                    package1Image="/images/image/team.jpg"
                                    package2Image="/images/image/team.jpg"
                                    package3Image="/images/image/team.jpg"
                                    package4Image="/images/image/team.jpg"
                                    package5Image="/images/image/team.jpg"
                                    package6Image="/images/image/team.jpg"
                                    package1Name="Rahul"
                                    package2Name="Akash"
                                    package3Name="Kartik"
                                    package4Name="Ashish"
                                    package5Name="Sachin"
                                    package6Name="Mayank"
                                    package1Designation="Software Engineer" 
                                    package2Designation="Fullstack Developer"
                                    package3Designation="Android Developer" 
                                    package4Designation="Data Scientist" 
                                    package5Designation="Digital Marketing" 
                                    package6Designation="Graphic Designer" 
                                    package1Exeripence="2year" 
                                    package2Exeripence="3year"                                    
                                    package3Exeripence="1year" 
                                    package4Exeripence="4year"
                                    package5Exeripence="3year" 
                                    package6Exeripence="2year"   />
                                    
                                    
                            </div>
                        </div>

                          
                        </div>
                    
                    </div>
                </section>

            </div>
        </div>

    )
}
