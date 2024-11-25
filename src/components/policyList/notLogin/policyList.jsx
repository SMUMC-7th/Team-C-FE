import * as S from './policyList.style';
import PolicyCard from '../../policyCard/policyCard';
import { useQuery } from '@tanstack/react-query';
import { getRandomPolicy } from '../../../apis/policy';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const PolicyList = ({ user }) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['page', 1, user?.isLogin],
    queryFn: () => getRandomPolicy(1),
  });

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      alert('Please log in to view more policies');
    }
  }, [inView, user?.isLogin]);

  if (isLoading)
    return (
      <S.Alert>
        <ClipLoader />
      </S.Alert>
    );
  if (error) return <S.Alert>Error loading policies</S.Alert>;

  const policiesData = data?.data.emp;

  return (
    <S.Container>
      <S.PolicyList>
        {policiesData?.map((policyData) => (
          <PolicyCard key={policyData.bizId} {...policyData} {...user} />
        ))}
      </S.PolicyList>
      <div ref={ref} style={{ marginTop: '50px', height: '100px' }}></div>
    </S.Container>
  );
};

export default PolicyList;
