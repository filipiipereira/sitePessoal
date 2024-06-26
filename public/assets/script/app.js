function carregaDadosGit() {
    return fetch('https://api.github.com/users/filipiipereira')
        .then(response => response.json());
}
function mostraDadosGit() {
    carregaDadosGit()
        .then(dados => {
            document.getElementById('nome').innerHTML = dados.name;
            document.getElementById('bio').innerHTML = dados.bio;
            document.getElementById('localizao').innerHTML = dados.location;
        })
        
    
}

mostraDadosGit();
