module.exports = (server) => {
    const updateController = require("../controllers/updateController");

    server.route("/posts/:id")
        .put(updateController.updatePost);
};
