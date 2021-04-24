const axios = require("axios");


exports.search = async (req, res) => {
  try {

    const itemSearch = req.query.q;
    const resp = await axios.get(
      `${process.env.API_MERCADO_LIBRE}/sites/MLA/search?limit=${process.env.SEARCH_LIMIT}&q=${itemSearch}`
    );

    const respCategories = resp.data.filters.find(category => category.id === 'category')
    const allCategories = respCategories.values[0].path_from_root.map(values => values.name)


    const respDataItems = resp.data.results.map((item) => ({
      id: item.id,
      title: item.title,
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
  } catch (e) {
    console.group(e)
    res.status(500).json({
      status: 500,
      message: "Fallo en el servicio de Mercado Libre",
    });
  }
};

exports.searchId = async (req, res) => {
  const {
    id
  } = req.params
  try {
    const resp = await axios.get(`${process.env.API_MERCADO_LIBRE}/items/${id}`);
    const description = await axios.get(
      `${process.env.API_MERCADO_LIBRE}/items/${id}/description`
    );

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
          decimals: 0
        },
        picture: resp.data.thumbnail,
        condition: resp.data.condition,
        free_shipping: resp.data.shipping.free_shipping,
        sold_quantity: resp.data.sold_quantity,
        description: description.data.plain_text
      },
    };

    res.status(resp.status).json(responseUniqueItem);
  } catch (e) {
    console.log(e);
    res.status(500).json({
      status: 500,
      message: "Fallo en el servicio de Mercado Libre",
    });
  }
  //sample
  // {
  //   “author”: {
  //   “name”: String
  //   “lastname”: String
  //   },
  //   “item”: {
  //   "id": String,
  //   "title": String,
  //   "price": {
  //   "currency": String,
  //   "amount": Number,
  //   "decimals": Number,
  //   },
  //   “picture”: String,
  //   "condition": String,
  //   "free_shipping": Boolean,
  //   "sold_quantity", Number
  //   "description": String
  //   }
  //  }
};