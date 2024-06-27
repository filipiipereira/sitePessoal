function carregaDadosGit() {
    return fetch('https://api.github.com/users/filipiipereira')
        .then(response => response.json());
}
function carregaDadosRepos() {
    return fetch('https://api.github.com/users/filipiipereira/repos')
        .then(response => response.json());
}
function mostraDadosGit() {
    carregaDadosGit()
        .then(dados => {
            document.getElementById('nome').innerHTML = dados.name;
            document.getElementById('bio').innerHTML = dados.bio;
            document.getElementById('localizacao').innerHTML = dados.location;
            document.getElementById('site').innerHTML = dados.html_url;
            document.getElementById('foto').src = dados.avatar_url;
            document.getElementById('numero').innerHTML = `Repositórios(${dados.repos_url.length})`;
        })
    carregaDadosRepos()
        .then(dados => {
            document.getElementById('numero').innerHTML = `Repositórios(${dados.length})`;
        })
    criaCardsRepos();
}
function criaCardsRepos(){
    carregaDadosRepos()
        .then(repos => {
            let section = document.getElementById('repositorios');
            let template = document.getElementById('templateCard');

            section.innerHTML = ''; 

            for (let i = 0; i < repos.length; i++) {
                let repo = repos[i];
                let clone = template.cloneNode(true);
                clone.style.display = 'flex';
                clone.querySelector('#linkRepo').href = `repo.html?id=${repo.id}`;
                clone.querySelector('#tituloRepo').innerHTML = repo.name;
                clone.querySelector('#descricaoRepo').innerHTML = repo.description
                clone.querySelector('#numeroEstrelas').innerHTML = repo.stargazers_count;
                clone.querySelector('#numeroSeguidores').innerHTML = repo.watchers_count;
                section.appendChild(clone);
            }
        })
}

mostraDadosGit();

