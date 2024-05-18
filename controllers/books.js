const { getModel } = require("../data/database");

const getAll = async (req, res) => {
  try {
    const books = await getModel("book").find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSingle = async (req, res) => {
  try {
    const book = await getModel("book").findById(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createBook = async (req, res) => {
  try {
    let title = req.body.title;
    let author = req.body.author;
    let isbn = req.body.isbn;
    let published_date = req.body.published_date;
    let genre = req.body.genre;
    let description = req.body.description;
    let cover_image = req.body.cover_image;
    let pages = req.body.pages;
    let language = req.body.language;
    let publisher = req.body.publisher;
    let created_at = req.body.created_at;
    let updated_at = req.body.updated_at;

    const bookModel = getModel("book");
    const newBook = new bookModel({
        title,
        author,
        isbn,
        published_date,
        genre,
        description,
        cover_image,
        pages,
        language,
        publisher,
        created_at,
        updated_at
    });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
const updateBook = async (req, res) => {
  try {
    
    let title = req.body.title;
    let author = req.body.author;
    let isbn = req.body.isbn;
    let published_date = req.body.published_date;
    let genre = req.body.genre;
    let description = req.body.description;
    let cover_image = req.body.cover_image;
    let pages = req.body.pages;
    let language = req.body.language;
    let publisher = req.body.publisher;
    let created_at = req.body.created_at;
    let updated_at = req.body.updated_at;
    const book = await getModel("book").findByIdAndUpdate(
      req.params.id,
      {
        title,
        author,
        isbn,
        published_date,
        genre,
        description,
        cover_image,
        pages,
        language,
        publisher,
        created_at,
        updated_at},
      { new: true }
    );
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.status(200).json(book);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteBook = async (req, res) => {
  try {
    const book = await getModel("book").findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAll,
  getSingle,
  createBook,
  updateBook,
  deleteBook,
};
