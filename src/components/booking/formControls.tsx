import React from 'react';

export const fieldClass =
'w-full rounded-2xl border-2 border-navy/15 bg-white px-4 py-3.5 text-base text-ink placeholder:text-ink/40 focus:border-teal focus:outline-none';

type FieldProps = {
  label: string;
  htmlFor: string;
  hint?: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
};

export function Field({ label, htmlFor, hint, error, className = '', children }: FieldProps) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-2 block text-base font-semibold text-navy">
        {label}
      </label>
      {children}
      {hint && !error && <p className="mt-2 text-sm text-ink/60">{hint}</p>}
      {error &&
      <p role="alert" className="mt-2 text-sm font-semibold text-red-600">
          {error}
        </p>
      }
    </div>);

}

type StepShellProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
};

export function StepShell({ title, description, children }: StepShellProps) {
  return (
    <div>
      <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">{title}</h2>
      {description && <p className="mt-3 text-lg text-ink/75">{description}</p>}
      <div className="mt-8">{children}</div>
    </div>);

}

type ChoiceCardProps = {
  name: string;
  value: string;
  description?: string;
  checked: boolean;
  onChange: (value: string) => void;
  type?: 'radio' | 'checkbox';
};

export function ChoiceCard({
  name,
  value,
  description,
  checked,
  onChange,
  type = 'radio'
}: ChoiceCardProps) {
  return (
    <label
      className={`flex cursor-pointer items-start gap-4 rounded-3xl border-2 p-5 transition-colors ${
      checked ? 'border-teal bg-mist' : 'border-navy/15 bg-white hover:border-teal/50'}`
      }>
      
      <input
        type={type}
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
        className="mt-1 h-5 w-5 shrink-0 accent-[#098581]" />
      
      <span>
        <span className="block text-lg font-semibold text-navy">{value}</span>
        {description && <span className="mt-1 block text-base text-ink/70">{description}</span>}
      </span>
    </label>);

}