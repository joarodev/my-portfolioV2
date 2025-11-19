import React, { useState } from 'react';
import { addCertificate } from '../../data/firebase';
import { useCertificates } from '../../context/CertificatesContext';
import { useNavigate } from 'react-router-dom';

export default function CertificatesCRUD() {
  const [formData, setFormData] = useState({
    name: '',
    institution: '',
    url: '',
    idc: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const { setCertificates } = useCertificates();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const newCertificateId = await addCertificate(formData);
      const newCertificate = { id: newCertificateId, ...formData };
      
      setCertificates((prev) => [...prev, newCertificate]);

      setFormData({ name: '', institution: '', url: '', idc: '' });
      navigate('/');

    } catch (err) {
      setError('Failed to add certificate. Please try again.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-bg text-fg flex items-center justify-center p-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-bg-secondary rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center">Add New Certificate</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField name="name" label="Certificate Name" value={formData.name} onChange={handleChange} required />
          <InputField name="institution" label="Institution" value={formData.institution} onChange={handleChange} required />
          <InputField name="url" label="Certificate URL" type="url" value={formData.url} onChange={handleChange} required />
          <InputField name="idc" label="Certificate ID" value={formData.idc} onChange={handleChange} required />
          
          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-4 py-2 font-semibold text-bg bg-secondary rounded-md hover:bg-secondary/90 disabled:bg-secondary/50 transition-colors"
          >
            {isSubmitting ? 'Adding...' : 'Add Certificate'}
          </button>
        </form>
      </div>
    </div>
  );
}

const InputField = ({ name, label, type = 'text', value, onChange, required }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-fg/80 mb-1">
      {label}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full px-3 py-2 bg-transparent border border-secondary/20 rounded-md focus:ring-secondary focus:border-secondary transition-colors"
    />
  </div>
);
