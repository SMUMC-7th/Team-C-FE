import * as S from './policyList.style';
import PolicyCard from '../policyCard/policyCard';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getRecommendPolicy } from '../../apis/policy';
import ClipLoader from 'react-spinners/ClipLoader';

const policyFieldCodesLetter = {
  일자리: '023010',
  주거: '023020',
  교육: '023030',
  '복지 / 문화': '023040',
  '참여 / 권리': '023050',
};
function useGetInfinitePolicy(interest) {
  return useInfiniteQuery({
    queryKey: ['categoryPolicies', interest],
    queryFn: ({ pageParam = 1 }) => getRecommendPolicy(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const currentIndex = lastPage?.data?.pageIndex || 1;
      const totalPolicies = lastPage?.data?.totalCnt || 0;
      const policiesPerPage = 10;

      const maxPageIndex = Math.ceil(totalPolicies / policiesPerPage);
      return currentIndex < maxPageIndex ? currentIndex + 1 : undefined;
    },
    cacheTime: 10000,
    staleTime: 10000,
    enabled: !!interest && interest.length > 0,
  });
}

const PolicyListLogin = (props) => {
  const { ...user } = props;
  let interestCode = '';

  const interest = user.interest;
  interestCode = interest
    .map((interestItem) => policyFieldCodesLetter[interestItem])
    .filter((code) => code)
    .join(',');

  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isPending,
  } = useGetInfinitePolicy(interestCode);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView && !isFetching && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, isFetching, hasNextPage, fetchNextPage]);

  if (isPending || isLoading) {
    return (
      <S.Alert>
        <ClipLoader />
      </S.Alert>
    );
  }

  if (error) return <p>Error loading policies</p>;

  const policiesData = data?.pages;

  return (
    <S.Container>
      <S.PolicyList>
        {policiesData?.map((page) =>
          page?.data?.emp.map((policyData) => (
            <PolicyCard key={policyData.bizId} {...policyData} {...user} />
          ))
        )}
      </S.PolicyList>
      {hasNextPage && (
        <div
          ref={ref}
          style={{
            height: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}
        >
          {isFetching && <ClipLoader />}
        </div>
      )}
    </S.Container>
  );
};

export default PolicyListLogin;
