import React, { LabelHTMLAttributes } from 'react';
import './Label.css';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

export const Label: React.FC<LabelProps> = (props: LabelProps) => {
  return <label {...props} className={`label ${props.className}`.trim()} />;
};
