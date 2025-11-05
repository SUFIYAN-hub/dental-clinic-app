import React, { useState } from 'react';
import '../../src/styles/FAQ.css';
import { Link } from 'react-router-dom';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const faqData = [
    {
      category: "General",
      questions: [
        {
          question: "What are your clinic hours?",
          answer: "We are open Monday to Friday from 9:00 AM to 6:00 PM, and Saturday from 10:00 AM to 4:00 PM. We also offer emergency services 24/7 for urgent dental issues."
        },
        {
          question: "Do you accept insurance?",
          answer: "Yes, we accept most major dental insurance plans. Our staff can help verify your benefits and maximize your coverage. We also offer flexible payment plans for procedures not covered by insurance."
        },
        {
          question: "How do I schedule an appointment?",
          answer: "You can schedule an appointment by calling us, using our online booking system, or visiting our clinic. We recommend booking in advance, but we also accommodate same-day appointments when possible."
        },
        {
          question: "What should I bring to my first appointment?",
          answer: "Please bring your insurance card, photo ID, a list of current medications, and any relevant medical history. If you have previous dental X-rays, bringing them can be helpful."
        }
      ]
    },
    {
      category: "Treatments",
      questions: [
        {
          question: "Are dental procedures painful?",
          answer: "Modern dentistry has advanced significantly. We use the latest anesthesia techniques and sedation options to ensure your comfort. Most procedures are virtually painless, and we prioritize patient comfort throughout treatment."
        },
        {
          question: "How often should I get my teeth cleaned?",
          answer: "We recommend professional cleanings every 6 months for most patients. However, some patients with gum disease or other conditions may need more frequent cleanings. Your dentist will recommend the best schedule for your needs."
        },
        {
          question: "How long does a root canal take?",
          answer: "A typical root canal procedure takes 60-90 minutes, depending on the complexity. Most root canals can be completed in a single visit, though some cases may require two appointments."
        },
        {
          question: "What is the best teeth whitening option?",
          answer: "We offer both in-office and take-home whitening options. In-office treatment provides immediate results in about an hour, while take-home kits work gradually over 1-2 weeks. We'll help you choose the best option based on your goals and sensitivity."
        }
      ]
    },
    {
      category: "Orthodontics",
      questions: [
        {
          question: "Am I too old for braces?",
          answer: "You're never too old! We treat patients of all ages with traditional braces and clear aligners. Adult orthodontic treatment is very common and can provide excellent results."
        },
        {
          question: "How long does orthodontic treatment take?",
          answer: "Treatment duration varies based on individual needs, typically ranging from 12-24 months. Factors include the complexity of your case, the type of treatment, and how well you follow care instructions."
        },
        {
          question: "What's the difference between braces and Invisalign?",
          answer: "Traditional braces use metal brackets and wires, while Invisalign uses clear, removable aligners. Invisalign is less visible and removable for eating and cleaning, but braces may be more effective for complex cases. We'll help you choose the best option."
        }
      ]
    },
    {
      category: "Emergency Care",
      questions: [
        {
          question: "What constitutes a dental emergency?",
          answer: "Dental emergencies include severe toothache, knocked-out teeth, broken or chipped teeth, lost fillings or crowns, abscesses, and uncontrolled bleeding. If you're experiencing severe pain or trauma, contact us immediately."
        },
        {
          question: "What should I do if my tooth gets knocked out?",
          answer: "Handle the tooth by the crown (not the root), rinse gently if dirty, try to place it back in the socket if possible, or store it in milk. Contact us immediately - timing is critical for successful re-implantation."
        },
        {
          question: "Do you offer same-day emergency appointments?",
          answer: "Yes, we prioritize emergency cases and do our best to see you the same day. Call us immediately if you have a dental emergency, and we'll accommodate you as quickly as possible."
        }
      ]
    },
    {
      category: "Costs & Payment",
      questions: [
        {
          question: "How much does a dental cleaning cost?",
          answer: "A standard cleaning typically costs $80-$150 depending on your needs. Deep cleanings for gum disease may cost more. Most insurance plans cover preventive cleanings 100%."
        },
        {
          question: "Do you offer payment plans?",
          answer: "Yes, we offer flexible payment plans to make dental care affordable. We work with third-party financing companies and can create custom payment schedules for larger procedures."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept cash, credit cards (Visa, MasterCard, American Express), debit cards, checks, and most major insurance plans. We also work with CareCredit and other healthcare financing options."
        }
      ]
    },
    {
      category: "Children's Dentistry",
      questions: [
        {
          question: "When should my child first visit the dentist?",
          answer: "The American Dental Association recommends children visit the dentist by their first birthday or within 6 months of their first tooth erupting. Early visits help establish good oral health habits."
        },
        {
          question: "How can I prepare my child for their first dental visit?",
          answer: "Talk positively about the dentist, read children's books about dental visits, and avoid using scary words. Our pediatric specialists are trained to make children comfortable and turn dental visits into positive experiences."
        },
        {
          question: "Are dental X-rays safe for children?",
          answer: "Yes, dental X-rays are very safe. We use digital X-rays which emit up to 90% less radiation than traditional X-rays. We only take X-rays when necessary and use protective lead aprons."
        }
      ]
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Flatten all questions for searching
  const allQuestions = faqData.flatMap((category, catIndex) =>
    category.questions.map((q, qIndex) => ({
      ...q,
      category: category.category,
      index: `${catIndex}-${qIndex}`
    }))
  );

  const filteredQuestions = searchTerm
    ? allQuestions.filter(
        (item) =>
          item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.answer.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : null;

  return (
    <div className="faq-page">
      <div className="faq-header">
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to common questions about our dental services</p>
      </div>

      <div className="faq-search-section">
        <div className="search-container">
          <input
            type="text"
            placeholder="🔍 Search for answers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="faq-search"
          />
        </div>
      </div>

      <div className="faq-container">
        {searchTerm && filteredQuestions ? (
          <div className="search-results">
            <h2>Search Results ({filteredQuestions.length})</h2>
            {filteredQuestions.length > 0 ? (
              filteredQuestions.map((item) => (
                <div key={item.index} className="faq-item">
                  <div
                    className={`faq-question ${openIndex === item.index ? 'active' : ''}`}
                    onClick={() => toggleAccordion(item.index)}
                  >
                    <span className="category-badge">{item.category}</span>
                    <span className="question-text">{item.question}</span>
                    <span className="toggle-icon">{openIndex === item.index ? '−' : '+'}</span>
                  </div>
                  <div className={`faq-answer ${openIndex === item.index ? 'open' : ''}`}>
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="no-results">No results found. Try different keywords.</p>
            )}
          </div>
        ) : (
          faqData.map((category, catIndex) => (
            <div key={catIndex} className="faq-category">
              <h2 className="category-title">
                <span className="category-icon">
                  {category.category === 'General' && '📋'}
                  {category.category === 'Treatments' && '🦷'}
                  {category.category === 'Orthodontics' && '😁'}
                  {category.category === 'Emergency Care' && '🚑'}
                  {category.category === 'Costs & Payment' && '💰'}
                  {category.category === "Children's Dentistry" && '👶'}
                </span>
                {category.category}
              </h2>

              <div className="faq-list">
                {category.questions.map((faq, qIndex) => {
                  const itemIndex = `${catIndex}-${qIndex}`;
                  return (
                    <div key={qIndex} className="faq-item">
                      <div
                        className={`faq-question ${openIndex === itemIndex ? 'active' : ''}`}
                        onClick={() => toggleAccordion(itemIndex)}
                      >
                        <span className="question-text">{faq.question}</span>
                        <span className="toggle-icon">{openIndex === itemIndex ? '−' : '+'}</span>
                      </div>
                      <div className={`faq-answer ${openIndex === itemIndex ? 'open' : ''}`}>
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))
        )}
      </div>

      <div className="faq-contact">
        <h2>Still Have Questions?</h2>
        <p>Can't find the answer you're looking for? Our team is here to help!</p>
        <div className="contact-options">
          <div className="contact-card">
            <span className="contact-icon">📞</span>
            <h3>Call Us</h3>
            <p>(555) 123-4567</p>
            <p className="contact-time">Mon-Fri: 9AM-6PM</p>
          </div>
          <div className="contact-card">
            <span className="contact-icon">📧</span>
            <h3>Email Us</h3>
            <p>info@dentalcare.com</p>
            <p className="contact-time">Response within 24 hours</p>
          </div>
          <div className="contact-card">
            <span className="contact-icon">📅</span>
            <h3>Book Appointment</h3>
            <Link to="/appointment">
              <button className="contact-btn">Schedule Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;