// src/components/ui/InputField.jsx
import React from 'react';
import { AlertCircle } from 'lucide-react';

const InputField = ({ type, name, placeholder, value, onChange, error, rows }) => {
  const Component = rows ? 'textarea' : 'input';
  
  return (
    <div>
      <Component
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-base ${
          rows ? 'resize-none' : ''
        } ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
        required
      />
      {error && (
        <p className="mt-1 text-sm text-red-600 flex items-center">
          <AlertCircle className="w-4 h-4 mr-1" />
          {error}
        </p>
      )}
    </div>
  );
};

export default InputField;