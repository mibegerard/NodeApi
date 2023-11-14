module.exports = (server) => {
    const getController = require("../controllers/getController");

    server.route("/posts/:id")
        .get(getController.getPostById);
};
