
document.addEventListener('DOMContentLoaded', () => {
let toggleSwitch = document.getElementById("toggle-switch");

// for toggle to change the day and night mode
toggleSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleSignupSigninSections();
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('mode', 'dark');
    } else {
        localStorage.setItem('mode', 'light');
    }
});

if (localStorage.getItem('mode') === 'dark') {
    document.body.classList.add('dark-mode');
    toggleSwitch.checked = true;
    toggleSignupSigninSections();
}


// for SignUp functionality start

let signUpBtn = document.querySelector(".signUp");
signUpBtn.addEventListener("click", signUpFun);

function signUpFun() {
    let signUpContainer = document.createElement("div");
    signUpContainer.classList.add("signUpSection");

    signUpContainer.innerHTML = `
    <div class="signUpDetails">
    <form action="" method="post" class="signupform">
    <span class="delBtn"><button type="submit" class = "closeBtn">❎</button></span>
    <span class="inputName"><input type="text" name="name" class="name" placeholder="Enter your Name..." required></span>
    <span class="inputEmail"><input type="email" name="email" class="email" placeholder="Enter your Email..." required></span>
    <span class="inputPassword"><input type="password" name="password" class="password" placeholder="Enter your Password..." required></span>
    <span class="signBtn "><button type="submit" class="signupBtn">SIGN UP</button></span>
     <span class="link_tab">
        <button type="button" class="signup_link_btn">SIGN UP</button>  
        <button type="button" class="signin_btn">SIGN IN</button>
    </span>
    <form>
    </div>
    `;

    document.querySelector(".container").appendChild(signUpContainer);
    document.querySelector(".leftContainer").style.display = "none";
    document.querySelector(".rightContainer").style.display = "none";

    // for the cross button not appear
    let closeBtn = signUpContainer.querySelector(".closeBtn");
        closeBtn.addEventListener("click", () => {
            signUpContainer.remove();
            document.querySelector(".leftContainer").style.display = "block";
            document.querySelector(".rightContainer").style.display = "block";
        });

        // for the signUp form details create
        let signUpform = signUpContainer.querySelector(".signupform");
        signUpform.addEventListener("submit", (e) =>{
            e.preventDefault();

            // take 3 value from signUpform
            let name = signUpform.querySelector(".name").value;
            let email = signUpform.querySelector(".email").value;
            let password = signUpform.querySelector(".password").value;
              
            // check 3 of data are filled or not
            if (name && email && password) {
                let userData = { name, email, password };
                localStorage.setItem("userData", JSON.stringify(userData));
                alert("Sign up successful!");
                signUpContainer.remove();
                document.querySelector(".leftContainer").style.display = "block";
                document.querySelector(".rightContainer").style.display = "block";
            } else {
                alert("Please fill in all fields.");
            }
        

       
    });
       
let signInBtn = signUpContainer.querySelector(".signin_btn");
signInBtn.addEventListener("click", ()=>{
    signUpContainer.remove();
    signInFun();
});
}

// SignUp functionality end

 // SignIn functionality Start

 function signInFun(){
    let signInContainer = document.createElement("div");
    signInContainer.classList.add("signInSection");

    signInContainer.innerHTML = `
     <div class="signInDetails">
    <form action="" method="post" class="signinform">
    <span class="delBtn"><button type="submit" class = "closeBtn">❎</button></span>
    <span class="inputEmail"><input type="email" name="email" class="email" placeholder="Enter your Email..." required></span>
    <span class="inputPassword"><input type="password" name="password" class="password" placeholder="Enter your Password..." required></span>
    <span class="signBtn "><button type="submit" class="signinBtn">SIGN UP</button></span>
     <span class="link_tab">
        <button type="button" class="signup_link_btn">SIGN UP</button>  
         <button type="button" class="signin_link_btn">SIGN IN</button>
    </span>
    <form>
    </div>
    `;

    document.querySelector(".container").appendChild(signInContainer);

    // for the cross button not appear
    let closeBtn = signInContainer.querySelector(".closeBtn");
        closeBtn.addEventListener("click", () => {
            signInContainer.remove();
            document.querySelector(".leftContainer").style.display = "block";
            document.querySelector(".rightContainer").style.display = "block";
        });

      // for the signIn form details create
      let signinForm = signInContainer.querySelector(".signinform");
      signinForm.addEventListener("submit", (e) =>{
          e.preventDefault();

          // take 3 value from signUpform
         
          let email = signinForm.querySelector(".email").value;
          let password = signinForm.querySelector(".password").value;
            
          // check 3 of data are filled or not
          let storedData = JSON.parse(localStorage.getItem("userData"));

            if (storedData && storedData.email === email && storedData.password === password) {
                alert("Sign in successful!");
                signInContainer.remove();
            } else {
                alert("Invalid email or password.");
            }
      });


let signUpBtn = signInContainer.querySelector(".signup_link_btn");
signUpBtn.addEventListener("click", ()=>{
    signInContainer.remove();
    signUpFun();
});

 }


//  for toggle in the darkmode

function toggleSignupSigninSections(){
    document.querySelectorAll('.signUpSection, .signInSection').forEach(section => {
        section.classList.toggle('dark-mode-bg');
    });
}
})
