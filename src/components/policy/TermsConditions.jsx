import React from "react";

const TermsConditions = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6 text-blue">
        Terms and Conditions
      </h1>

      <ol className="list-decimal pl-6 space-y-4">
        <li>
          <strong>Use of Website:</strong> Intended to provide information and enable participation. Do not misuse or use unlawfully.
        </li>
        <li>
          <strong>Content Ownership:</strong> All materials belong to MAD Foundation unless stated. Share only for personal, non-commercial use with acknowledgment.
        </li>
        <li>
          <strong>Information Accuracy:</strong> We strive for accuracy, but content may change without notice.
        </li>
        <li>
          <strong>Privacy:</strong> Any information shared will be handled per our Privacy Policy.
        </li>
        <li>
          <strong>Third-Party Links:</strong> We are not responsible for content or practices of external websites.
        </li>
        <li>
          <strong>Limitation of Liability:</strong> MAD Foundation will not be liable for losses or damages from use of this website.
        </li>
        <li>
          <strong>Changes to Terms:</strong> Updates may occur anytime. Continued use = acceptance.
        </li>
        <li>
          <strong>Contact:</strong> For queries, email{" "}
          <a href="mailto:contact@mad-foundation.org" className="text-blue-600 underline">
            contact@mad-foundation.org
          </a>
        </li>
      </ol>
    </div>
  );
};

export default TermsConditions;
