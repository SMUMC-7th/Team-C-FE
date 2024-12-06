import * as S from './policyListSkeleton.style';
import PolicyCardSkeleton from '../../policyCard/policyCardSkeleton/policyCardSkeleton';

const PolicyListSkeleton = () => {
  return (
    <S.Alert>
      {Array.from({ length: 10 }).map((_, index) => (
        <PolicyCardSkeleton key={index} />
      ))}
    </S.Alert>
  );
};

export default PolicyListSkeleton;
