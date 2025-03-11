const express = require('express');
const router = express.Router();
const {getAllUser,getOneUser, createUser,updateUser, deleteUser}= require('../controllers/users.contoller')


router.post('/',createUser);
router.get('/:id',getOneUser);
router.get('/',getAllUser);
router.patch('/:id',updateUser);
router.delete('/:id',deleteUser);

module.exports = router;