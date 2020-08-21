const app = require('express').Router();
const { Product } = require('../models/index.js');
const { Op } = require("sequelize");

app.get('/', async (req, res) => {
  const products = await Product.findAll(
    {
      where:
      {
        stock:
        {
          [Op.gt]: 0
        }
      }
    }
  );
  res.json(products)
});

app.get('/:idCategoria', async (req, res) => {
  const products = await Product.findAll({
    where:
    {
      stock:
      {
        [Op.gt]: 0
      }
    }
  });
  if (req.params.idCategoria === "Todos") {
    res.send(products)
  }
  else {
    const producto = await Product.findAll(
      {
        where:
        {
          stock:
          {
            [Op.gt]: 0
          },
          categoriaName: req.params.idCategoria
        }
      })
    res.send(producto)
  }
});

module.exports = app;
