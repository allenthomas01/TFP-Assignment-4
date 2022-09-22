fetch('https://api.github.com/users/allenthomas01')
.then(res=>{
    return res.json()
})
.then(data=>{

    document.querySelector("#followers").innerText=data.followers
    document.querySelector("#following").innerText=data.following
    document.querySelector("#repos").innerText=data.public_repos
    document.querySelector("#gists").innerText=data.public_gists
    document.querySelector("#profile").innerText=data.html_url


})


