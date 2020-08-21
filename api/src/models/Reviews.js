const Reviews = (sequelize, R) => {
  const reviews = sequelize.define('reviews', {
    description: {
      type: R.TEXT,
    },
    rate: {
      type: R.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
  });

  return reviews;
};

module.exports = Reviews;
