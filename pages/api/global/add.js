const { Add } = require("../services/mongo.js");

export default async (req, res) => {
  const result = await Add("myio_guests", "link_groups", {
    group_title: req.body.title,
    created_on: new Date().toDateString(),
    public: true,
  });
  res.json({
    message: "list added successfully",
    result: result,
  });
};
