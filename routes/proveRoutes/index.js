const routes = require('express').Router();
routes
    .use('02', require('./prove02'))
       .get('/', (req, res, next) => {
        res.render('pages/ProveAssignments/', {
            pageTitle: "Prove Assignments",
            path: "/proveAssignments"
        });
    });
modules.exports = routes;