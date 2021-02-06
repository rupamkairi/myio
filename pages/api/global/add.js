const { Add } = require("../services/mongodbServices");

export default async (req, res) => {
  const document = {
    group_title: JSON.parse(req.body)["title"],
    created_on: new Date().toDateString(),
    public: true,
  };

  const result = await Add("myio_guests", "link_groups", document);

  res.json({
    message: "list added successfully",
    result: result,
    _id: result.insertedId,
    ops: result.ops,
  });
};
