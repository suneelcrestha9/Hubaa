import React from 'react'
import './Home.css'
import Product from './Product'
import Category from './Category'
import Aboutus from './Aboutus'
export default function Home() {
  return (
    <div>
          <div className="homepage-container">
              <div className="home">
                <div className="stayreal-video">
                  <img src="/images/huba.jpg" alt="" />
                </div>
                <div className="video-text">
                    <h1>A STYLE FOR EVERY</h1>
                    <h1>STYLE</h1>

                      <div className="buttons">
                        <div className="new-btn">
                          <button><a href="/">New</a></button>
                        </div>
                        <div className="contact-btn">
                        <button><a href="/">Contact Us</a></button>
                        </div>
                      </div>
                </div>
              </div>

                  <div className="home-photo">
                    <img src="/images/phome.jpg" alt="" />
                  </div>

                    <div className="logo-home">STAY REAL</div>
                    <div className="container-made">
                      <h1>MADE IN NEPAL</h1>
                      <p> Exudes a strength that stems from the rich tapestry of our culture</p>
                    </div>


                    <div className="collagepic">
                      <div className="collage-photos">

                            <div className="collage-photos-content">
                                <div className="platform">
                                  Platform
                                </div>
                                <div className="black-box">
                                  <div className="black-box-text">
                                    <h1>EXPLORE</h1>
                                    <h1>THE</h1>
                                    <h1>REAL WORLD</h1>
                                  </div>
                                  <div className="black-button-box">
                                  <button className='black-box-btn' type='button'>Start Now</button>
                                  <img src="/images/right-arrow.png" alt="" />
                                  </div>
                                </div>
                            </div>
                            
                            <div className="collage-pic-boxmain-one">
                              <div className="collage-pic-box-one">
                                  <img src="/images/one.webp" alt="" />
                                  </div>

                                  <div className="collage-pic-box-two">
                                    <img src="/images/two.webp" alt="" />
                                  </div>
                            </div>
                            <div className="collage-pic-overlay-box">
                              <div className="collage-pic-box-three">
                                <img src="/images/three.webp" alt="" />
                              </div>

                              <div className="collage-pic-box-four">
                                <img src="/images/four.webp" alt="" />
                              </div>
                            </div>
                    </div>
              </div>
            </div>

            <div className="stay-connected">
                    <div className="phone-image">
                      <img src="/images/phone.webp" alt="" />
                    </div>

                <div className="stay-conntectd-rightside">
                      <div className="stay-conntected-text">
                        <h1>STAY</h1>
                        <h1>CONNECTED</h1>
                        <p>Did you know you can also order from us directly on Instagram? Just browse our page, find the items you love, and send us a direct message to place your order. We'll take care of the rest and ensure your new clothes are delivered straight to your doorstep</p>

                        <p>To stay updated with our latest collections, follow us on Instagram and TikTok. Our social media pages are a great way to discover new styles, get inspired by our fashion influencers, and stay connected with the HUBA community.</p>
                      </div>

                      <div className="social-media">
                          <div className="social-media-title">
                            Stay In Touch
                          </div>
                          <div className="socail-media-icons">
                              <a href="https://www.facebook.com/"><img src="images/instagram.png" alt="" /></a>
                              <a href="https://www.facebook.com/"><img src="images/tiktok.png" alt="" /></a>
                              <a href="https://www.facebook.com/"><img src="images/facebook.png" alt="" className='fb' /></a>
                          </div>
                      </div>
                      
                </div>
              </div>
              <div className="line"></div>

              <div className="product-content">
                  <div className="product-left-content">
                    <h1>STAY REAL</h1>
                    <h1>SPRING / SUMMER</h1>
                    <h1>COLLECTION 23</h1>
                  </div>
                  <div className="product-right-content">
                    <p>Discover a world of style, innovation, and unparalleled craftsmanship with our latest Spring Summer 23 Collection. At HUBA, we are passionate about creating exceptional fashion pieces that not only make a statement but also empower individuals to express their unique personalities. With our carefully curated range of clothing and accessories, we invite you to embrace the spirit of the season and elevate your wardrobe to new heights.</p>

                  <div className="product-btn-box">
                    <button className='product-btn'>Explore Now</button>
                  </div>
                  </div>

              </div>

                <div className="home-product-page">

                        <div className="productcard">
                          <Product  url={"/images/product1.webp"}  producttitle={"HUBA COPPER MONOCHROME SET"}
                          producttype={"S/S NIKE DROP 2"} />
                        </div>
                        
                        <div className="productcard">
                          <Product  url={"/images/product2.webp"}  producttitle={"HUBA gold MONOCHROME"}
                          producttype={"S/S LATERNA DROP 2"} />
                        </div>

                        <div className="productcard">
                          <Product  url={"/images/product3.webp"}  producttitle={"STAY REAL  MONOCHROME SET"}
                          producttype={"S/S COLLECTION DROP 2"} />
                        </div>

                        <div className="productcard">
                          <Product  url={"/images/sm.jpg"}  producttitle={"STAY REAL COPPER  SET"}
                          producttype={"BS REVERSE DROP 2"} />
                        </div>

                        <div className="productcard">
                          <Product  url={"/images/product5.webp"}  producttitle={"HUBA COPPER MONOCHROME SET"}
                          producttype={"S/S SUIIIIII DROP 2"} />
                        </div>

                        <div className="productcard">
                          <Product  url={"/images/product6.webp"}  producttitle={"HUBA SILVER MONOCHROME "}
                          producttype={"STAY REAL AIR 2"} />
                        </div>


                </div>

                <div className="Category-main">
                    <div className="category-left">
                      <div className="category">
                        <Category url="/images/male.webp"  CategoryName="Male" />
                      </div>

                      <div className="category">
                        <Category url="/images/female.webp"  CategoryName="Female" />
                      </div>
                    </div>

                    <div className="category-right">
                      <div className="category-subbox">
                          <h1>A</h1>
                          <h1>STYLE</h1>
                          <h1>FOR</h1>
                          <h1>EVERYSTORY</h1>

                          <p>STAY REAL's tagline, "A Style for Every Story," captures our belief that fashion is not just about clothes, but also about the story that they tell. We offer a wide range of styles and collections, each designed to capture the essence of your individuality and ensure that you stay on-trend and fashionable.</p>
                        </div>
                      </div>
                </div>

                <div className="services">
                  <h1>OUR SERVICES</h1>
                  <p>Embrace the HUBA experience and let us elevate your journey towards fashion.</p>
                </div>


                <div className="aboutus-box">
                  <div className="">
                    <Aboutus  url={"images/delivery.webp"}  title={"D2D Delivery"} description={"We provide Door to Door delivery in almost all part of World."} />
                  </div>

                  <div className="">
                    <Aboutus  url={"images/mountain.webp"}  title={"Made in Nepal"} description={"All our products are proudly Made in Nepal."} />
                  </div>

                  <div className="">
                    <Aboutus  url={"images/hoodie.webp"}  title={"Exchange and Refund Policy"} description={"Within 24 hours of delivery, if our product does not exchange and refund is available"} />
                  </div>
                </div>
    </div>
  )
}
