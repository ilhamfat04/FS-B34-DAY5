// import models here
const { product, user } = require('../../models')

exports.getProduct = async (req, res) => {
  // code here
  try {
    // `SELECT * FROM PRODUCT
    // INNER JOIN USER
    // ON PRODUCT.IDUSER = USER.ID`
    const data = await product.findAll({
      include: {
        model: user,
        as: "user",
        attributes: {
          exclude: ['password', 'updatedAt', 'createdAt']
        }
      },
      attributes: {
        exclude: ['updatedAt', 'createdAt', 'idUser']
      }
    })

    res.send({
      status: "success",
      data
    })
  } catch (error) {
    res.send({
      status: "failed",
      message: "server error"
    })
  }
};

exports.addProduct = async (req, res) => {
  // code here
};
