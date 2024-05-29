let loginAberto = 0;

function abrirLogin() {
    if (loginAberto === 0) {
        loginAberto = 1;
        document.getElementById('loginLista').style.display = 'block';
        document.getElementById('loginFundo').style.display = 'block';
        document.getElementById('loginFundo').style.height = document.body.style.height;
        document.getElementById('loginFundo').style.height = 2695;
    } else {
        loginAberto = 0;
        document.getElementById('loginLista').style.display = 'none';
        document.getElementById('loginFundo').style.display = 'none';
    };
}