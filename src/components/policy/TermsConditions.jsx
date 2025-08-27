import React from "react";

const TermsConditions = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6 text-blue">
        Terms and Conditions
      </h1>
      <p className="mb-4">
        Welcome to the official website of MAD Foundation. By accessing or using this site, you agree to the following terms and conditions:</p>
      <ol className="list-decimal pl-6 space-y-4">
        <li>
          <strong>Use of Website:</strong> This website is intended to provide information about MAD Foundation’s initiatives and to enable participation in its activities, services, and programs related to the overall empowerment of persons with disabilities. You agree not to misuse the site, disrupt its operation, or use it for unlawful purposes.
        </li>
        <li>
          <strong>Content Ownership:</strong> All text, images, logos, and materials on this website belong to MAD Foundation unless otherwise stated. You may view and share content for personal, non-commercial use with proper acknowledgment. Reproduction or modification without prior permission is not allowed.
        </li>
        <li>
          <strong>Information Accuracy:</strong> We strive to provide accurate and updated information. However, MAD Foundation does not guarantee completeness or absolute accuracy, and the content may change without prior notice.
        </li>
        <li>
          <strong>Privacy:</strong> Any personal information you share with us will be handled as per our Privacy and Policy. We take reasonable steps to protect your data.
        </li>
        <li>
          <strong>Third-Party Links:</strong> Our site may contain links to external websites. MAD Foundation is not responsible for the content, policies, or practices of third-party sites.
        </li>
        <li>
          <strong>Limitation of Liability:</strong>While we take care to maintain secure and accessible services, MAD Foundation will not be liable for any loss, damage, or inconvenience caused by the use of this website or reliance on its content.
        </li>
        <li>
          <strong>Changes to Terms:</strong> We may update these Terms and Conditions at any time. Continued use of the website after changes means you accept the updated terms.
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
