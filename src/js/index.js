document.getElementById('confirmar').addEventListener('click', e => {
    e.preventDefault();

    dados();
});

function dados() {
    console.log('lsadkfbhv');
    let nome = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    if (nome.length < 3 || nome == '') {
        Swal.fire(
            {
                title: 'Erro:',
                text: 'Preencha o nome corretamente',
                icon: 'error'
            });
    } else if (email == '' || email.indexOf('@')==-1 || email.indexOf('.')==-1 ) {
        Swal.fire(
            {
                title: 'Erro:',
                text: 'Preencha o email corretamente',
                icon: 'error'
            });
    } else {
        Swal.fire(
            {
                title: 'Dados Salvos',
                icon: 'success'
            });
    };
};