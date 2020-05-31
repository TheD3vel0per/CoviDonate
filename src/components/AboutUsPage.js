
import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/aboutus.css";

class AboutUsPage extends React.Component {
  render (){
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
                          <p className="card-text">I’m Devam, a second year Math & Computer Science student at the University of British Columbia with a passion for software engineering.</p>
                          <a href="https://devam.io" className="btn btn-primary btn-sm"><i className="fa fa-plus" /></a>
                        </div>
                      </div>
                    </div>
                    <div className="backside">
                      <div className="card">
                        <div className="card-body text-center mt-4">
                          <h4 className="card-title">Devam Sisodraker</h4>
                          <p className="card-text">Ever since I was a toddler, I have been passionate about technology. I want to make the world as passionate about technology as I am by showing people how to use it to solve problems.</p>
                          <ul className="list-inline">
                            <li className="list-inline-item">
                              <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                <i className="fa fa-facebook" />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                <i className="fa fa-twitter" />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                <i className="fa fa-skype" />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                <i className="fa fa-google" />
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
                          <p><img className=" img-fluid" src="https://cdn.discordapp.com/attachments/715732871247298603/716530156549963816/iu.png" alt="card image" /></p>
                          <h4 className="card-title">Vishal Desh</h4>
                          <p className="card-text">Hi, I am Vishal Desh currently pursuing Computer Science at the University of British Columbia. 
                          I am passionate about robotics and I aspire to become a Robotics Engineer. I love building Software and hardware projects to create a positive impact </p>
                          <a href="http://vishaldesh.com/" className="btn btn-primary btn-sm"><i className="fa fa-plus" /></a>
                        </div>
                      </div>
                    </div>
                    <div className="backside">
                      <div className="card">
                        <div className="card-body text-center mt-4">
                          <h4 className="card-title">Sunlimetech</h4>
                          <p className="card-text">I dont have a penis, at least Devam has one</p>
                          <ul className="list-inline">
                            <li className="list-inline-item">
                              <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                <i className="fa fa-facebook" />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                <i className="fa fa-twitter" />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                <i className="fa fa-skype" />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                <i className="fa fa-google" />
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
                          <p><img className=" img-fluid" src="https://media-exp1.licdn.com/dms/image/C5603AQHa40SLtWSc5A/profile-displayphoto-shrink_200_200/0?e=1596672000&v=beta&t=Cs6ozZuXWvgUWr-O9HOTzCKJuXeienB3CQKcFU3UO_s" alt="card image" /></p>
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
                              <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                <i className="fa fa-facebook" />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                <i className="fa fa-twitter" />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                <i className="fa fa-skype" />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                <i className="fa fa-google" />
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
                          <p><img className=" img-fluid" src="i" alt="card image" /></p>
                          <h4 className="card-title">Thomas Richmond</h4>
                          <p className="card-text">Professional Hot Girl in the Top Right</p>
                          <a href="https://www.fiverr.com/share/qb8D02" className="btn btn-primary btn-sm"><i className="fa fa-plus" /></a>
                        </div>
                      </div>
                    </div>
                    <div className="backside">
                      <div className="card">
                        <div className="card-body text-center mt-4">
                          <h4 className="card-title">About Me</h4>
                          <p className="card-text">What the heck did you just flipping say about me, you big meanie? I'll have you know I graduated top of my class in the Tiny Tots Program, and I've been involved in numerous secret raids on the girl's bathroom, and I have over 300 confirmed noogies. I am trained in Nerf warfare and I have the most gold stars in the entire kindergarten class. You are nothing to me but just another butthead. I will beat you the heck up with precision the likes of which has never been seen before on this Earth, mark my dang words. You think you can get away with saying that baloney to me on the glowy type-box? Think again, doodiehead. As we speak I am contacting my secret network of teachers across the USA and your parents are being called to pick you up right now so you better prepare for the spanking, junior. The spanking that wipes out the dumb little thing you call your playtime. You're in big darn trouble, kid. I can be anywhere, anytime, and I can wedgie you in over seven hundred ways, and that's just with my bare hands. Not only am I extensively trained in unarmed fartfights, but I have access to the entire arsenal of the United States PTA and I will use it to its full extent to wipe your dorky bottom off the face of the playground, you little poopypants. If only you could have known what serious punishments your little "smartypants" comment was about to bring down upon you, maybe you would have held your goshdarned tongue. But you couldn't, you didn't, and now you're paying the price, you silly doofus. I will spray boogers all over you and you will cry about it. You're frickin grounded, buttmunch.</p>
                          <ul className="list-inline">
                            <li className="list-inline-item">
                              <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                <i className="fa fa-facebook" />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                <i className="fa fa-twitter" />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                <i className="fa fa-skype" />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                <i className="fa fa-google" />
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



