const singup = (() => {
    const $root = document.querySelector("#root"); 
    const $titleLogin = titleLogin.render("Create User!!")
    const $imgLogo = logo.render(); // atribuindo o objeto logo a uma variavel
    const $logoWrapper = logoWrapper.render($imgLogo, $titleLogin)


    //Inserir as variaveis setadas com componentes/objetos na div root
    $root.insertAdjacentHTML("beforeend", $logoWrapper);
});