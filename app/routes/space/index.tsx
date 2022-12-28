import { useEffect, useState } from "react";
import { supabase } from "services/supabase";

export default function Space() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();

        console.log(user);
        setUser(user);
      } catch (error) {
        alert(error);
      }
    })();
  }, []);

  return (
    <div>
      <h1>Space</h1>
      <pre className="text-sm">{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}
