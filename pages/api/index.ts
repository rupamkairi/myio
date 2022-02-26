import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const supabase = createClient(
      process.env.SUPABASE_API_URL,
      process.env.SUPABASE_PUBLIC_ANON_KEY
    );

    // const accountEntry = {
    //   username: "johndoe",
    // };
    const account = null;
    // const account = await supabase.from("accounts").insert(accountEntry);
    const accounts = await supabase.from("accounts").select();

    res.status(200).json({
      message: "👍",
      status: {
        secrets: {
          SUPABASE_API_URL: process.env.SUPABASE_API_URL,
          SUPABASE_JWT_SECRET: process.env.SUPABASE_JWT_SECRET,
          SUPABASE_PUBLIC_ANON_KEY: process.env.SUPABASE_PUBLIC_ANON_KEY,
          SUPABASE_SECRET_SERVICE_ROLE:
            process.env.SUPABASE_SECRET_SERVICE_ROLE,
        },
      },
      data: {
        account: account?.data,
        accounts: accounts?.data,
      },
    });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({
      message: "🌋",
      status: {},
      error: err.message,
    });
  } finally {
  }
}
