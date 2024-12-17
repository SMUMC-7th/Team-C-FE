import * as S from './Community.style';
import { BsPencil } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import PostList from '../../components/postList/PostList';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getPostList } from '../../apis/post';
import { useRef, useEffect } from 'react';
import Loading from '../loading/Loading';

function Community() {
  const navigate = useNavigate();
  const observerRef = useRef(null);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfiniteQuery({
      queryKey: ['postList'],
      queryFn: ({ pageParam = 99999 }) =>
        getPostList({ cursorId: pageParam, pageSize: 10 }),
      getNextPageParam: (lastPage) => {
        const articleList = lastPage?.data?.articleList || [];
        return articleList.length > 0
          ? articleList[articleList.length - 1].articleId
          : undefined;
      },
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

  if (isLoading) return <Loading></Loading>;

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
