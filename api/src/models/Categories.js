const Categories = (sequelize, S) => {
  const C = sequelize.define('categories', {
    name: {
      type: S.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
      primaryKey: true
    },
  });

  return C;
};

module.exports = Categories;
