import React, { useState, useEffect } from 'react';

const Faq: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [faqs, setFaqs] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        // Simulate fetching FAQs from API
        const response = await fetch('https://api.example.com/faqs');
        if (!response.ok) {
          throw new Error('Failed to fetch FAQs');
        }
        const data = await response.json();
        setFaqs(data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch FAQs. Please try again later.');
        setLoading(false);
      }
    };

    fetchFaqs();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="faq">
      <h2 className="faq__heading">Frequently Asked Questions</h2>
      <ul className="faq__list">
        {faqs.map((faq, index) => (
          <li key={index} className="faq__item">{faq.question} - {faq.answer}</li>
        ))}
      </ul>
    </div>
  );
}

export default Faq;