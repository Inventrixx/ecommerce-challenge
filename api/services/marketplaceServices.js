const axios = require("axios");

exports.search = async (req, res) => {
  try {
    const itemsSearch = req.query.q;
    const resp = await axios.get(
      `${process.env.API_MERCADO_LIBRE}/sites/MLA/search?limit=${process.env.SEARCH_LIMIT}&q=${itemsSearch}`
    );

    const itemsFound = resp.data.results.length > 0;

    if (!itemsFound) {
      res.status(200).json({
        categories: [],
        items: [],
      });
    }

    const respCategories = resp.data.filters.find(
      (category) => category.id === "category"
    );
    const allCategories = respCategories.values[0].path_from_root.map(
      (values) => values.name
    );

    let decimals = Number.parseFloat(resp.data.price % 1).toFixed(2);

    decimals = parseInt(decimals.toString().substring(2));

    const respDataItems = resp.data.results.map((item) => ({
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id,
        amount: Math.floor(item.price),
        decimals: decimals,
      },
      picture: item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
    }));

    const response = {
      author: {
        name: "Barbara",
        lastname: "Del Vitto",
      },
      categories: allCategories,
      items: [...respDataItems],
    };

    res.status(resp.status).json(response);
    return;
  } catch (e) {
    res.status(500).json({
      status: 500,
      message: "Fallo en el servicio de Mercado Libre",
    });
  }
};

exports.searchId = async (req, res) => {
  const { id } = req.params;
  try {
    const resp = await axios.get(
      `${process.env.API_MERCADO_LIBRE}/items/${id}`
    );
    const description = await axios.get(
      `${process.env.API_MERCADO_LIBRE}/items/${id}/description`
    );

    let decimals = Number.parseFloat(resp.data.price % 1).toFixed(2);

    decimals = parseInt(decimals.toString().substring(2));

    const responseUniqueItem = {
      author: {
        name: "Barbara",
        lastname: "Del Vitto",
      },
      item: {
        id: resp.data.id,
        title: resp.data.title,
        price: {
          currency: resp.data.currency_id,
          amount: resp.data.price,
          decimals: decimals,
        },
        category: resp.data.category_id,
        picture: resp.data.pictures[0].url,
        condition: resp.data.condition,
        free_shipping: resp.data.shipping.free_shipping,
        sold_quantity: resp.data.sold_quantity,
        description: description.data.plain_text,
      },
    };

    res.status(resp.status).json(responseUniqueItem);
  } catch (e) {
    res.status(500).json({
      status: 500,
      message: "Fallo en el servicio de Mercado Libre",
    });
  }
};
