import React from "react";
import styles from "./home_style.css"
// import Login from "./pages/login/login";
// import "./pages/home/home_style";

function About(){
    return (
        <div>
            <section className={styles.About}>
                <div className={styles.Main}>
                    <div className={styles.AboutText}>    
                        <h2>About Us</h2>
                        <h5>Scan and <span> Save</span></h5>
                        <p>Blah Blah Blah</p>
                        <button type="button">Let's Talk</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

function GetStarted(){
    return (
        <div className={styles.Content}>
            <h4>We are</h4>
            <h1>Cash<span>UwU</span></h1>
            <h3>Snap Once. Save More.
            </h3>
            <div className={styles.Newslatter}>
                <form>
                    <input type="email" name="email" id="mail" placeholder="Enter Your Email"/>
                    <input type="submit" name="submit" value="Lets Start"/>
                </form>
            </div>
        </div>
    )
}

function HomeHero(){
    return(
        <div className={styles.Hero}>
            <nav className="navbar navbar-expand-lg navbar-light w-100" >
                <h2 className={styles.Logo}>Cash<span>UwU</span></h2>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
                <a href="login.js" class="btn">Login</a>
            </nav>
        </div>
    )
}

function HomeFooter(){
    return (
        <footer>
            <div className={styles.Social}>
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-dribbble"></i></a>
            </div>
        </footer>
    )
}

export default function Home(){
    return (

        <body>
            <HomeHero />
            <About />
            <GetStarted />
            <HomeFooter />
        </body>
    
    )
}