const express = require("express")
const router = express.Router()
const UserDataController = require("../controller/userController")


router.post("/users/", UserDataController.index)
router.post("/user/", UserDataController.store)

router.get("/user/:id/edit", UserDataController.edit)
router.put("/users/:id", UserDataController.update)
router.delete("/user/:id", UserDataController.destroy)
module.exports = router