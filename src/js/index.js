document.getElementById('confirmar').addEventListener('click', e => {
    e.preventDefault();

    dados();
});

function dados() {
    let nome = document.getElementById('name').value;
    let email = document.getElementById('email').value

    if (nome.length < 2 || nome == '') {
        alert('Preencha o nome corretamente')
    } else if (email == '' || email.indexOf('@')==-1 || email.indexOf('.')==-1 ) {
        alert('Peencha o email corretamente')
    } else {
        alert('Dados Salvos')
    }
}