import { createContext, ReactNode, useState, useEffect } from 'react';

export const ModalContext = createContext({
  isModalOpen: false,
  setIsModalOpen: () => {},
});

export function ModalContextProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    console.log('isModalOpen: ', isModalOpen);
  }, [isModalOpen]);

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
