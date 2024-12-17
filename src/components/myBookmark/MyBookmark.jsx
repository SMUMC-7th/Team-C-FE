import * as S from './MyBookmark.style';
import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../../context/LoginContext';
import {
  useDeleteBookmark,
  useGetProfileBookmarks,
} from '../../hooks/useGetProfile';
import { useInView } from 'react-intersection-observer';

const MyBookmark = () => {
  const { isLogin } = useContext(LoginContext);
  const [selectedBookmarks, setSelectedBookmarks] = useState([]);
  const navigate = useNavigate();
  const cursor = 0;

  const {
    data: bookmarks,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isError: isGetBookmarksError,
  } = useGetProfileBookmarks(cursor);

  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      !isFetching && hasNextPage && fetchNextPage();
    }
  }, [inView, isFetching, hasNextPage, fetchNextPage]);

  const { mutate } = useDeleteBookmark();

  const handleDeleteBookmark = (srchPolicyId) => {
    const optimisticUpdate = () => {
      setSelectedBookmarks((prevBookmarks) =>
        prevBookmarks.filter(
          (bookmark) => bookmark.srchPolicyId !== srchPolicyId
        )
      );
    };

    mutate(srchPolicyId, {
      onMutate: optimisticUpdate,
      onSettled: () => {
        fetchNextPage();
      },
    });
  };

  const handleArrowClick = (srchPolicyId) => {
    navigate(`/policy/${srchPolicyId}`);
  };

  if (isGetBookmarksError) {
    return <div></div>;
  }

  const hasBookmarks = bookmarks?.pages?.some(
    (page) => page.data?.bookmarkResponses?.length > 0
  );

  return (
    <S.Container>
      <S.Title>북마크</S.Title>
      {hasBookmarks ? (
        <S.BookmarkList>
          {bookmarks?.pages?.map((page) =>
            page.data?.bookmarkResponses?.map((bookmark) => (
              <S.BookmarkPolicy key={bookmark.bookmarkId}>
                <S.BookmarkTitle>
                  <S.BookmarkFillIcon
                    onClick={() => handleDeleteBookmark(bookmark.srchPolicyId)}
                  />
                  <S.PolicyTitle>{bookmark.name}</S.PolicyTitle>
                </S.BookmarkTitle>
                <S.ArrowIcon
                  onClick={() => handleArrowClick(bookmark.srchPolicyId)}
                />
              </S.BookmarkPolicy>
            ))
          )}
          {hasNextPage && !isFetching && <S.Ref ref={ref}></S.Ref>}
          {/* {isFetching && <BookmarkSkeleton />} */}
        </S.BookmarkList>
      ) : (
        <S.EmptyContainer>
          <h3>저장된 북마크가 없어요.</h3>
          <p>맞춤 정책을 저장하고 한눈에 보관해 보세요!</p>
        </S.EmptyContainer>
      )}
    </S.Container>
  );
};

export { MyBookmark };
