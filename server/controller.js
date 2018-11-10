module.exports = {

    // Add user endpoint
    addUser: (req, res, next) => {

        const dbInstance = req.app.get('db');

        const { username, secret } = req.body;

        dbInstance.add_user([username, secret]).then(() => res.sendStatus(200)).catch(err => {
            res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
            console.log(err)
        });

    },

    // Authorize user endpoint
    authUser: (req, res, next) => {

        const dbInstance = req.app.get('db');

        const { username, secret } = req.body;

        dbInstance.find_user([username, secret]).then((val) => {

            if (val.length === 0) {
                res.sendStatus(401)
            } else {
                res.sendStatus(200)
            }
        }).catch(err => {
            res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
            console.log(err)
        });

    },

}