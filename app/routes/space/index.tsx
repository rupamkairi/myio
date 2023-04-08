import { useEffect, useState } from "react";
import { supabase } from "services/supabase";
import { useAuthContext } from "~/contexts/AuthContext";
import SpaceIndexLayout from "~/layouts/space/index.layout";

export default function Space() {
  const auth = useAuthContext();

  useEffect(() => {
    console.log(auth);
  }, [auth]);

  return (
    <SpaceIndexLayout>
      <h1>Space</h1>
      <pre className="text-sm">{JSON.stringify(auth?.user, null, 2)}</pre>
    </SpaceIndexLayout>
  );
}
