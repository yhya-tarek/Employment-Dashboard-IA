const authUser = (req, res, next) =>
{
    if (req.headers.user == null)
    {
        res.status(403)
        return res.send('You need to sign in')
    }

    next()
}

const authRole = (role) =>
{
    return (req, res, next) =>
    {
        console.log(req.role);
        if (req.headers.role !== role)
        {
            res.status(401)
            return res.send('Not allowed')
        }

        next()
    }
}

module.exports = {
    authUser,
    authRole
}