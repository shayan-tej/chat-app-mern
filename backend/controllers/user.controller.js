import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    // const allUsers = await User.find().select("-password");  // Finds all the users including the current logged in user
    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");
    res.status(200).json(filteredUsers);
  } catch (error) {
    console.error(
      "Error occurred in getUsersForSidebar controller: " + error.message
    );
    res.status(500).json({ error: "Internal server error!" });
  }
};
