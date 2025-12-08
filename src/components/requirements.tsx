import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

interface IRequirement {
  title: string;
  description: string;
}

interface IGatherRequirementsForm {
  requirements: IRequirement[];
}

const GatherRequirements: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, reset } = useForm<IGatherRequirementsForm>();

  const router = useRouter();

  const onSubmit = async (data: IGatherRequirementsForm) => {
    try {
      setLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Data submitted:', data);
      reset();
      router.push('/success');
    } catch (err) {
      setError('An error occurred while submitting the requirements.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} aria-label="Gather Requirements Form">
      {error && <p role="alert" className="text-red-500">{error}</p>}
      <div>
        <label htmlFor="title1" className="block mb-2 text-sm font-medium">Title 1</label>
        <input
          type="text"
          id="title1"
          {...register('requirements.0.title')}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          aria-label="Enter the title for requirement 1"
          required
        />
      </div>
      <div>
        <label htmlFor="description1" className="block mb-2 text-sm font-medium">Description 1</label>
        <textarea
          id="description1"
          {...register('requirements.0.description')}
          rows={4}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          aria-label="Enter the description for requirement 1"
          required
        />
      </div>
      <button type="submit" disabled={loading} className={`w-full px-4 py-2 ${loading ? 'bg-gray-300' : 'bg-blue-500 text-white hover:bg-blue-600'}`}>
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default GatherRequirements;

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

interface IRequirement {
  title: string;
  description: string;
}

interface IGatherRequirementsForm {
  requirements: IRequirement[];
}

const GatherRequirements: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, reset } = useForm<IGatherRequirementsForm>();

  const router = useRouter();

  const onSubmit = async (data: IGatherRequirementsForm) => {
    try {
      setLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Data submitted:', data);
      reset();
      router.push('/success');
    } catch (err) {
      setError('An error occurred while submitting the requirements.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} aria-label="Gather Requirements Form">
      {error && <p role="alert" className="text-red-500">{error}</p>}
      <div>
        <label htmlFor="title1" className="block mb-2 text-sm font-medium">Title 1</label>
        <input
          type="text"
          id="title1"
          {...register('requirements.0.title')}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          aria-label="Enter the title for requirement 1"
          required
        />
      </div>
      <div>
        <label htmlFor="description1" className="block mb-2 text-sm font-medium">Description 1</label>
        <textarea
          id="description1"
          {...register('requirements.0.description')}
          rows={4}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          aria-label="Enter the description for requirement 1"
          required
        />
      </div>
      <button type="submit" disabled={loading} className={`w-full px-4 py-2 ${loading ? 'bg-gray-300' : 'bg-blue-500 text-white hover:bg-blue-600'}`}>
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default GatherRequirements;