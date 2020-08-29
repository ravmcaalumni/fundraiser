import React from "react";

const Navbar = () => {
    return (
        <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
            
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="/home"><img src="../../images/Common/logo.png" alt="Ravenshaw MCA Alumni"/></a>
                </div>
            
                <div class="collapse navbar-collapse">
                    <ul class="nav navbar-nav navbar-right utility">
                
                        <li id="liLogin"><a href="/Account/Login" id="loginLink">Log in</a></li>


                        <li>
                            <div class="search">
                                <form role="form" class="navbar-search">
                                    <input type="text" class="search-form" autocomplete="off" placeholder="Search"/>
                                    <i class="fa fa-search"></i>
                                </form>
                            </div>
                        </li>
                    </ul>
                    <ul class="nav navbar-nav">
                        <li id="liAbout"><a href="/Home/about" title="About US">About Us</a></li>
                        <li class="dropdown" id="liConnect">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Connect</a>
                            <ul class="dropdown-menu">
                                <li id="liCalendar"><a href="/Calendar" title="Calendar">Calendar</a></li>
                                <li id="liDirectory"><a href="/Directory" title="Member Directory">Member Directory</a></li>
                                <li id="liDonate"><a href="/Donate" title="Volunteer And Give">Volunteer And Give</a></li>
                                <li id="liCareer"><a href="/Career" title="Carrer">Career</a></li>
                                <li id="liRegistration"><a href="/Registration" title="Member Registration">Member Registration</a></li>
                                <li id="liContactUs"><a href="/Home/Contact-Us" title="Contact Us">Contact Us</a></li>
                            </ul>
                        </li>
                        <li class="dropdown" id="liActivities">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Activities</a>
                            <ul class="dropdown-menu">
                                <li id="liBlogs"><a href="/Blogs" title="Blogs">Blogs</a></li>
                                <li id="liGroups"><a href="/Groups" title="Group">Groups</a></li>
                                <li id="liForum"><a href="/Forum" title="Forum">Forum</a></li>
                                <li id="liPortfolio"><a href="/Portfolio" title="Portfolio">Portfolio</a></li>
                                <li id="liResearch"><a href="/Research" title="Research">Research</a></li>
                                <li id="liNews"><a href="/News" title="News And News Latter">News</a></li>
                                <li id="liAnnouncements"><a href="/Announcements" title="Announcements">Announcements</a></li>
                            </ul>
                        </li>
                        <li class="dropdown" id="liLearn">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Learn</a>
                            <ul class="dropdown-menu">
                                <li id="liTalkAndInterview"><a href="/Learn/Talk-And-Interview" title="Talks And Interview">Talks And Interview</a></li>
                            </ul>
                        </li>
                        <li class="dropdown" id="liStories">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Stories</a>
                            <ul class="dropdown-menu">
                                <li id="liGlobalEngagement"><a href="/Stories/global-engagement" title="Global Engagement">Global Engagement</a></li>
                                <li id="liPublicService"><a href="/Stories/public-service" title="Public Service">Public Service</a></li>
                                <li id="liStudentExperience"><a href="/Stories/student-experience" title="Student Experience">Student Experience</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
        </nav>
    )
}

export default Navbar;