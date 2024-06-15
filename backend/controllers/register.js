const register = (req, res) => {
    const { name, email, password } = req.body;
    res.send({ name, email, password });
};

module.exports = { register };
