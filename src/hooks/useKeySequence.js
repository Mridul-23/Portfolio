// src/hooks/useKeySequence.js
import { useEffect, useRef } from 'react';

export default function useKeySequence(sequences = []) {
  const inputBuffer = useRef([]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      inputBuffer.current.push(e.code);
      const buffer = inputBuffer.current.slice();

      sequences.forEach(({ sequence, onMatch }) => {
        if (
          buffer.slice(-sequence.length).join(',') === sequence.join(',')
        ) {
          onMatch();
          inputBuffer.current = []; 
        }
      });

      // Unmount shortcut handling
      if (['Escape', 'Backspace', 'Delete'].includes(e.code)) {
        sequences.forEach(({ onCancel }) => {
          if (typeof onCancel === 'function') onCancel();
        });
        inputBuffer.current = [];
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [sequences]);
}
