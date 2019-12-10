const logo = (() => {
    const module = {}; // para trabalhar com as variaveis somente dentro desse objeto

    module._style = () => {
        const $head = document.querySelector("head"); //Selecionar o elemente head do HTML
        const $style = document.createElement("style");//criar um style dentro do elemento head do HTML

        $style.textContent = `
        .logo {
            display: inline-block;
        }
        .logo-img {
            
            width: 150px;
            background-color: #fff;
        }
        `;//tratar o CSS

        $head.insertAdjacentElement("beforeend", $style);//Inserir o estile de css dentro do HEAD
    };

    module.render = () => {
        module._style();//chamar o style para funcionar ;)

        return `
            <figure class="logo-collabcode">
                <img class="logo" src="img/logo.png">
            </figure>
        `;//Criar o o codigo html
    };

    return {
        render: module.render
    };//expor o elemento local
})();