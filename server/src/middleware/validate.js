


const validate = (schema) => (req, res, next) => {
    const { error } = schema.validate(req.body);

    if (error) {

        res.status(401).send({
           message: `ValidationError ${error.details.map(x => x.message).join(', ')}`
        })
    }
    else {
        next();
    }
}
module.exports = validate