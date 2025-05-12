import React from 'react';

interface InputProps {
    label: string;
    id: string;
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
    label,
    id,
    type = 'text',
    placeholder = '',
    value,
    onChange,
}: InputProps) {
    return (
        <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor={id}>
                {label}
            </label>
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="w-full p-2 bg-[#2a2d38] border border-gray-600 rounded focus:outline-none focus:ring focus:ring-blue-500"
            />
        </div>
    );
}