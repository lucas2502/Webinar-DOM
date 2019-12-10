const login = (() => {
    const $root = document.querySelector("#root");
    
    const $imgLogo = logo.render(); // atribuindo o objeto logo a uma variavel
    const $titleLogin = titleLogin.render("Hello!!"); //atribuindo objeto title recebendo uma variavel
    const $logoWrapper = logoWrapper.render($imgLogo, $titleLogin); // componente recebendo dois bojetos por parametro
    const $formLogin = formLogin.render()

    //Inserir as variaveis setadas com componentes/objetos na div root
    $root.insertAdjacentHTML("beforeend", $logoWrapper);
    $root.insertAdjacentHTML("beforeend", $formLogin);
});