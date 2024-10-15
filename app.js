import Router from "./services/Router.js";
import Store from "./services/Store.js";

window.app = {};
app.store = Store;
app.router = Router;

window.addEventListener("DOMContentLoaded", () => {
    app.router.init();
});
