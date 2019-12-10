const formLogin = (() => {
    const module = {};

    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
        .avatar-wrapper {
            margin: 50px 0 50px 0;
        }
        .login {
            display: grid;
            padding-left: 30%;
            padding-right: 30%;
            text-align: center;
        }
        .login > .flat-button-1 {
            margin: 45px 0px 36px 0px;
            
        }.
        .login > .input-webinar {
            margi: 5px 0 5px 0;
        }
        `;

        $head.insertAdjacentElement("beforeend", $style);
    }

    module._children = () => {
        const $labelEmail = labelWebinar.render("E-mail");
        const $inputEmail = inputWebinar.render({
            id: "email",
            placeholder: "example@email.com",
            type: "email"
        });
        const $labelPass = labelWebinar.render("Password");
        const $inputPass = inputWebinar.render({
            id: "password",
            placeholder: "********",
            type: "password"
        });
        /*const $linkForget = linkForget.render({
            href="/forget",
            content: "Forget password?"
        });*/
        const $btnLogin = flatButton.render({
            content: "Login",
            path: "wwww.google.com"
        })
        const $btnCreate = flatButton.render({
            content: "Create",
            path: "singup"
        })

        return `
            ${$labelEmail}
            ${$inputEmail}

            ${$labelPass}
            ${$inputPass}
            
            ${$btnLogin}
            ${$btnCreate}

        `;
    };

    module.render = () => {
        module._style();

        return `
            <form class="login" action="" method="POST">${module._children()}</form>
        `
    }

    return {
        render: module.render
    }
})();