import * as S from './policyList.style';
import PolicyCard from '../../policyCard/policyCard';
import { useQuery } from '@tanstack/react-query';
import { getRandomPolicy } from '../../../apis/policy';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import Portal from '../../Portal';
import ContentModal from '../../../components/modal/ContentModal';
import PolicyListSkeleton from '../policyListSkeleton/policyListSkeleton';

const PolicyList = ({ user }) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsModalOpen(true);
    }
  }, [inView, user?.isLogin]);

  const { data, error, isLoading } = useQuery({
    queryKey: ['page', 1, user?.isLogin],
    queryFn: () => getRandomPolicy(1),
  });

  const policiesData = data?.data.emp;

  if (isLoading) return <PolicyListSkeleton />;

  if (error) return <S.Alert>Error loading policies</S.Alert>;

  return (
    <>
      <S.Container>
        <S.PolicyList>
          {policiesData?.map((policyData) => (
            <PolicyCard key={policyData.bizId} {...policyData} {...user} />
          ))}
        </S.PolicyList>
        <div ref={ref} style={{ height: '5px' }}></div>
      </S.Container>
      {isModalOpen && (
        <Portal>
          <ContentModal
            title="로그인하시겠습니까?"
            message="로그인이 필요한 서비스입니다."
            btnText1="로그인"
            btnText2="닫기"
            onBtn1Click={() => (window.location.href = '/')}
            onBtn2Click={() => setIsModalOpen(false)}
          />
        </Portal>
      )}
    </>
  );
};

export default PolicyList;
