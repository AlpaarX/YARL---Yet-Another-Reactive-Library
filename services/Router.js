const Router = {
    init: () => {
        $$("a").forEach(a => {
            a.addEventListener("click", event => {
                event.preventDefault();
                alert("Clicked");
            })
        })
    },
    go: (route, addToHistory = true) => {
        console.log(`Going to ${route}`);
    }
}

export default Router;