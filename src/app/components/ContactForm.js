"use client";

import { useState } from "react";

export default function ContactForm() {
  const [accepted, setAccepted] = useState(false);

  return (
    <div className="w-full max-w-3xl bg-gray-100 p-6 sm:p-8 rounded-xl shadow font-figtree">
      <form className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="border border-backgroundcolor rounded px-4 py-2 w-full outline-none"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border border-backgroundcolor rounded px-4 py-2 w-full outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-backgroundcolor rounded px-4 py-2 w-full outline-none"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="border border-backgroundcolor rounded px-4 py-2 w-full outline-none"
          />
        </div>

        <textarea
          rows={5}
          placeholder="Tell us more about your specific needs or any questions you have."
          className="border border-backgroundcolor rounded px-4 py-2 w-full outline-none"
        />

        <div className="flex items-start gap-2 text-sm">
          <input
            type="checkbox"
            className="mt-1"
            checked={accepted}
            onChange={(e) => setAccepted(e.target.checked)}
          />
          <label className="text-sky-950 font-albert">
            I accept 49 Pound social&apos;s privacy policy and agree for this data
            to be used to respond to me and stored until notice is given for it
            to be removed.
          </label>
        </div>

        <button
          type="submit"
          className="bg-backgroundcolor text-white font-semibold px-6 py-2 rounded w-[90px]"
        >
          SEND
        </button>
      </form>
    </div>
  );
}
