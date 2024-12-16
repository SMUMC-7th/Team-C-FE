import * as S from './MyBookmark.style';
import userInfo from '../../mocks/userData.json';
import policyDatas from '../../mocks/policyData.json';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const user = userInfo[2];

function getBookmarkPolicyId() {
  return user.bookmarked;
}

function getPolicyInfo(policies) {
  return policies.flatMap((id) =>
    policyDatas.filter((policy) => policy.bizId === id)
  );
}

const MyBookmark = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [selectedBookmarks, setSelectedBookmarks] = useState([]);
  const navigate = useNavigate();

  const policies = isLogin ? getPolicyInfo(getBookmarkPolicyId()) : [];

  const handleBookmarkToggle = (policyId) => {
    setSelectedBookmarks((prevSelected) =>
      prevSelected.includes(policyId)
        ? prevSelected.filter((id) => id !== policyId)
        : [...prevSelected, policyId]
    );
  };

  const handleArrowClick = (policyId) => {
    navigate(`/policy/${policyId}`);
  };

  return (
    <S.Container>
      <S.Title>북마크</S.Title>
      <S.BookmarkList>
        {policies.map((policy) => (
          <S.BookmarkPolicy key={policy.bizId}>
            <S.BookmarkTitle>
              {selectedBookmarks.includes(policy.bizId) ? (
                <S.BookmarkFillIcon
                  onClick={() => handleBookmarkToggle(policy.bizId)}
                />
              ) : (
                <S.BookmarkIcon
                  onClick={() => handleBookmarkToggle(policy.bizId)}
                />
              )}
              <S.PolicyTitle>{policy.policyTitle}</S.PolicyTitle>
            </S.BookmarkTitle>
            <S.ArrowIcon onClick={() => handleArrowClick(policy.bizId)} />
          </S.BookmarkPolicy>
        ))}
      </S.BookmarkList>
    </S.Container>
  );
};

export { MyBookmark };
