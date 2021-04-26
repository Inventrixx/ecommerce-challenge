const axios = require('axios');

exports.searchId = async (req, res) => {
    const {
        id
    } = req.params
    try {
        const resp = await axios.get(`${process.env.API_MERCADO_LIBRE}/categories/${id}`);

        const allCategoriesFromItem = resp.data.path_from_root.map(category => category.name)

        res.status(resp.status).json(allCategoriesFromItem);
    } catch (e) {
        res.status(500).json({
            status: 500,
            message: "Fallo en el servicio de Mercado Libre",
        });
    }

}