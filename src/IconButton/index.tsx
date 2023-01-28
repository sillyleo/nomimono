import React from 'react';
import { iconButtonStyle, IconButtonVariants } from './style.css';
import { clsx } from 'clsx';
import {
  primaryClass,
  secondaryClass,
  ghostClass,
  smPrimaryShadowClass,
  mdPrimaryShadowClass,
  lgPrimaryShadowClass,
  smSecondaryShadowClass,
  mdSecondaryShadowClass,
  lgSecondaryShadowClass,
  smGhostShadowClass,
  mdGhostShadowClass,
  lgGhostShadowClass
} from '../styles/theme.css';
import Icon from '../Icon';

// set variant class names
export function getVariant(intent: string, tone: keyof Colors) {
  if (intent === 'primary') {
    return primaryClass[tone];
  } else if (intent === 'secondary') {
    return secondaryClass[tone];
  } else if (intent === 'ghost') {
    return ghostClass[tone];
  } else {
    return primaryClass[tone];
  }
}

// set variant class names
export function getShadowVariant(
  shadow: boolean,
  size: string,
  tone: keyof Colors,
  intent: string
) {
  if (shadow && intent === 'primary') {
    if (size === 'sm') {
      return smPrimaryShadowClass[tone];
    } else if (size === 'md') {
      // console.log(mdPrimaryShadowClass[tone]);
      return mdPrimaryShadowClass[tone];
    } else {
      return lgPrimaryShadowClass[tone];
    }
  }
  if (shadow && intent === 'secondary') {
    if (size === 'sm') {
      return smSecondaryShadowClass[tone];
    } else if (size === 'md') {
      return mdSecondaryShadowClass[tone];
    } else {
      return lgSecondaryShadowClass[tone];
    }
  }

  if (shadow && intent === 'ghost') {
    if (size === 'sm') {
      return smGhostShadowClass[tone];
    } else if (size === 'md') {
      return mdGhostShadowClass[tone];
    } else {
      return lgGhostShadowClass[tone];
    }
  }
}

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    IconButtonVariants {
  size?: 'sm' | 'md' | 'lg';
  align?: 'left' | 'center' | 'right' | 'between' | 'around';
  tone?: keyof Colors;
  intent?: 'primary' | 'secondary' | 'ghost';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  gradient?: boolean;
  shadow?: boolean;
  name?: string;
  color?: string;
  strokeWidth?: number;
  fill?: string;
}

export const IconButton = ({
                             // list all available props here and default values
                             size = 'md',
                             align = 'center',
                             tone = 'sand',
                             intent = 'primary',
                             children,
                             leftIcon,
                             rightIcon,
                             gradient = false,
                             shadow = false,
                             name = 'camera',
                             color,
                             strokeWidth,
                             fill,
                             ...props
                           }: IconButtonProps) => {
  return (
    <button
      // clsx is only for combing multiple classes together
      className={clsx(
        iconButtonStyle({
          size: size,
          align: align,
          gradient: gradient
        }),
        getVariant(intent, tone),
        getShadowVariant(shadow, size, tone, intent)
      )}
      {...props}
    >
      {leftIcon}
      {children ? (
        children
      ) : (
        <Icon name={name} color={color} strokeWidth={strokeWidth} fill={fill} />
      )}
      {rightIcon}
    </button>
  );
};

export default IconButton;