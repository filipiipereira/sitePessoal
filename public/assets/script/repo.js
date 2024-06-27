function preencheHTML() {
    let parametroUrl = new URLSearchParams(window.location.search);
    let repoId = parametroUrl.get('id');

    if (repoId) {
        fetch(`https://api.github.com/repositories/${repoId}`)
            .then(response => response.json())
            .then(repo => {
                document.getElementById('nomeRepositorio').innerHTML = `Repositório: ${repo.name}`;
                document.getElementById('descricao').innerHTML = repo.description || 'No description provided.';
                document.getElementById('dataCriacao').innerHTML = new Date(repo.created_at).toLocaleDateString('pt-BR');
                document.getElementById('linguagem').innerHTML = repo.language || 'Not specified';
                document.getElementById('link').innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.html_url}</a>`;
                document.getElementById('numeroEstrelas').innerHTML = repo.stargazers_count;
                document.getElementById('numeroSeguidores').innerHTML = repo.watchers_count;
                let ulTopicos = document.getElementById('topicos');
                repo.topics.forEach(topico => {
                let li = document.createElement('li');
                li.textContent = topico;
                ulTopicos.appendChild(li);
                });
                
            })       
    } 
}
window.addEventListener('load', preencheHTML);