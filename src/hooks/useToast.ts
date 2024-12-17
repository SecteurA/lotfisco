import { useState, useCallback } from 'react';

export const useToast = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [type, setType] = useState<'success' | 'error'>('success');

  const showToast = useCallback((newMessage: string, newType: 'success' | 'error' = 'success') => {
    setMessage(newMessage);
    setType(newType);
    setIsVisible(true);

    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  }, []);

  const hideToast = useCallback(() => {
    setIsVisible(false);
  }, []);

  return {
    isVisible,
    message,
    type,
    showToast,
    hideToast,
  };
};