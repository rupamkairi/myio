import { useEffect, useState } from "react";
import { supabase } from "services/supabase";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signUpWithEmail() {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) alert(error);
    else console.log("Signup", data);
  }
  return (
    <div>
      <h1>Signup</h1>
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <div>
        <button
          onClick={() => {
            signUpWithEmail();
          }}
        >
          Signup
        </button>
      </div>
    </div>
  );
}
