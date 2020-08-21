const OrderDetail = (sequelize, O) => {

  const orderDetail = sequelize.define('OrderDetail', {
    id: {
      type: O.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    price: {
      type: O.DECIMAL,
      allowNull: false
    },
    amount: {
      type: O.DECIMAL,
      allowNull: true,
      defaultValue: 1
    }
  });

  return orderDetail;
};

module.exports = OrderDetail;
