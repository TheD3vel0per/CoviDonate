
import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/aboutus.css";

class AboutUsPage extends React.Component {
  render() {
    return (
      <div>
        <section id="team" className="pb-5">
          <div className="container">
            <h5 className="section-title h1">MEET OUR TEAM</h5>
            <div className="row">
              {/* Team member 1*/}
              <div className="col-sm-6">
                <div className="image-flip">
                  <div className="mainflip flip-0">
                    <div className="frontside">
                      <div className="card">
                        <div className="card-body text-center">
                          <p><img className="img-fluid" src="images/headshots/devam.jpg" alt="card image" /></p>
                          <h4 className="card-title">Devam Sisodraker</h4>
                          <p className="card-text">I’m Devam, a second year Math & Computer Science student at UBC with a passion for software engineering.</p>
                          <a href="https://devam.io" className="btn btn-primary btn-sm"><i className="fa fa-plus" /></a>
                        </div>
                      </div>
                    </div>
                    <div className="backside">
                      <div className="card">
                        <div className="card-body text-center mt-4">
                          <h4 className="card-title">About Me</h4>
                          <p className="card-text">Ever since I was a toddler, I have been passionate about technology. I want to make the world as passionate about technology as I am by showing people how to use it to solve problems.</p>
                          <ul className="list-inline">
                            <li className="list-inline-item">
                              <a className="social-icon text-xs-center" target="_blank" href="https://www.linkedin.com/in/d3vel0per/">
                                <i className="fa fa-linkedin" />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a className="social-icon text-xs-center" target="_blank" href="https://devam.io">
                                <i className="fa fa-external-link" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ./Team member */}
              {/* Team member 2 */}
              <div className="col-sm-6">
                <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                  <div className="mainflip">
                    <div className="frontside">
                      <div className="card">
                        <div className="card-body text-center">
                          <p><img className=" img-fluid" src="images/headshots/vishal.jpg" alt="card image" /></p>
                          <h4 className="card-title">Vishal Desh</h4>
                          <p className="card-text">Hi, I am Vishal Desh currently pursuing Computer Science at UBC.</p>
                          <a href="http://vishaldesh.com/" className="btn btn-primary btn-sm"><i className="fa fa-plus" /></a>
                        </div>
                      </div>
                    </div>
                    <div className="backside">
                      <div className="card">
                        <div className="card-body text-center mt-4">
                          <h4 className="card-title">About Me</h4>
                          <p className="card-text">I am passionate about robotics and software development to create a positive impact in the world. I aspire to start my own robotics company. </p>
                          <ul className="list-inline">
                            <li className="list-inline-item">
                              <a className="social-icon text-xs-center" target="_blank" href="mailto: emailtovishy@gmail.com">
                                <i className="fa fa-google" />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a className="social-icon text-xs-center" target="_blank" href="http://vishaldesh.com/">
                                <i className="fa fa-external-link" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Team 3 */}
              <div className="col-sm-6">
                <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                  <div className="mainflip">
                    <div className="frontside">
                      <div className="card">
                        <div className="card-body text-center">
                          <p><img className=" img-fluid" src="images/headshots/noah.jpg" alt="card image" /></p>
                          <h4 className="card-title">Noah Caleanu</h4>
                          <p className="card-text">UBC Electrical Engineer 2020</p>
                          <a href="https://www.fiverr.com/share/qb8D02" className="btn btn-primary btn-sm"><i className="fa fa-plus" /></a>
                        </div>
                      </div>
                    </div>
                    <div className="backside">
                      <div className="card">
                        <div className="card-body text-center mt-4">
                          <h4 className="card-title">About Me</h4>
                          <p className="card-text">Interest in sustainable technology and interplanetery travel. I enjoyed this hackathon, I learned Javascript and React.</p>
                          <ul className="list-inline">
                            <li className="list-inline-item">
                              <a className="social-icon text-xs-center" target="_blank" href="https://www.linkedin.com/in/noah-caleanu-871662135/">
                                <i className="fa fa-linkedin" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ./Team member */}
              {/* Team member  */}
              <div className="col-sm-6">
                <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                  <div className="mainflip">
                    <div className="frontside">
                      <div className="card">
                        <div className="card-body text-center">
                          <p><img className="img-fluid" src="images/headshots/thomas.jpg" alt="card image" /></p>
                          <h4 className="card-title">Thomas Richmond</h4>
                          <p className="card-text">Mechanical Engineering Student at UBC</p>
                          <a href="https://www.fiverr.com/share/qb8D02" className="btn btn-primary btn-sm"><i className="fa fa-plus" /></a>
                        </div>
                      </div>
                    </div>
                    <div className="backside">
                      <div className="card">
                        <div className="card-body text-center mt-4">
                          <h4 className="card-title">About Me</h4>
                          <p className="card-text">Thomas Richmond is an enthusiastic mechanical engineering student with a passion for innovative and sustainable mechatronic and space exploration technologies. <br/><br/> Beyond the workplace, Thomas is an avid outdoor enthusiast, longboarder, musician (piano and guitar) and electronics hobbyist.</p>
                          <ul className="list-inline">
                            <li className="list-inline-item">
                              <a className="social-icon text-xs-center" target="_blank" href="https://www.linkedin.com/in/richmond-thomas/">
                                <i className="fa fa-linkedin" />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a className="social-icon text-xs-center" target="_blank" href="mailto: thomas.joakim@gmail.com">
                                <i className="fa fa-google" />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a className="social-icon text-xs-center" target="_blank" href="http://www.embeddedsystems.ca/">
                                <i className="fa fa-external-link" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    );
  }

}

export default AboutUsPage;



