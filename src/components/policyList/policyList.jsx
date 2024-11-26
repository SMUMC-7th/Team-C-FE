import * as S from './policyList.style';
import PolicyCard from '../policyCard/policyCard';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getRandomPolicy } from '../../apis/policy';

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
    queryFn: ({ pageParam = 1 }) => getRandomPolicy(pageParam, interest),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const lastPolicy = lastPage?.data?.emp?.[lastPage.data.emp.length - 1];
      return lastPolicy ? allPages.length + 1 : undefined;
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

  if (isPending) {
    return <p>Loading...</p>;
  }

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading policies</p>;

  const policiesData = data?.pages;
  console.log(policiesData);
  return (
    <S.Container>
      <S.PolicyList>
        {policiesData?.map((page) =>
          page?.data?.emp.map((policyData) => (
            <PolicyCard key={policyData.bizId} {...policyData} {...user} />
          ))
        )}
      </S.PolicyList>
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
        {isFetching && <p>Loading more...</p>}
      </div>
    </S.Container>
  );
};

export default PolicyListLogin;
