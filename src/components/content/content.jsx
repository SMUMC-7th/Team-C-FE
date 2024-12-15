import { useEffect, useState } from 'react';
import * as S from './content.style';
import { completeBookmark } from '../../apis/bookmark';
import { useMutation } from '@tanstack/react-query';

const Content = (props) => {
  const {
    id,
    name,
    isCompleted: initialCompleted,
    srchPolicyId,
    setIsUpload,
    setUploadResponse,
  } = props;
  const [isCompleted, setIsCompleted] = useState(initialCompleted);

  useEffect(() => {
    setIsCompleted(initialCompleted);
  }, [initialCompleted]);

  const { mutate: checkBookmark } = useMutation({
    mutationFn: ({ id, completed }) => completeBookmark(id, completed),
    onSuccess: () => {},
    onError: () => {
      setIsCompleted((prev) => !prev);
      setIsUpload(true);
      setUploadResponse('체크 표시에 실패하였습니다');
    },
  });

  const handleClick = () => {
    const newCompleted = !isCompleted;
    setIsCompleted(newCompleted);
    if (newCompleted === true) {
      setIsUpload(true);
      setUploadResponse('체크 되었습니다');
    } else {
      setIsUpload(true);
      setUploadResponse('체크가 삭제되었습니다');
    }
    checkBookmark({ id, completed: newCompleted });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsUpload(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [isCompleted]);

  return (
    <S.Container>
      <S.Button onClick={handleClick} checked={isCompleted}>
        {isCompleted && <S.CheckImg />}
      </S.Button>
      <S.Policy to={`/policy/${srchPolicyId}`}>
        <S.Title>{name}</S.Title>
        <S.StyledIcon />
      </S.Policy>
    </S.Container>
  );
};

export default Content;
