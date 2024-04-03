import { router } from "../../../server.js";

router.get("/",(req,res)=>{
    res.render("../views/main.ejs",{

    })
});

export default router;