import React from 'react';

interface Option {
  value: string;
  label: string;
}

interface FormFieldProps {
  label: string;
  type: 'text' | 'number' | 'select';
  value: string;
  onChange: (value: string) => void;
  options?: Option[];
  placeholder?: string;
  icon?: React.ReactNode;
}

export const FormField = ({ label, type, value, onChange, options, placeholder, icon }: FormFieldProps) => {
  const baseClasses = "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500";
  
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {icon}
          </div>
        )}
        
        {type === 'select' ? (
          <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={`${baseClasses} ${icon ? 'pl-10' : ''}`}
          >
            <option value="">Select {label}</option>
            {options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ) : (
          <input
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className={`${baseClasses} ${icon ? 'pl-10' : ''}`}
          />
        )}
      </div>
    </div>
  );
};