import * as S from './Community.style';
import { BsPencil } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import PostList from '../../components/postList/PostList';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getPostList } from '../../apis/post';
import { useRef, useEffect } from 'react';

function Community() {
  const navigate = useNavigate();
  const observerRef = useRef(null);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfiniteQuery({
      queryKey: ['postList'],
      queryFn: ({ pageParam = 50 }) =>
        getPostList({ cursorId: pageParam, pageSize: 10 }),
      getNextPageParam: (lastPage) => lastPage?.data?.nextCursorId || undefined,
    });

  console.log(data);

  useEffect(() => {
    if (!observerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1 }
    );

    observer.observe(observerRef.current);

    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage]);

  if (isLoading) return <div>로딩 중...</div>;

  return (
    <S.Container>
      <S.SearchContainer>
        <input type="text" />
        <S.SearchIcon />
      </S.SearchContainer>
      {data?.pages.map((page, index) => (
        <PostList key={index} posts={page.data.articleList} />
      ))}
      <div ref={observerRef} style={{ height: '1px' }} />
      {isFetchingNextPage && <div>불러오는 중..</div>}
      <S.WriteButton>
        <button onClick={() => navigate('/postwrite')}>
          <BsPencil />
          글쓰기
        </button>
      </S.WriteButton>
    </S.Container>
  );
}

export default Community;
