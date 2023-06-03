const { catchAsync } = require("../helpers/catchAsync");
const User = require("../models/userModel");

const fetchUsers = catchAsync(async (req, res) => {
    const users = await User.find({})
    res.status(200).json(users)
})

module.exports = {fetchUsers}