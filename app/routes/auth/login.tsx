import { useEffect, useState } from "react";
import { supabase } from "services/supabase";

export default function Login() {
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

  async function signInWithEmail() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) alert(error);
    else console.log("Login", data);
  }

  return (
    <div>
      <h1>AUTH</h1>
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
      <div>
        <button
          onClick={() => {
            signInWithEmail();
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}
