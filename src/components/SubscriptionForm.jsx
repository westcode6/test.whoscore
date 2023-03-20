import React, { useState } from "react";
import axios from "axios";

const SubscriptionForm = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    axios.defaults.headers.post["Content-Type"] = "application/json";
    await axios.post("https://formsubmit.co/ajax/mogaji@whoscore.uk", {
      name: "WhoScore.Uk Update Subscription",
      email: email,
    });
    setEmail("");
    alert("Thank you! We will notify you when this feature is now available");
    setLoading(false);
  };
  return (
    <form className="flex mt-6 text-xs" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 bg-inherit p-4 border border-teal-200"
      />
      <button
        type="submit"
        className="bg-teal-200 text-black px-5 disabled:cursor-not-allowed disabled:bg-slate-400"
        disabled={loading}
      >
        Notify Me
      </button>
    </form>
  );
};

export default SubscriptionForm;
