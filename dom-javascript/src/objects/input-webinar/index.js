const inputWebinar = (() => {
    const module = {};

    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
        .input-webinar {
            height: 25px;
        }
        `;

        $head.insertAdjacentElement("beforeend", $style)
    };

    module.render = ({id = "", placeholder = "", type = "text"}) => {
        module._style()

        return `
            <input
                id="${id}"
                class="input-webinar"
                type="${type}"
                placeholder="${placeholder}"
            >
        `
    };

    return {
        render: module.render
    }
})();