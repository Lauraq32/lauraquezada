const { response, request } = require('express');
const usuario = require('../models/usuario');


const Usuario = require('../models/usuario');


const usuariosGet = async(req = request, res = response) => {
    const id = req.params.productId;
  usuario.findById(id)
    .select('name email _id password rol')
    .exec()
    .then(doc => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json({
            product: doc,
        });
      } else {
        res
          .status(404)
          .json({ message: "user not found" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

   

const usuariosPost =  async (req, res = response) => {
    const usuarios = new Usuario({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    rol: req.body.rol
  });
    usuarios
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Created user successfully",
        createdUsuario: {
            name: result.name,
            email: result.email,
            password: result.password,
            rol: req.body.rol
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};

const usuariosPut = async(req, res = response) => {
    const id = req.params.usuarioId;
    const updateOps = {};
    for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  Product.update({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
      res.status(200).json({
          message: 'user updated',
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
});
}
    

const usuariosDelete = async(req, res = response) => {
    const id = req.params.productId;
  Usuario.remove({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json({
          message: 'user deleted',
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
}
    
    




module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
}