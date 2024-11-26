import * as S from './policyCard.style';
import img1 from '../../images/policyImg1.svg';
import img2 from '../../images/policyImg2.svg';
import img3 from '../../images/policyImg3.svg';
import img4 from '../../images/policyImg4.svg';
import { extractSubstring } from '../../utils/formatDate';
const ImagesArr = [img1, img2, img3, img4];

const formatDateRange = (dateRange) => {
  try {
    const [start, end] = dateRange.split('~', 2).map((date) => date.trim());
    return (
      <>
        {format(new Date(start), 'yyyy년 M월 d일')}
        <br />~ {format(new Date(end), 'yyyy년 M월 d일')}
      </>
    );
  } catch (error) {
    return dateRange;
  }
};

const PolicyCard = (props) => {
  const { bizId, polyBizSjnm, rqutPrdCn } = props;
  const handleBookmarkClick = () => {
    alert('로그인이 필요한 서비스입니다');
  };

  const randomIndex = bizId.slice(1, 13) % 4;

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
      <S.BookmarkIcon onClick={handleBookmarkClick} />
    </S.Container>
  );
};

export default PolicyCard;
