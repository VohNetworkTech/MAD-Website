import React from "react";
const PrivacyPolicy = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {" "}
      <h1 className="text-3xl font-bold mb-6 text-blue">
        {" "}
        Privacy and Policy{" "}
      </h1>{" "}
      <p className="mb-4">
        {" "}
        MAD Foundation respects your privacy and is committed to safeguarding
        any information you share with us through this website. We collect only
        limited details necessary for communication, registration, or
        participation in our programs, and we use them solely for those
        purposes. Your trust is important to us, and we make every effort to
        keep your information secure.{" "}
      </p>{" "}
      <h2 className="text-xl font-semibold mb-3">To protect your data and ensure a safe online experience:</h2>{" "}
      <ul className="list-disc pl-6 space-y-2">
        {" "}
        <li>
          We use secure systems and practices to safeguard the information you
          provide.
        </li>{" "}
        <li>
          Your information is not sold or shared with anyone, except for secure hosting providers who operate our website servers and are required to protect the data.
        </li>{" "}
        <li>
          Information collected is used only for communication, program participation, or improvement of our services.
        </li>{" "}
        <li>
          We encourage you to use strong passwords and keep them confidential when accessing our website.
        </li>{" "}
        <li>
          {" "}
          MAD Foundation reserves the right to update or change this Privacy and Policy at any time; changes take effect once posted on this page.{" "}
        </li>{" "}
      </ul>{" "}
      <p className="mt-6">
        {" "}
        For any concerns, you may contact us at{" "}
        <a
          href="mailto:contact@mad-foundation.org"
          className="text-blue-600 underline"
        >
          {" "}
          contact@mad-foundation.org{" "}
        </a>{" "}
      </p>{" "}
    </div>
  );
};
export default PrivacyPolicy;
