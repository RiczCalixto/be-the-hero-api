// Responsável pelo perfil de uma ONG (entidade) e seus incidentes

const connection = require("../database/connection");

module.exports = {
  async listSpecificOngIncidents(req, res) {
    const ong_id = req.headers.authorization;

    const incidents = await connection("incidents")
      .where("ong_id", ong_id)
      .select("*");

    return res.json(incidents);
  }
};
