import React from 'react';
import Button from './Button';

const FormActionButtons = ({ onCancel }) => {
  return (
    <div className="flex justify-end space-x-4 mt-8">
      <Button variant="neutral" onClick={onCancel}>
        Cancel
      </Button>
      <Button type="submit" variant="primary">
        Create Space
      </Button>
    </div>
  );
};

export default FormActionButtons;