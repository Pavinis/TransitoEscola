function  Cadastro() {
      const Código=document.getElementById("Código");
   
    var codigoacesso = "12345";

    if ((Código !== codigoacesso)) {
        alert("Seu código de acesso está incorreto.");

    } else {
        alert("Código verificado. Você está logado.")
    }
}