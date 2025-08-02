import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SectionHeader } from './ui';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...formData
        }).toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="mb-16" aria-labelledby="contact-heading">
      <SectionHeader id="contact-heading" title={t('contact.title')} />
      
      <div className="max-w-2xl mx-auto">
        <p className="text-gray-300 text-center mb-8">
          {t('contact.description')}
        </p>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Campo oculto para Netlify */}
          <input type="hidden" name="form-name" value="contact" />
          
          {/* Honeypot para spam */}
          <div className="hidden">
            <label>
              Don&apos;t fill this out if you&apos;re human:
              <input name="bot-field" />
            </label>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Nombre */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                {t('contact.form.name')} *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                placeholder={t('contact.form.namePlaceholder')}
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                {t('contact.form.email')} *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                placeholder={t('contact.form.emailPlaceholder')}
              />
            </div>
          </div>

          {/* Asunto */}
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              {t('contact.form.subject')} *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
              placeholder={t('contact.form.subjectPlaceholder')}
            />
          </div>

          {/* Mensaje */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              {t('contact.form.message')} *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors resize-vertical"
              placeholder={t('contact.form.messagePlaceholder')}
            />
          </div>

          {/* Estado del envío */}
          {submitStatus === 'success' && (
            <div className="p-4 bg-green-900 border border-green-700 rounded-lg text-green-200">
              {t('contact.form.successMessage')}
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="p-4 bg-red-900 border border-red-700 rounded-lg text-red-200">
              {t('contact.form.errorMessage')}
            </div>
          )}

          {/* Botón de envío */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-teal-600 hover:bg-teal-700 disabled:bg-teal-800 disabled:cursor-not-allowed text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            {isSubmitting ? t('contact.form.sending') : t('contact.form.send')}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
