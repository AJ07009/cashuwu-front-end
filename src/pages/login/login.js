import React from "react";
import "./login.css"

//not figured this out yet
function LoginHeader(){
    return (
        <title>CashUwU Login</title>
    )
}

function SocialContainer(){
    return(
        <div class="social-container">
            <a href="#" class="social">F<i class="fab fa-facebook-f"></i></a>
            <a href="#" class="social">G<i class="fab fa-google-plus-g"></i></a>
            <a href="#" class="social">L<i class="fab fa-linkedin-in"></i></a>
        </div>
    )
}

//but this fucking works
function LoginBody(){
    return(
    <body className="loginbody">
        <div class="container" id="container">
            <div class="form-container ">
            <form className = "form1" action="#">
                    <h1>Sign in</h1>
                    <SocialContainer />
                    <span className="span1">or use your account</span>
                    <input className="input1" type="email" placeholder="Email" />
                    <input className="input1"  type="password" placeholder="Password" />
                    <a className="a1" href="#">Forgot your password?</a>
                    <button className="button1">Sign In</button>
                </form>{/* <form className = "form1" action="#" >
                    <h1 className="loginhead1">Create Account</h1>
                    
                    <span className="loginspan" >or use your phone number for registration</span>
                    <input className="input1" type="text" placeholder="Name" />
                    <input className="input1" type="phone number" placeholder="Phone number" />
                    <input className="input1" type="password" placeholder="Password" />
                    <button className="button1">Sign Up</button>
                </form> */}
            </div>
            <div class="form-container sign-in-container">
                {/* <form className = "form1" action="#">
                    <h1>Sign in</h1>
                    <SocialContainer />
                    <span className="span1">or use your account</span>
                    <input className="input1" type="email" placeholder="Email" />
                    <input className="input1"  type="password" placeholder="Password" />
                    <a className="a1" href="#">Forgot your password?</a>
                    <button className="button1">Sign In</button>
                </form> */}
                <form className = "form1" action="#" >
                    <h1 className="loginhead1">Create Account</h1>
                    
                    <span className="loginspan" >or use your phone number for registration</span>
                    <input className="input1" type="text" placeholder="Name" />
                    <input className="input1" type="phone number" placeholder="Phone number" />
                    <input className="input1" type="password" placeholder="Password" />
                    <button className="button1">Sign Up</button>
                </form>
            </div>
            <div class="overlay-container">
                <div class="overlay">
                    <div class="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p className="p1">To keep connected with us please login with your personal info</p>
                        <button className="button1" class="ghost" id="signIn">Sign In</button>
                    </div>
                    <div class="overlay-panel overlay-right">
                        <h1>Hello, Friend!</h1>
                        <p className="p1">Enter your personal details and join the community right away </p>
                        <button className="button1" class="ghost" id="signUp">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
        <script src="./script"></script>
    </body>
    )
}

export default function Login(){
    return(
        <body>
        <LoginHeader />
        <LoginBody />
        </body>

    )
}