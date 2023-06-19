const express = require("express");
const quiz = require("../modules/Quiz");
const quizRouter = express.Router();

//CREATE QUIZ
quizRouter.post("/create", async (req, res) => {
  const { Name, Category, Subject, Overview, image, Questions } = req.body;
  try {
    const newQuiz = new quiz({
      Name,
      Category,
      Subject,
      Overview,
      image,
      Questions,
    });
    let result = await newQuiz.save();
    res.send({ result: result, msg: "quiz is added.." });
  } catch (error) {
    res.status(400).send({ msg: "can not add quizz" });
    console.log(error);
  }
});

// GET QUIZ
quizRouter.get("/", async (req, res) => {
  try {
    let result = await quiz.find();
    res.status(200).send({ quiz: result, msg: "Quiz List" });
  } catch (error) {
    res.status(400).send({ msg: "can not get quizz" });

    console.log(error);
  }
});

// UPDATE QUIZ
quizRouter.put("/:id", async (req, res) => {
  try {
    const result = await quiz.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } },
      { new: true }
    );
    res.send({ updateQuiz: result, msg: "updated successfully" });
  } catch (error) {
    res.status(400).send({ msg: "can not update quizz" });
    console.log(error);
  }
});

//DELETE QUIZ
quizRouter.delete("/:id", async (req, res) => {
  try {
    await quiz.findOneAndDelete({ _id: req.params.id });
    res.send({ msg: "delete successfuly" });
  } catch (error) {
    res.status(400).send({ msg: "can not delete this quizz" });
    console.log(error);
  }
});

module.exports = quizRouter;
