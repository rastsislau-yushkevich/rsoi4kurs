const { Router } = require("express");
const Comp = require("../models/Comp");
const router = Router()

router.get("/", async (req, res) => {
    const comps = await Comp.find({}).lean();

    res.render("index", {
        title: "index",
        comps
    });
})

router.get("/add", (req, res) => {
    res.render("add", {
        title: "add"
    })
})

router.get("/guarantee", async (req, res) => {
    const compsGuar = await Comp.find({guarantee: {$gte: 13}}).lean();
    // await compsGuar.filter((el) => el.guarantee > 13);

    res.render("guarantee", {
        title: "guarantee",
        compsGuar
    })
})

router.post("/add", async (req, res) => {
    const comp = new Comp({
        producer: req.body.producer,
        driveSpace: req.body.driveSpace,
        guarantee: req.body.guarantee,
        amount: req.body.amount
    })

    console.log(comp);

    await comp.save();

    res.redirect("/")
})

module.exports = router