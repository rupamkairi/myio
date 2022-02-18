export default async (req, res) => {
  try {
    res.json({
      message: "👍",
      status: {
        mongodb: {},
      },
    });
  } catch (err) {
    res.json({
      message: "🌋",
      status: {
        mongodb: {},
      },
    });
  } finally {
  }
};
