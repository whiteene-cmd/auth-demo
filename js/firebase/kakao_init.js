Kakao.init('a04f96d384e78d29d3a5815f5b2a08ca');
Kakao.isInitialized();

console.log(Kakao.isInitialized());

document.getElementById("kakao-login-btn").addEventListener('click',()=>{
    Kakao.Auth.authorize({
        redirectUri:'http://127.0.0.1:5500/kakao-callback.html'
    })
})