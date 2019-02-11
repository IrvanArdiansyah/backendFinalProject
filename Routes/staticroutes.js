const express = require('express')
const router = require('express').Router();

router.use('/Assets/Img/1/1', express.static('Assets/Img/1/1'));
router.use('/Assets/Img/1/2', express.static('Assets/Img/1/2'));
router.use('/Assets/Img/1/3', express.static('Assets/Img/1/3'));
router.use('/Assets', express.static('Assets/Img/Assets'));


module.exports = router;