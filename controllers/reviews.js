const { getModel } = require("../data/database");

const getAll = async (req, res) => {
  try {
    const reviews = await getModel('review').find();
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSingle = async (req, res) => {
  try {
    const review = await getModel('review').findById(req.params.id);
    if (!review) return res.status(404).json({ message: "Review not found" });
    res.status(200).json(review);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createReview = async (req, res) => {
  try {
    let user_name = req.body.user_name;
    let book_id = req.body.book_id;
    let rating = req.body.rating;
    let comment = req.body.comment;
    let created_at = req.body.created_at;
    let updated_at = req.body.updated_at;

    const reviewModel = getModel('review');
    const newReview = new reviewModel({
        user_name,
        book_id,
        rating,
        comment,
        created_at,
        updated_at
        
    });
    await newReview.save();
    res.status(201).json(newReview);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateReview = async (req, res) => {
  try {
    
    let user_name = req.body.user_name;
    let book_id = req.body.book_id;
    let rating = req.body.rating;
    let comment = req.body.comment;
    let created_at = req.body.created_at;
    let updated_at = req.body.updated_at;
    const review = await getModel('review').findByIdAndUpdate(req.params.id,{
        user_name,
        book_id,
        rating,
        comment,
        created_at,
        updated_at
    }, {
      new: true,
    });
    if (!review) return res.status(404).json({ message: "Review not found" });
    res.status(200).json(review);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteReview = async (req, res) => {
  try {
    const review = await getModel('review').findByIdAndDelete(req.params.id);
    if (!review) return res.status(404).json({ message: "Review not found" });
    res.status(200).json({ message: "Review deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAll,
  getSingle,
  createReview,
  updateReview,
  deleteReview,
};
