import React from 'react'

const Template1 = () => {
  return (
    <div>
        <main className="resume-contents">
        <section className="left-section">
            <div class="left-section-contents">
                <div class="profile">
                    {/* <img class="profile-image" src="img/profile-image.jpg" alt="Profile image"/> */}
                    <p class="name">Lorem Ipsum</p>
                    <p class="profession">Software Engineer</p>
                </div>
                <div class="contact-info">
                    <p class="left-title">Contact Info</p>
                    <ul>
                        <li><i class="fa fa-phone"></i>+123456789
                        </li>
                        <li><i class="fa fa-envelope"></i>loremipsum@amail.com
                        </li>
                        <li><i class="fa fa-globe"></i>lorem.ipsum.web
                        </li>
                        <li><i class="fa fa-github"></i>loremipsum.github.com
                        </li>
                        <li><i class="fa fa-map-marker"></i>70 Dream St, USA
                        </li>
                    </ul>
                </div>
                <div class="skills">
                    <p class="left-title">Skills</p>
                    <ul>
                        <li><p>Python3, Django & Flask</p></li>
                        <li><p>C & C++, Java</p></li>
                        <li><p>JavaScript, Angular</p></li>
                        <li><p>HTML5 & CSS3</p></li>
                        <li><p>SQL, MySql</p></li>
                        <li><p>Git & GitHub</p></li>
                        <li><p>Linux, Bash/Shell</p></li>
                    </ul>
                </div>

                <div class="references">
                    <p class="left-title">References</p>
                    <div class="refer">
                        <p class="referance-name">Lorem ipsum</p>
                        <p class="referance-profession">Lorem, ipsum dolor.</p>
                        <ul>
                            <li>
                                <i class="fa fa-phone"></i>
                                +123456789
                            </li>
                            <li>
                                <i class="fa fa-envelope"></i>
                                loremipsum@amail.com
                            </li>
                        </ul>
                    </div>
                    <div class="refer">
                        <p class="referance-name">Lorem ipsum</p>
                        <p class="referance-profession">Lorem, ipsum dolor.</p>
                        <ul>
                            <li>
                                <i class="fa fa-phone"></i>
                                +123456789
                            </li>
                            <li>
                                <i class="fa fa-envelope"></i>
                                loremipsum@amail.com
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section class="right-section">
            <div class="right-section-contents">
                <section class="about gap">
                    <div class="right-title">About Me</div>
                    <p class="about-me-contents">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quae aliquid ab tempore deleniti modi animi facere, 
                        laborum illum quis in quidem distinctio quod officia unde. Aspernatur eligendi architecto ipsam sint alias consequatur 
                        at modi magni in, accusantium iure voluptates eius possimus? Incidunt veritatis illum corrupti nobis labore expedita.<br/>
                        <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus temporibus velit minima assumenda atque inventore natus hic, 
                        voluptatem est explicabo voluptate vel, adipisci illum, ratione repellendus! Consequuntur veniam modi nihil.
                    </p>
                </section>

                <section class="experience gap">
                    <div class="right-title">Experience</div>
                    <div class="experience-contents">
                        <div class="exp-left">
                            <p class="exp-company-name">Company one</p>
                            <p class="exp-time-period">2016-2018</p>
                        </div>
                        <div class="exp-right">
                            <p class="exp-position">position one</p>
                            <p class="exp-desc">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, quo. Non provident odio nam quas praesentium! 
                                Fugit laborum accusantium repellat?
                            </p>
                        </div>
                    </div>
                    <div class="experience-contents">
                        <div class="exp-left">
                            <p class="exp-company-name">Company two</p>
                            <p class="exp-time-period">2016-2018</p>
                        </div>
                        <div class="exp-right">
                            <p class="exp-position">position two</p>
                            <p class="exp-desc">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, quo. Non provident odio nam quas praesentium! 
                                Fugit laborum accusantium repellat?
                            </p>
                        </div>
                    </div>
                    <div class="experience-contents">
                        <div class="exp-left">
                            <p class="exp-company-name">Company three</p>
                            <p class="exp-time-period">2016-2018</p>
                        </div>
                        <div class="exp-right">
                            <p class="exp-position">position three</p>
                            <p class="exp-desc">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, quo. Non provident odio nam quas praesentium! 
                                Fugit laborum accusantium repellat?
                            </p>
                        </div>
                    </div>
                </section>

                <section class="education gap">
                    <div class="right-title">Education</div>
                    <div class="education-contents">
                        <div class="education-left">
                            <p class="education-school-name">University name</p>
                            <p class="educationp-time-period">2016-2018</p>
                        </div>
                        <div class="education-right">
                            <p class="education-subject">Computer Science</p>
                            <p class="education-desc">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, quo. Non provident odio nam quas praesentium! 
                                Fugit laborum accusantium repellat?
                            </p>
                        </div>
                    </div>
                    <div class="education-contents">
                        <div class="education-left">
                            <p class="education-school-name">College name</p>
                            <p class="educationp-time-period">2016-2018</p>
                        </div>
                        <div class="education-right">
                            <p class="education-subject">Science</p>
                            <p class="education-desc">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, quo. Non provident odio nam quas praesentium! 
                                Fugit laborum accusantium repellat?
                            </p>
                        </div>
                    </div>
                    <div class="education-contents">
                        <div class="education-left">
                            <p class="education-school-name">School name</p>
                            <p class="educationp-time-period">2016-2018</p>
                        </div>
                        <div class="education-right">
                            <p class="education-subject">Science</p>
                            <p class="education-desc">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, quo. Non provident odio nam quas praesentium! 
                                Fugit laborum accusantium repellat?
                            </p>
                        </div>
                    </div>
                </section>

                <section class="awards gap">
                    <div class="right-title">Awards & Certificates</div>
                    <div class="awards-contents">
                        <div class="awards-left">
                            <p class="awards-company-name">Company x</p>
                            <p class="awards-time-period">24 June 2016</p>
                        </div>
                        <div class="awards-right">
                            <p class="awards-name">Employee of the month</p>
                            <p class="awards-desc">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, quo. Non provident odio nam quas praesentium! 
                                Fugit laborum accusantium repellat?
                            </p>
                        </div>
                    </div>
                    <div class="awards-contents">
                        <div class="awards-left">
                            <p class="awards-company-name">Certificate x</p>
                            <p class="awards-time-period">12 January 2019</p>
                        </div>
                        <div class="awards-right">
                            <p class="awards-name">Certificate of complition</p>
                            <p class="awards-desc">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, quo. Non provident odio nam quas praesentium! 
                                Fugit laborum accusantium repellat?
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    </main>
      
    </div>
  )
}

export default Template1
