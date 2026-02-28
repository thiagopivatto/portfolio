import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error sending message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const inputClass =
    'w-full px-4 py-3 bg-dark-200/50 border border-gray-700 rounded-xl text-base text-white placeholder-gray-500 transition-all duration-300 focus-neon hover:border-gray-600 text-left';

  return (
    <section id="contact" className="section-padding bg-black border-t border-gray-800/50">
      <div className="section-container">
        <motion.h2
          className="section-title section-title-accent"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4 }}
        >
          Contact
        </motion.h2>

        <motion.div
          className="max-w-2xl text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.4 }}
        >
          <form onSubmit={handleSubmit} className="card-base card-hover card-padding space-y-5">
            <div>
              <label htmlFor="name" className="block text-base font-medium text-gray-400 mb-2 text-left">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={inputClass}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-base font-medium text-gray-400 mb-2 text-left">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={inputClass}
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-base font-medium text-gray-400 mb-2 text-left">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={inputClass}
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-base font-medium text-gray-400 mb-2 text-left">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className={`${inputClass} resize-none`}
                required
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full btn-base ${
                isSubmitting
                  ? 'bg-gray-700 border-gray-700 cursor-not-allowed text-gray-400'
                  : 'btn-primary'
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Send message'}
            </button>
            {submitStatus === 'success' && (
              <p className="text-body text-green-400 text-left">Message sent successfully.</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-body text-red-400/90 text-left">Failed to send. Please try again.</p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
