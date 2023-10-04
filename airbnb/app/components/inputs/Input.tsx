"use client";

import React from "react";
import { FieldErrors, FieldValue, UseFormRegister } from "react-hook-form";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValue>;
  errors: FieldErrors;
}

const Input = () => {
  return <div>Input</div>;
};

export default Input;
