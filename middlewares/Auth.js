const isAuthenticated = async (req, res, next) => {
  try {
    const { key } = req.query;
    if (!key) {
      return res.status(404).json({
        success: false,
        message: "Missing crediential, Key is not provided.",
      });
    }

    if (key === "@cat12281") {
      next();
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = isAuthenticated;
