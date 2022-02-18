import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    console.log(req.method);
    res.status(200).json({
      message: "👍",
      status: {
        mongodb: {},
      },
    });
  } catch (err) {
    res.status(400).json({
      message: "🌋",
      status: {
        mongodb: {},
      },
    });
  } finally {
  }
}
