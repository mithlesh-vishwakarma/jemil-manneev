import React from 'react';
import Button from './Button';
import Icon from './Icon';

interface AppointmentButtonProps {
  onClick?: () => void;
  className?: string;
  text?: string;
  href?: string;
}

const AppointmentButton: React.FC<AppointmentButtonProps> = ({
  onClick,
  className = '',
  text = 'Book Appointment',
  href,
}) => {
  return (
    <Button
      onClick={onClick}
      className={className}
      variant="primary"
      size="md"
      href={href}
    >
      <Icon name="calendar" size={16} />
      {text}
    </Button>
  );
};

export default AppointmentButton;
