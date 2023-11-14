module.exports = (server) => {
    const deleteController = require("../controllers/deleteController");

    server.route("/posts/:id")
        .delete(deleteController.deletePost);
};
