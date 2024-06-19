const { Apartamento } = require("../database/models");

module.exports = {
  list: async (req, res) => {
    console.log("Req: ", req);
    try {
      const apartments = await Apartamento.findAll();
      return res.status(200).json(apartments);
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};
