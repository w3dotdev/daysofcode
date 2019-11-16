const checkFields = (req, res, next) => {
  const { title, description, category } = req.body;

  if (title && description && category) {
    next();
  } else {
    res.status(400).json({ message: 'invalid' });
  }
}

module.exports = {
  checkFields
};
