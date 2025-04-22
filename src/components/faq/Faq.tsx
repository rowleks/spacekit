"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What's the quality of your product?",
    answer:
      "We prioritize quality in every item we sell. Our products are designed to be durable, functional, and stylish.",
  },
  {
    question: "Do you offer returns?",
    answer:
      "Yes! If you're not 100% satisfied with your purchase, we offer a 30-day return policy on all products.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Absolutely. We offer worldwide shipping, so you can enjoy our products no matter where you are",
  },
  {
    question: "How long will my order take to arrive?",
    answer:
      "Shipping times vary by location, but we aim to deliver within 5-10 business days for most orders.",
  },
  {
    question: "Are your products environmentally friendly?",
    answer:
      "We are committed to sustainability and use eco-friendly materials whenever possible in the production and packaging of our products.",
  },
];

export default function Faq() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleFaq = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="bg-gray">
      <div className=" px-8 py-24 mx-auto max-w-7xl">
        <h6 className="text-huge text-center max-w-xl leading-18 mx-auto mb-8 md:text-h5">
          Frequently asked questions
        </h6>

        {faqs.map((faq, index) => (
          <div
            className={`hover:bg-white p-6 rounded-md cursor-pointer mb-2 ${
              openIndexes.includes(index) ? "bg-white" : "bg-transparent"
            }`}
            key={index}
            onClick={() => toggleFaq(index)}
          >
            <div className="flex justify-between items-center">
              <p>{faq.question}</p>
              <span
                className={`transform transition-transform duration-300 text-large ${
                  openIndexes.includes(index) ? "rotate-270" : "rotate-90"
                }`}
              >
                &gt;
              </span>
            </div>
            <div
              className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                openIndexes.includes(index) ? "max-h-40 my-3" : "max-h-0"
              }`}
            >
              <p className="text-txt">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
