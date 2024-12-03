import { useEffect, useState } from 'react';
import * as S from './content.style';
import { completeBookmark } from '../../apis/bookmark';
import { useMutation } from '@tanstack/react-query';

const Content = (props) => {
  const { id, name, isCompleted: initialCompleted, srchPolicyId } = props;
  const [isCompleted, setIsCompleted] = useState(initialCompleted);

  useEffect(() => {
    setIsCompleted(initialCompleted);
  }, [initialCompleted]);

  const { mutate: checkBookmark } = useMutation({
    mutationFn: ({ id, completed }) => completeBookmark(id, completed),
    onSuccess: () => {
      console.log('체크 표시에 성공!');
    },
    onError: () => {
      alert('체크 표시에 실패했습니다');
      setIsCompleted((prev) => !prev);
    },
  });

  const handleClick = () => {
    const newCompleted = !isCompleted;
    setIsCompleted(newCompleted);

    checkBookmark({ id, completed: newCompleted });
  };

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
