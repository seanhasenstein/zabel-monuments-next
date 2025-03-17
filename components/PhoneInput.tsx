"use client";

import { useState, useEffect, ChangeEvent } from "react";

interface PhoneInputProps {
  name: string;
  value?: string;
  onChange?: (value: string) => void;
  required?: boolean;
  label?: string;
  className?: string;
}

export default function PhoneInput({
  name,
  value = "",
  onChange,
  required = true,
  label = "Phone number",
  className = "",
}: PhoneInputProps) {
  const [inputValue, setInputValue] = useState("");

  // Initialize input value from props if provided
  useEffect(() => {
    if (value) {
      // Format the initial value
      const digitsOnly = value.replace(/\D/g, "");
      setInputValue(formatPhoneNumber(digitsOnly));
    }
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Get only the digits from the input
    const digits = e.target.value.replace(/\D/g, "");

    // Limit to 10 digits
    const truncated = digits.slice(0, 10);

    // Format the phone number
    const formattedValue = formatPhoneNumber(truncated);

    // Update local state
    setInputValue(formattedValue);

    // Call the onChange prop with the raw digits
    if (onChange) {
      onChange(truncated);
    }
  };

  // Format a string of digits into (xxx) xxx-xxxx format
  const formatPhoneNumber = (digits: string): string => {
    if (digits.length === 0) return "";

    if (digits.length <= 3) {
      return `(${digits}`;
    } else if (digits.length <= 6) {
      return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    } else {
      return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
    }
  };

  return (
    <div className={className}>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type="text"
        id={name}
        name={name}
        value={inputValue}
        onChange={handleChange}
        required={required}
        pattern="\(\d{3}\) \d{3}-\d{4}"
        maxLength={14} // (xxx) xxx-xxxx has 14 characters
      />
    </div>
  );
}
