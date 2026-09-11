import React from 'react';
import { Link } from 'react-router-dom';

type Variant = 'primary' | 'secondary' | 'ghost' | 'white';
type Size = 'sm' | 'md' | 'lg';

const base =
'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-3 disabled:opacity-50 disabled:cursor-not-allowed';

const variants: Record<Variant, string> = {
  primary:
  'bg-teal text-white hover:bg-teal-dark shadow-soft hover:shadow-lift active:scale-[0.98]',
  secondary:
  'bg-white text-navy border-2 border-navy hover:bg-navy hover:text-white active:scale-[0.98]',
  ghost:
  'bg-mist text-navy border-2 border-transparent hover:border-teal active:scale-[0.98]',
  white:
  'bg-white text-navy hover:bg-mist shadow-soft active:scale-[0.98]'
};

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2.5 text-sm xl:px-6 xl:py-3 xl:text-base',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg'
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonProps = CommonProps &
React.ButtonHTMLAttributes<HTMLButtonElement> & {to?: undefined;href?: undefined;};

type LinkProps = CommonProps & {to: string;href?: undefined;};

type AnchorProps = CommonProps &
React.AnchorHTMLAttributes<HTMLAnchorElement> & {href: string;to?: undefined;};

export function Button(props: ButtonProps | LinkProps | AnchorProps) {
  const { variant = 'primary', size = 'md', className = '', children } = props;
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if ('to' in props && props.to) {
    const { to } = props;
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>);

  }

  if ('href' in props && props.href) {
    const { href, variant: _v, size: _s, className: _c, children: _ch, ...rest } = props;
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>);

  }

  const { variant: _v, size: _s, className: _c, children: _ch, ...rest } =
  props as ButtonProps;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>);

}