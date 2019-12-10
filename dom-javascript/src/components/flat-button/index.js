const flatButton = (() => {
    const module = {};

    module._id = 0;
    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");
        
        $style.textContent = `
         .btnBot {
            height: 30px;
        }
        `;

        $head.insertAdjacentElement("beforeend", $style);
    };
    module.handleClick = (event, path) => {
        event.preventDefault();
        const baseUrl = location.href 
        location.href = `${baseUrl}#/${path}` 
        location.reload();
    }//Criar funções

    module.render = ({content = "", path = ""}) => {
        module._style();

        return `<input
            class="btnBot"
            type="submit"
            value=${content}
            onClick="flatButton.handleClick(event, '${path}')"
        />`
    };

    return {
        render: module.render,
        handleClick: module.handleClick
    }

})();