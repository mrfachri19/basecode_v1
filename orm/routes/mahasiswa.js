const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "get all mahasiswa"
    })
})
router.post('/', (req, res, next) => {
    res.status(200).json({
        message: "get all mahasiswa"
    })
})

module.exports = router;