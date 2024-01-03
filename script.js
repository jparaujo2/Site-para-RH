document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const loginStatus = document.getElementById('login-status');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = loginForm.username.value;
        const password = loginForm.password.value;

        // Verifica o usuário e a senha (substitua por validação real)
        if (username === 'UNIPRH' && password === '123'|| username === 'JPTEC' && password ==='joao2002') {
            loginStatus.textContent = 'Login bem-sucedido!';
            alert("Bem vindo ao Site");
            // Redireciona para a página do painel de controle após o login
            window.location.href = 'salario.html';
        } else {
            alert("Usuario ou senha incorretos, Comunique o RH")
            loginStatus.textContent = 'Nome de usuário ou senha incorretos.';
        }
    });
   
});
