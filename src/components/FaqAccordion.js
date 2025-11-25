import React, { useState } from "react";



const faqs = [
  {
    question: "What is this app about?",
    answer: "This app helps users track and improve their daily habits.",
  },
  {
    question: "How do I reset my password?",
    answer:
      "Click on 'Forgot Password' on the login screen and follow instructions.",
  },
  {
    question: "Can I use this app offline?",
    answer: "Yes, some features are available offline after the initial setup.",
  },
];

function FaqAccordion() {
  const [id, setId] = useState(null);
  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div className="faq-item" key={index}>
          <button className="faq-question" onClick={() => { id == index ? setId(null) : setId(index); console.log("id==========>",id); }}>
            <span>{faq.question}</span>
            <span className="faq-icon">
              {/* <FiChevronDown /> */}
            </span>
          </button>
          {id == index && (<span>{faq.answer}</span>)}
        </div>
      ))}
    </div>
  );
}

export default FaqAccordion;
