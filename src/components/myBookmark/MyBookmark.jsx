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
    isPending,
    isError: isGetBookmarksError,
  } = useGetProfileBookmarks(cursor);
  console.log(bookmarks);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    console.log('InView:', inView);
    console.log('IsFetching:', isFetching);
    console.log('HasNextPage:', hasNextPage);
    if (inView) {
      !isFetching && hasNextPage && fetchNextPage();
    }
  }, [inView, isFetching, hasNextPage, fetchNextPage]);

  const { mutate } = useDeleteBookmark();

  const handleDeleteBookmark = (srchPolicyId) => {
    mutate(srchPolicyId);
  };

  const handleArrowClick = (srchPolicyId) => {
    navigate(`/policy/${srchPolicyId}`);
  };

  if (isPending) {
    return <div></div>;
  }

  if (isGetBookmarksError) {
    return <div></div>;
  }

  return (
    <S.Container>
      <S.Title>북마크</S.Title>
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
        <div ref={ref}>{isFetching && <p>o</p>}</div>
      </S.BookmarkList>
    </S.Container>
  );
};

export { MyBookmark };
