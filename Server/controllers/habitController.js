const Habit = require('../models/habitModel')

//getHabits /habits (GET)

const getHabits = async (req, res) => {
  const habits = await Habit.find({ archived: false, user_id: req.user.id })
  res.json(habits)
}

//insert Habits /habits (POST)

const newHabit = async (req, res) => {
  const newHabit = new Habit({
    ...req.body,
    completionDate: new Date(),
    user_id: req.user.id
  })
  await newHabit.save()
  res.json(newHabit)
}

//updateHabit /habits/:id(PUT)
const updateHabit = async (req, res) => {
  const habit = await Habit.findById(req.params.id)

  if (habit.user_id.toString() !== req.user.id) {
    res.status(403)
    throw new Error('User Dont Have Permission To Update Other user Habits')
  }

  const updatedHabit = await Habit.findByIdAndUpdate(
    req.params.id,
    { ...req.body, completionDate: new Date(), user_id: req.user.id },
    { new: true }
  )
  res.json(updatedHabit)
}

//deleteHabit /habits/:id(delete)
const deleteHabit = async (req, res) => {
  const habit = await Habit.findById(req.params.id)

  if (habit.user_id.toString() !== req.user.id) {
    res.status(403)
    throw new Error('User Dont Have Permission To Update Other user Habits')
  }

  await Habit.findByIdAndDelete(req.params.id)
  res.json({ message: 'Habit deleted' })
}

// Endpoint to archive completed habits : /habits/archive (post)

const archiveHabit = async (req, res) => {
  await Habit.updateMany(
    { completed: true, archived: false, user_id: req.user.id },
    { $set: { archived: true } }
  )
  res.json({ message: 'Completed habits archived' })
}

module.exports = { getHabits, newHabit, updateHabit, deleteHabit, archiveHabit }
