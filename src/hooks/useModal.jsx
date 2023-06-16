import { useCallback, useState } from 'react';

function useModal() {
  const [modalOpen, setModlOpen] = useState(false);
  const [modalContent, setModalContent] = useState(''); // 새로운 상태 추가

  const showModal = useCallback(() => {
    setModlOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setModlOpen(false);
  }, []);

  const changeContent = useCallback((text) => {
    setModalContent(text);
  }, []);

  return [modalOpen, showModal, closeModal, modalContent, changeContent];
}

export default useModal;
