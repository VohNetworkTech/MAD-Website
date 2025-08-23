import React from "react";

const RefundPolicy = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6 text-blue">
        Refund and Cancellation Policy
      </h1>

      <p className="mb-4">
        MAD Foundation accepts donations and contributions in good faith to
        support its initiatives for the empowerment of persons with
        disabilities. Funds received are applied for our ongoing and planned
        initiatives and projects.
      </p>

      <h2 className="text-xl font-semibold mb-3">Policy Guidelines:</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>No Refunds: Once a donation is made, it cannot be refunded, cancelled, or transferred.</li>
        <li>Accuracy: Donors must carefully review details before making payments.</li>
        <li>
          Updates: Policy may change anytime, effective once published on this page.
        </li>
      </ul>

      <p className="mt-6">
        For any concerns, reach us at{" "}
        <a href="mailto:contact@mad-foundation.org" className="text-blue-600 underline">
          contact@mad-foundation.org
        </a>
      </p>
    </div>
  );
};

export default RefundPolicy;
