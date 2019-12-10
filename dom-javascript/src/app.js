(() => {
    
    const { hash } = window.location;

    const paths = [];
    paths[""] = login;
    paths["#/login"] = login;
    paths["#/singup"] = singup;

    paths[hash] === undefined ? paths["#/login"]() : paths[hash]()
    
})(); 