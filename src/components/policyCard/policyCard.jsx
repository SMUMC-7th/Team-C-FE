import * as S from './policyCard.style';
import img1 from '../../images/policyImg1.svg';
import img2 from '../../images/policyImg2.svg';
import img3 from '../../images/policyImg3.svg';
import img4 from '../../images/policyImg4.svg';
import img5 from '../../images/policyImg5.svg';
import img6 from '../../images/policyImg6.svg';
import img7 from '../../images/policyImg7.svg';
import img8 from '../../images/policyImg8.svg';
import img9 from '../../images/policyImg9.svg';
import { formatDate, extractSubstring } from '../../utils/formatDate';
import { deleteBookmark, requestBookmark } from '../../apis/bookmark';
import { useQuery } from '@tanstack/react-query';
import { isBookmarked } from '../../apis/bookmark';
import { useEffect, useState } from 'react';

const ImagesArr = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const PolicyCard = (props) => {
  const isLogin = true;
  const { bizId, polyBizSjnm, rqutPrdCn } = props;

  const { data, error, isLoading } = useQuery({
    queryKey: ['bookmark', bizId],
    queryFn: () => isBookmarked(bizId),
  });

  console.log(polyBizSjnm, data?.data);
  const [isClicked, setIsClicked] = useState(data?.data);

  useEffect(() => {
    setIsClicked(data?.data);
  }, [data?.data]);

  const handleBookmarkClick = async () => {
    const { start, end } = formatDate(rqutPrdCn);
    if (!isLogin) {
      alert('로그인이 필요한 서비스입니다');
      return;
    }

    try {
      if (isClicked === true) {
        const response = deleteBookmark(bizId);
        console.log(response);
        setIsClicked(false);
      } else {
        const response = requestBookmark({
          polyBizSjnm,
          srchPolicyId: bizId,
          startDate: start,
          deadline: end,
        });
        setIsClicked(true);
        console.log('북마크 성공:', response);
      }
    } catch (error) {
      console.error('북마크 요청 실패:', error);
    }
  };

  const randomIndex = parseInt(bizId.slice(1, 14), 10) % 9;
  const RandomImage = ImagesArr[randomIndex];
  const editDate = extractSubstring(rqutPrdCn);

  return (
    <S.Container>
      <S.Card to={`/policy/${bizId}`}>
        <S.Texts>
          <S.Title>{polyBizSjnm}</S.Title>
          <S.Content>{editDate}</S.Content>
        </S.Texts>
        <S.Img>
          {RandomImage && <img src={RandomImage} alt="랜덤 이미지" />}
        </S.Img>
      </S.Card>
      {isClicked === true ? (
        <S.BookmarkFillIcon onClick={handleBookmarkClick}></S.BookmarkFillIcon>
      ) : (
        <S.BookmarkIcon onClick={handleBookmarkClick} isclicked={data?.data} />
      )}
    </S.Container>
  );
};

export default PolicyCard;
