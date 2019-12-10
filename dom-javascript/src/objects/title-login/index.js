const titleLogin = (() => {
    const module = {};
    
    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
        `;

        $head.insertAdjacentElement("beforeend", $style);
    };

    module.render = (content) => {
        module._style();

        return `
            <h1 class="title-webnar">${content}</h1>
        `
    };

    return {
        render: module.render
    }
})();