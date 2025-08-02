import PolicyLayout from "@/app/components/Policy/PolicyLayout";


export const metadata = {
    title: "Terms and Conditions",
    description: "Terms and Conditions",
};

function Tnc() {

    const data = [
  {
    "title": "Scope of Agreement",
    "content": "This User Agreement (\"Agreement\") outlines the terms and conditions under which H&K Holidays LLP (\"H&K Holidays\") and its brand Travel Tailor provide services to individuals (\"User\") who intend to purchase or inquire about any products and/or services offered by H&K Holidays, whether through our website Traveltailor.in or any other customer interface channels. Each of H&K Holidays and the User is individually referred to as a \"party,\" and collectively as the \"parties.\""
  },
  {
    "title": "Acceptance of Terms",
    "content": "By availing services from H&K Holidays, Users confirm that they have read, comprehended, and expressly agreed to the terms and conditions of this Agreement. This Agreement defines all rights and obligations of both the User and H&K Holidays concerning any services offered."
  },
  {
    "title": "Right to Terminate Access",
    "content": "H&K Holidays reserves the right to terminate access to any or all of its websites or sales channels at any time without notice, for general maintenance or any other reason."
  },
  {
    "title": "Additional Terms for Specific Services",
    "content": "Specific Terms of Service (\"TOS\") may apply to particular services such as travel packages, hotel bookings, or air tickets. In case of conflict between any TOS and this Agreement, the terms of this Agreement shall prevail."
  },
  {
    "title": "Compliance with Service Provider Policies",
    "content": "Users are responsible for reading and complying with the terms and guidelines of third-party service providers like airlines or hotels. These may include operational rules or specific terms related to their services."
  },
  {
    "title": "Unconditional Acceptance of Terms",
    "content": "Availing any services from H&K Holidays constitutes the User's acceptance of this Agreement and applicable TOS, without modification. Users not agreeing to these terms must refrain from using the services."
  },
  {
    "title": "Precedence of Terms",
    "content": "In case of a conflict between terms in this Agreement and other documents or websites of H&K Holidays, the terms of this Agreement shall take precedence."
  },
  {
    "title": "Third-Party Account Access",
    "content": "By using account access services, the User authorizes H&K Holidays to retrieve information from third-party sites such as banks or gateways. The User is responsible for safeguarding login credentials and notifying H&K Holidays of any breach."
  },
  {
    "title": "Confidential Information",
    "content": "Any information marked confidential by H&K Holidays must be kept confidential by the User, unless disclosure is required by law or necessary for fulfilling Agreement obligations."
  },
  {
    "title": "Use of Website, App, and Whatsapp",
    "content": "Your use of Travel Tailor's website, app, or WhatsApp is at your own risk. You are prohibited from copying, distributing, or altering any content. H&K Holidays reserves the right to update or delete content at any time."
  },
  {
    "title": "User’s Duties",
    "content": "Users are responsible for verifying data, bookings, and complying with all laws and guidelines. H&K Holidays is not responsible for determining the legality of user-conducted transactions."
  },
  {
    "title": "Insurance Responsibility",
    "content": "Unless specified, obtaining adequate travel insurance is the User's responsibility. H&K Holidays is not liable for claims not honored by insurance providers."
  },
  {
    "title": "Force Majeure",
    "content": "H&K Holidays shall not be held liable for failure or delay in performance caused by unforeseen events such as natural disasters, strikes, or government actions. Affected users may receive alternative arrangements or refunds where possible."
  },
  {
    "title": "Limit of Liability",
    "content": "H&K Holidays’s maximum liability shall be limited to the amount received for specific services, minus applicable charges. It shall not cover indirect, incidental, or consequential damages."
  },
  {
    "title": "Data Download and Security",
    "content": "Users download content at their own risk. H&K Holidays strives to keep its content virus-free but cannot guarantee absolute safety from malware."
  },
  {
    "title": "Customer Communication",
    "content": "Users authorize H&K Holidays to contact them via email, SMS, or call with promotional or service-related information. Users can opt out by emailing hi@traveltailor.in."
  },
  {
    "title": "Intellectual Property Rights",
    "content": "All content including images, videos, and text is protected by IP laws. Users may not reproduce or distribute such content without prior written consent."
  },
  {
    "title": "Visa Requirements",
    "content": "Users are responsible for obtaining visas. H&K Holidays is not liable for issues or cancellations due to visa non-compliance."
  },
  {
    "title": "Indemnity",
    "content": "The User agrees to indemnify and hold harmless H&K Holidays and its affiliates from any claims, damages, or losses arising from breach of this Agreement."
  },
  {
    "title": "Right to Decline Service",
    "content": "H&K Holidays reserves the right to reject any booking or user request without obligation to provide a reason. A contract is considered complete only upon payment and acceptance."
  },
  {
    "title": "Cancellation Due to Invalid Information",
    "content": "If the User provides false or misleading information, H&K Holidays may cancel bookings without notice. The User is liable for any resulting losses or claims."
  },
  {
    "title": "Severability Clause",
    "content": "If any part of this Agreement is found invalid or unenforceable, the remaining parts will remain effective."
  },
  {
    "title": "Section Headings",
    "content": "Headings are for reference only and do not affect interpretation of the Agreement."
  },
  {
    "title": "Relationship Between Parties",
    "content": "Nothing in this Agreement shall be deemed to constitute a partnership or agency between the User and H&K Holidays."
  },
  {
    "title": "Information Updates",
    "content": "H&K Holidays strives to maintain accuracy, but occasional errors may occur. Corrections will be made without prior notice."
  },
  {
    "title": "Changes to Terms",
    "content": "H&K Holidays may modify terms and service charges at any time. Users are encouraged to review them regularly."
  },
  {
    "title": "Governing Law and Jurisdiction",
    "content": "This Agreement is governed by Indian law. Disputes are subject to the jurisdiction of courts in Bangalore, India."
  },
  {
    "title": "User Responsibilities",
    "content": "Users agree to use the services lawfully and assume full responsibility for compliance with local regulations. H&K Holidays disclaims warranties for third-party services."
  },
  {
    "title": "Use of Customer Images",
    "content": "Images or videos shared by customers may be used for social media. Users can opt out by emailing hi@traveltailor.in."
  },
  {
    "title": "Definitions",
    "content": "\"Agreement\" refers to this document. \"H&K Holidays\" refers to H&K Holidays LLP and its brand Travel Tailor. \"User\" refers to the individual using the service. \"Services\" refer to the travel-related offerings."
  },
  {
    "title": "Dispute Resolution",
    "content": "Disputes shall be resolved amicably or through arbitration under the Indian Arbitration and Conciliation Act, 1996 in New Delhi, in English."
  },
  {
    "title": "Privacy Policy",
    "content": "Use of the services is also governed by the Privacy Policy available on the website. Please review it for more details."
  },
  {
    "title": "User Behavior",
    "content": "Users must not post unlawful, abusive, or infringing content and must use the website only for lawful purposes."
  },
  {
    "title": "Forbidden Activities",
    "content": "Users are prohibited from hacking, reverse engineering, reproducing, or interfering with the website or services."
  },
  {
    "title": "External Links",
    "content": "H&K Holidays is not responsible for the content or risks associated with any third-party websites linked from its website."
  },
  {
    "title": "Termination of Access",
    "content": "H&K Holidays may terminate access to the website or services at its discretion, without notice or liability."
  },
  {
    "title": "Entire Agreement",
    "content": "This document represents the full agreement between the User and H&K Holidays regarding service usage."
  },
  {
    "title": "Non-Waiver",
    "content": "Failure to enforce any provision of this Agreement does not constitute a waiver of that provision."
  },
  {
    "title": "Assignment",
    "content": "H&K Holidays may assign its rights under this Agreement without notice. Users may not assign theirs without written consent."
  },
  {
    "title": "Refund & Cancellation Policy",
    "content": "**Custom Itineraries:** Planning fee is non-refundable.\n**Travel Bookings:** Refunds are subject to provider policies.\n**Refund Timeline:** 7–14 business days.\n**Cancellation Requests:** Must be sent in writing to hi@traveltailor.in"
  },
  {
    "title": "Contact Details",
    "content": "If you have questions about this Agreement or services, contact us at hi@traveltailor.in."
  }
]

    return ( 
        <section >
            <PolicyLayout
                data={data}
                title="Terms and Conditions"
                subtitle="Please read these terms carefully"
            />
        </section>
     );
}

export default Tnc;