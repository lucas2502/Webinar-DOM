const btnSum = (() => {
    const module = {}

    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style")

        $style.textContent = `
        .btn {
            margin: 0 auto;
        }
        `

        $head.insertAdjacentElement("beforeend", $style)
    }

    module.add = () => {
        document.querySelector(".webScore").textContent = store.counter;
        console.log(store.counter)
        store.counter ++
    }
    module.remove = () => {
        document.querySelector(".webScore").textContent = store.counter;
        console.log(store.counter)
        store.counter --
    }

    module.render = () => {
        module._style();

        return `
        <h1 class="webScore">${store.counter}</h1>
        <input 
        type="submit" 
            class="btn" 
            value="Adicionar"
            onClick="btnSum.add()" 
        />
        <input 
            type="submit" 
            class="btn" 
            value="Remover"
            onClick="btnSum.remove()" 
        />
        `
    }
    return {
        render: module.render,
        add: module.add,
        remove: module.remove
    }
})();