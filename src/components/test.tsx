import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Spinner } from '@chakra-ui/react';

interface Test {
  id: string;
  title: string;
  content: string;
}

interface WriteTestsProps {
  onSubmit: (test: Test) => void;
  isLoading?: boolean;
  error?: string | null;
}

const WriteTests: React.FC<WriteTestsProps> = ({ onSubmit, isLoading, error }) => {
  const [isCreatingTest, setIsCreatingTest] = useState(false);

  const formik = useFormik({
    initialValues: {
      title: '',
      content: ''
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Title is required'),
      content: Yup.string().required('Content is required')
    }),
    onSubmit: (values) => {
      setIsCreatingTest(true);
      onSubmit({ id: new Date().toISOString(), ...values })
        .then(() => formik.resetForm())
        .catch((err) => console.error(err))
        .finally(() => setIsCreatingTest(false));
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      {error && <p role="alert" className="text-red-500 mb-4">{error}</p>}
      <div>
        <label htmlFor="title" className="block text-sm font-medium">
          Title
        </label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
          className={`w-full border p-2 ${formik.touched.title && formik.errors.title ? 'border-red-500' : ''}`}
        />
        {formik.touched.title && formik.errors.title ? (
          <div className="text-sm text-red-500">{formik.errors.title}</div>
        ) : null}
      </div>

      <div className="mt-4">
        <label htmlFor="content" className="block text-sm font-medium">
          Content
        </label>
        <textarea
          id="content"
          name="content"
          rows={10}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.content}
          className={`w-full border p-2 ${formik.touched.content && formik.errors.content ? 'border-red-500' : ''}`}
        />
        {formik.touched.content && formik.errors.content ? (
          <div className="text-sm text-red-500">{formik.errors.content}</div>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={isCreatingTest || !formik.isValid}
        className={`mt-4 px-4 py-2 ${isCreatingTest ? 'bg-gray-300' : 'bg-blue-500 hover:bg-blue-600'} text-white font-medium rounded`}
      >
        {isLoading ? <Spinner size="sm" /> : 'Create Test'}
      </button>
    </form>
  );
};

export default WriteTests;

import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Spinner } from '@chakra-ui/react';

interface Test {
  id: string;
  title: string;
  content: string;
}

interface WriteTestsProps {
  onSubmit: (test: Test) => void;
  isLoading?: boolean;
  error?: string | null;
}

const WriteTests: React.FC<WriteTestsProps> = ({ onSubmit, isLoading, error }) => {
  const [isCreatingTest, setIsCreatingTest] = useState(false);

  const formik = useFormik({
    initialValues: {
      title: '',
      content: ''
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Title is required'),
      content: Yup.string().required('Content is required')
    }),
    onSubmit: (values) => {
      setIsCreatingTest(true);
      onSubmit({ id: new Date().toISOString(), ...values })
        .then(() => formik.resetForm())
        .catch((err) => console.error(err))
        .finally(() => setIsCreatingTest(false));
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      {error && <p role="alert" className="text-red-500 mb-4">{error}</p>}
      <div>
        <label htmlFor="title" className="block text-sm font-medium">
          Title
        </label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
          className={`w-full border p-2 ${formik.touched.title && formik.errors.title ? 'border-red-500' : ''}`}
        />
        {formik.touched.title && formik.errors.title ? (
          <div className="text-sm text-red-500">{formik.errors.title}</div>
        ) : null}
      </div>

      <div className="mt-4">
        <label htmlFor="content" className="block text-sm font-medium">
          Content
        </label>
        <textarea
          id="content"
          name="content"
          rows={10}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.content}
          className={`w-full border p-2 ${formik.touched.content && formik.errors.content ? 'border-red-500' : ''}`}
        />
        {formik.touched.content && formik.errors.content ? (
          <div className="text-sm text-red-500">{formik.errors.content}</div>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={isCreatingTest || !formik.isValid}
        className={`mt-4 px-4 py-2 ${isCreatingTest ? 'bg-gray-300' : 'bg-blue-500 hover:bg-blue-600'} text-white font-medium rounded`}
      >
        {isLoading ? <Spinner size="sm" /> : 'Create Test'}
      </button>
    </form>
  );
};

export default WriteTests;