
let form = document.getElementById("myForm")

form.addEventListener('submit', function (e) {
    e.preventDefault();

    let search = document.getElementById("search").value;

    let originalName = search.split('').join('');

    fetch("https://api.github.com/users/" + originalName)
        .then((response) => {
            if (!response.ok) {
                throw Error('User not found');
            }
            document.getElementById("result").innerHTML = `
            <a href="https://www.github.com/${originalName}/?tab=repositories">Repositories</a>
            <a href="https://www.github.com/${originalName}/?tab=followers">Followers</a>
            `  
            return response.json();
        })
        .then((data) => {
            console.log(data);
            fetch("https://api.github.com/users/" + originalName + "/repos")
                .then((response) => {
                    return response.json();
                })
            fetch("https://api.github.com/users/" + originalName + "/followers")
                .then((response) => {
                    return response.json();
                })
        })

})
