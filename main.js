const url = 'https://api.github.com/users/TylerGalvin97'
let text = 'TylerGalvin'
let result = text.link('https://github.com/TylerGalvin97')
// console.log('Calling fetch')

// fetch('https://api.github.com/users/TylerGalvin97')
// .then(res => res.json())
// .then(data => {
//     document.querySelector('user-name').innerHTML = `<h2>${data.name}</h2>`
//     consnol.log(data.repos_url)
//     return data.repos_url
// })
// .then((reposURL)


fetch('https://api.github.com/users/TylerGalvin97')
.then(res => res.json())
.then(data => {
    document.querySelector('#username').innerHTML =`<h2>${data.name}</h2> 
    <br>
    <img id= "pic" src=${data.avatar_url}>
    <div id= "info">Location: ${data.location}
    <br>
    GitHub URL: <a> ${result} </a>
    <br>
    GitHub Username: ${data.name}
    </div>
    <h2> GitHub Repos </h2>`
    return data.repos_url
})

.then((reposURL) => fetch(reposURL))
.then((res) => res.json())
.then((data) =>{
    console.log(data)
    for (let repo of data) {
        document.querySelector('#bio').innerHTML += `<p><a href=${repo.html_url}>${repo.name}</a></p>`
    }
})

