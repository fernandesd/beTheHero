const connection = require('../database/connection');

module.exports = {
    async show(req, res) {
        const ong_id = req.headers.authorization;
        console.log(ong_id);

        const incidents = await connection('incidents')
            .where('ong_id', '=', ong_id)
            .select("*");

        return res.json(incidents);
    }
}