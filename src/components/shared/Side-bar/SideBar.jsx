import React from 'react';


function SideBar() {

    const {REACT_APP_URL} = process.env;
    return (
        <aside id="colorlib-aside" role="complementary" className="js-fullheight">
            <nav id="colorlib-main-menu" role="navigation">
                <ul>
                    <li className="colorlib-active"><a href="index.html">Home</a></li>
                    <li><a href="fashion.html">Fashion</a></li>
                    <li><a href="travel.html">Travel</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </nav>

            <div className="colorlib-footer">
                <h1 id="colorlib-logo" className="mb-4">
                    <a href="index.html"
                       style={{backgroundImage: `url(${REACT_APP_URL}images/bg_1.jpg)`}}>
                        Andrea <span>Moore</span>
                    </a>
                </h1>
                <div className="mb-4">
                    <h3>Subscribe for newsletter</h3>
                    <form action="#" className="colorlib-subscribe-form">
                        <div className="form-group d-flex">
                            <div className="icon"><span className="icon-paper-plane"/></div>
                            <input type="text" className="form-control" placeholder="Enter Email Address"/>
                        </div>
                    </form>
                </div>
                <p className="pfooter">
                    Copyright &copy;
                    <script>document.write(new Date().getFullYear());</script>
                    All rights reserved | This template is made with
                    <i className="icon-heart" aria-hidden="true"/> by <a
                    href="https://colorlib.com" target="_blank">Colorlib</a>
                </p>
            </div>
        </aside>
    );
}

export default SideBar;