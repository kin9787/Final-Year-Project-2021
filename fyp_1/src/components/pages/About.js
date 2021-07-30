//import libraries
import React from 'react';
import '../../App.css';
import Navbar from '../Navbar';//components
import Footer from '../Footer';
import './About.css';

//about page
function About() {
  return (
    <>
      <Navbar />
      <body id="page-top">
        <header class="masthead">
            <div class="container px-4 px-lg-5 h-100">
                <div class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                    <div class="col-lg-8 align-self-end">
                        <h1 class="text-white font-weight-bold">The all new Intelligent Property Website</h1>
                        <hr class="divider" />
                    </div>
                    <div class="col-lg-8 align-self-baseline">
                        <p class="text-white-75 mb-5">Introducing the all new intelligent property website where you can find the best possible price available! Property Platform is a intelligent property website which allow users to both browse for houses uploaded by anyone willing to sell house while using the prediction feature within the website to find the best price for the house he or she desired. Interested sellers can register for an account in order to upload their properties to the website. It is recommended to first use the prediciton model in the website to find the best price in order to incresae the chance of attracting potential buyers. </p>
                        <a class="btn btn-primary btn-xl" href="#about">Read More</a>
                    </div>
                </div>
            </div>
        </header>


        <section class="page-section bg-primary" id="about">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-lg-8 text-center">
                        <h2 class="text-white mt-0">We've got what you need!</h2>
                        <hr class="divider divider-light" />
                        <p class="text-white-75 mb-4">Intelligent house price prediciton is a new feature in our intelligent property website where users can use this feature to find out the current market price trend before making any big decision on purchasing or selling any houses. Our house price predictor uses the latest Aritificial Intelligent technique to predict the price which has an accuracy over 70%. To use this website while fully utlize it, user can simply go to the "Price Forecast" page and fill in the critiria for their desire home and press predict. Our intelignet predictor will recommend the best house price and its range for you so you can negotiate with the seller or if you are an seller, you can you the price to sell your house at maximum profit without worriying on setting a price to high.</p>
                        <a class="btn btn-light btn-xl" href="#services">Let's Start!</a>
                    </div>
                </div>
            </div>
        </section>


        <section class="page-section" id="services">
            <div class="container px-4 px-lg-5">
                <h2 class="text-center mt-0">Serving you Is our priority</h2>
                <hr class="divider" />
                <div class="row gx-4 gx-lg-5">
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <div class="mb-2"><i class="bi-gem fs-1 text-primary"></i></div>
                            <h3 class="h4 mb-2">Intelligent Prediction</h3>
                            <p class="text-muted mb-0">Our house price predictor is armed with the latest machine learning technology to predict the price trend.</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <div class="mb-2"><i class="bi-laptop fs-1 text-primary"></i></div>
                            <h3 class="h4 mb-2">Up to Date</h3>
                            <p class="text-muted mb-0">All prices are predicted real time.</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <div class="mb-2"><i class="bi-globe fs-1 text-primary"></i></div>
                            <h3 class="h4 mb-2">Free for All</h3>
                            <p class="text-muted mb-0">It's free!</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <div class="mb-2"><i class="bi-heart fs-1 text-primary"></i></div>
                            <h3 class="h4 mb-2">Made with Love</h3>
                            <p class="text-muted mb-0">And coffee and a little bit of strain hair</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>



        <script src="https://cdnjs.cloudflare.com/ajax/libs/SimpleLightbox/2.1.0/simpleLightbox.min.js"></script>


        <script src="js/scripts.js"></script>

    </body>

      <Footer />
    </>
  );
}

export default About;
