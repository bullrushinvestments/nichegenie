import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { Spinner } from '@chakra-ui/react';

interface BusinessSpec {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
}

const CreateBusinessSpecification: React.FC = () => {
  const [businessSpec, setBusinessSpec] = useState<BusinessSpec | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get('/api/business-specifications')
      .then(response => {
        if (response.data) {
          setBusinessSpec(response.data);
        }
      })
      .catch(err => {
        setError('Failed to fetch business specification data.');
      })
      .finally(() => setLoading(false));
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBusinessSpec(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  if (loading) return <Spinner />;
  if (error) return <div role="alert" aria-live="assertive">{error}</div>;

  return (
    <form className={clsx('bg-white p-6 rounded-lg shadow-md', 'max-w-xl mx-auto')}>
      <h2 className="text-2xl font-bold mb-4">Create Business Specification</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={businessSpec?.name || ''}
          onChange={handleInputChange}
          required
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          id="description"
          name="description"
          value={businessSpec?.description || ''}
          onChange={handleInputChange}
          required
          rows={3}
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <button
        type="submit"
        className={clsx('inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm', 'hover:bg-blue-700')}
      >
        Create Specification
      </button>
    </form>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { Spinner } from '@chakra-ui/react';

interface BusinessSpec {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
}

const CreateBusinessSpecification: React.FC = () => {
  const [businessSpec, setBusinessSpec] = useState<BusinessSpec | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get('/api/business-specifications')
      .then(response => {
        if (response.data) {
          setBusinessSpec(response.data);
        }
      })
      .catch(err => {
        setError('Failed to fetch business specification data.');
      })
      .finally(() => setLoading(false));
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBusinessSpec(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  if (loading) return <Spinner />;
  if (error) return <div role="alert" aria-live="assertive">{error}</div>;

  return (
    <form className={clsx('bg-white p-6 rounded-lg shadow-md', 'max-w-xl mx-auto')}>
      <h2 className="text-2xl font-bold mb-4">Create Business Specification</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={businessSpec?.name || ''}
          onChange={handleInputChange}
          required
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          id="description"
          name="description"
          value={businessSpec?.description || ''}
          onChange={handleInputChange}
          required
          rows={3}
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <button
        type="submit"
        className={clsx('inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm', 'hover:bg-blue-700')}
      >
        Create Specification
      </button>
    </form>
  );
};

export default CreateBusinessSpecification;