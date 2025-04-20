const express = require('express')

const {
  getHabits,
  newHabit,
  updateHabit,
  deleteHabit,
  archiveHabit
} = require('../controllers/habitController')
const validateToken = require('../middleware/validateTokenHandler')
const router = express.Router()

router.use(validateToken)

router.route('/').get(getHabits).post(newHabit)

router.route('/:id').put(updateHabit).delete(deleteHabit)

router.route('/archive').post(archiveHabit)

module.exports = router
