import { router } from "../../../server.js";
import { list } from "../../services/data.js";

router.get("/list", (req, res) => {
  res.render("../views/main.ejs", { list: list });
});
router.post("/list/new", (req, res) => {
  if (req.body.todo_text.length > 0) {
    list.push({ active: true, text: req.body.todo_text });
  }
  res.redirect("/list");
});

router.post("/list/:index", async (req, res) => {
  list[req.params.index].active = false;
  res.redirect("/list");
});
export default router;
