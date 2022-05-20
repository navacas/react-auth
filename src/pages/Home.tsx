
import { AiFillStar} from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";

const Home = (props: { name: string }) => {
  
    return (
      <>
        {props.name ? 'Hola ' + props.name : "No haz iniciado sesión"}
          <div className="container" >
                <div className="row justify-content-md-center align-items-center" >
                    <div className="col col-sm-6" >
                        <h1 className="fw-bold mb-3 title-size">Zero Hassle Push to <br/> Talk Conversations</h1>
                        <p className="mb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem officia cum repellat repellendus ipsa, facilis voluptatem at earum saepe iure. Tempore esse rem dolores officiis nostrum deserunt ea veritatis harum!</p>
                        <div className="d-grid gap-2 d-md-block">
                            <button className="btn btn-light btn-lg btn-outline-dark mb-3 me-1" type="button"><i className="icon-play-circle"></i> Demo</button>
                            <button className="btn btn-primary btn-lg mb-3 me-1" type="button">Get Started</button>
                        </div>
                        <div className="row">
                            <div className="col-sm-auto text-start">
                                <img src="./images/perfil-1.svg" className="rounded-circle float-start img-fluid"  alt="" width="40" height="40" />
                                <img src="./images/perfil-1.svg" className="rounded-circle float-start img-fluid"  alt="" width="40" height="40" />
                                <img src="./images/perfil-1.svg" className="rounded-circle float-start img-fluid"  alt="" width="40" height="40" />
                                <img src="./images/perfil-1.svg" className="rounded-circle float-start img-fluid"  alt="" width="40" height="40" />
                                <img src="./images/perfil-1.svg" className="rounded-circle float-start img-fluid"  alt="" width="40" height="40" />
                            </div>
                            <div className="col-sm-auto text-end">
                                <AiFillStar color="yellow" size="2em"/>
                                <AiFillStar color="yellow" size="2em"/>
                                <AiFillStar color="yellow" size="2em"/>
                                <AiFillStar color="yellow" size="2em"/>
                                <AiFillStar color="yellow" size="2em"/> 5.0
                                <p>from 200 + reviewers</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 img-celphone mb-sm-5">
                        <img className="img-fluid" src="./images/phone.png" width="600" alt=""/>
                    </div>
                </div>

                <div className="text-center mt-5">
                  <h1>Great products, faster than ever</h1>
                  <p>Everything you need to build corporate and great products</p>
                  <div className="row justify-content-center bg-light text-primary p-5">
                    <div className="col-sm-3">
                      <h1>400+</h1>
                      <p>projects completed</p>
                    </div>
                    <div className="col-sm-3">
                      <h1>600%</h1>
                      <p>Return of investment</p>
                    </div>
                    <div className="col-sm-3">
                      <h1>10k</h1>
                      <p>global downloads</p>
                    </div>
                  </div>
                </div>

                <div className="mt-sm-5 mb-sm-5 pt-3 pb-3">
                  <div className="row mt-sm-2 align-items-center">
                    <div className="col-sm-6">
                      <AiFillStar color="yellow" size="2em"/>
                      <AiFillStar color="yellow" size="2em"/>
                      <AiFillStar color="yellow" size="2em"/>
                      <AiFillStar color="yellow" size="2em"/>
                      <AiFillStar color="yellow" size="2em"/>
                      <h1 className="fw-bold mt-sm-4">We've really speed up our <br/> workflow with Company <br/> and haven't looked back.</h1>
                      <img src="./images/perfil-1.svg" alt="" className="rounded-circle float-start img-fluid" width="40"/> &nbsp; Katherine Moss
                      <p className="fw-light">&nbsp; Project Manager, Layers</p>
                    </div>
                    <div className="col-sm-6">
                      <div className="row">
                        <div className="col text-center">
                          <img src="./images/cartoon-giraffe-7178753_1280.jpg" alt="" width="140" className=" align-bottom me-1" />
                          <img src="./images/lake-6785552_1280.jpg" alt="" width="140" className="" />
                        </div>
                        <div className="w-100 mt-2"></div>
                        <div className="col text-center">
                          <img src="./images/river-7190415_1280.jpg" alt="" width="140" className=" align-top me-1" />
                          <img src="./images/tourist-4400871_1920.jpg" alt="" width="140" className="me-1" />
                          <img src="./images/wedding-6674650_1280.jpg" alt="" width="140" className="align-top" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
          </div>

          <div className="bg-light pb-5">
            <div className="container">
              <h1 className="fw-bold text-center p-5">Frequenly asked questions</h1>
              <p className="text-center">Everything you need to know about the product and billing.</p>
              <div className="row mt-sm-5">
                <div className="col-10">
                  <h5 className="fw-bold">Is there a free trial available?</h5>
                  <h5>Yes, you can try us for free for 30 days. If you want, we'll provide you with a free,personalized <br/> 30-minute onboarding call to get you up and running as soon as possible.</h5>
                </div>
                <div className="col-2 text-end">
                  <FaMinusCircle size="2em" />
                </div>
                <div className="w-100 mt-2"></div>
                <hr/>
                <div className="col">
                  <h5 className="fw-bold">What is your cancellation policy?</h5>
                </div>
                <div className="col text-end">
                  <FaPlusCircle size="2em" />
                  
                </div>
                <div className="w-100 mt-2"></div>
                <hr/>
                <div className="col">
                  <h5 className="fw-bold">Can other info be added to an invoice?</h5>
                </div>
                <div className="col text-end">
                  <FaPlusCircle size="2em" />
                </div>
                <div className="w-100 mt-2"></div>
                <hr/>
                <div className="col">
                  <h5 className="fw-bold">how does billing work?</h5>
                </div>
                <div className="col text-end">
                  <FaPlusCircle size="2em" />
                </div>
                <div className="w-100 mt-2"></div>
                <hr/>
                <div className="col">
                  <h5 className="fw-bold">How do I change my account email?</h5>
                </div>
                <div className="col text-end mb-sm-5">
                  <FaPlusCircle size="2em" />
                </div>
                <div className="w-100 mt-2"></div>
                
                <div className="my-3 p-5 bg-body rounded text-center">
                  
                  <img src="./images/perfil-1.svg" className="rounded-circle float-center img-fluid" alt="..." width="40" height="40"/>
                  <img src="./images/perfil-1.svg" className="rounded-circle float-center img-fluid" alt="..." width="40" height="40"/>
                  <img src="./images/perfil-1.svg" className="rounded-circle float-center img-fluid" alt="..." width="40" height="40"/>
                  <div className="pt-4 text-center">
                    <h5 className="fw-bold">Still have questions?</h5>
                    <p> Can't find the answer you're looking for? Please chat to our friendly team.</p>
                    <button className="btn btn-primary"> Get in touch</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
    
          <div className="bg-dark">
            <div className="container text-light">
              <footer className="py-4">
                <div className="row">
                  <div className="col-sm-12 align-self-start">
                    <img src="./images/logo-react.png" alt=""  className="img-fluid logotipo mb-3"/> <b>Logotipo</b>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod laudantium ad qui accusamus magni quis ducimus cumque, laboriosam deleniti consequuntur sunt molestiae sit aliquid, doloremque repudiandae voluptate et modi nesciunt.</p>
                  </div>
                  
                  <div className="col-sm-1 align-self-center">
                    <h5>Overview</h5>
                  </div>
            
                  <div className="col-sm-1 align-self-center">
                    <h5>Features</h5>
                  </div>
            
                  <div className="col-sm-1 align-self-center">
                    <h5>Pricing</h5>
                  </div>
                  <div className="col-sm-1 align-self-center">
                    <h5>Careers</h5>
                  </div>
                  <div className="col-sm-1 align-self-center">
                    <h5>Help</h5>
                  </div>
                  <div className="col-sm-1 align-self-center">
                    <h5>Privacy</h5>
                  </div>
            
                  <div className="col-sm-6 text-center">
                      <h4>Get the App</h4>
                      <img src="./images/google-play.png" alt="" className="" width="180"/>
                      <img src="./images/app-store.png" alt="" className="" width="210"/>
                      
                  </div>
                </div>
            
                <div className="d-flex justify-content-between py-2 my-4 border-top">
                  <p>&copy; 2022 NavaCas</p>
                  <ul className="list-unstyled d-flex">
                    <FaFacebook  size="2em" className="ms-3"/>
                    <FaTwitter  size="2em" className="ms-3"/>
                    <FaLinkedin size="2em" className="ms-3"/>
                    <FaGithub size="2em" className="ms-3"/>
                  </ul>
                </div>
              </footer>
            </div>
          </div>
          
      </>
    )
}

export default Home