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
import { extractDatesAPIVer, extractDates } from '../../utils/formatDate';
import { deleteBookmark, requestBookmark } from '../../apis/bookmark';
import { useQuery } from '@tanstack/react-query';
import { isBookmarked } from '../../apis/bookmark';
import { useContext, useEffect, useState } from 'react';
import { LoginContext } from '../../context/LoginContext';
import Portal from '../Portal';
import ContentModal from '../modal/ContentModal';
import { useNavigate } from 'react-router-dom';

const ImagesArr = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const PolicyCard = (props) => {
  const navigate = useNavigate();
  const { isLogin } = useContext(LoginContext);
  const { bizId, polyBizSjnm, rqutPrdCn, setIsUpload, setUploadResponse } =
    props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data, error, isLoading } = useQuery({
    queryKey: ['bookmark', bizId],
    queryFn: () => isBookmarked(bizId),
    enabled: !!isLogin,
  });
  const [isClicked, setIsClicked] = useState(data?.data);

  useEffect(() => {
    setIsClicked(data?.data);
  }, [data?.data]);

  const handleBookmarkClick = async () => {
    const { start, end } = extractDatesAPIVer(rqutPrdCn);
    if (!isLogin) {
      setIsModalOpen(true);
      return;
    }

    try {
      if (isClicked === true) {
        const response = deleteBookmark(bizId);
        setIsClicked(false);
        setIsUpload(true);
        setUploadResponse('북마크가 삭제되었습니다');
      } else {
        const response = requestBookmark({
          polyBizSjnm,
          srchPolicyId: bizId,
          startDate: start,
          deadline: end,
        });
        setIsClicked(true);
        setIsUpload(true);
        setUploadResponse('성공적으로 북마크 되었습니다');
      }
    } catch (error) {
      setIsUpload(true);
      setUploadResponse('북마크에 실패하였습니다');
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsUpload(false);
    }, 2500);
  }, [isClicked]);

  const randomIndex = parseInt(bizId.slice(1, 14), 10) % 9;
  const RandomImage = ImagesArr[randomIndex];
  const editDate = extractDates(rqutPrdCn);

  return (
    <>
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
          <S.BookmarkFillIcon
            onClick={handleBookmarkClick}
          ></S.BookmarkFillIcon>
        ) : (
          <S.BookmarkIcon
            onClick={handleBookmarkClick}
            isclicked={data?.data}
          />
        )}
      </S.Container>
      {isModalOpen && (
        <Portal>
          <ContentModal
            title="로그인하시겠습니까?"
            message="로그인이 필요한 서비스입니다."
            btnText1="로그인"
            btnText2="닫기"
            onBtn1Click={() => navigate('/')}
            onBtn2Click={() => setIsModalOpen(false)}
          />
        </Portal>
      )}
    </>
  );
};

export default PolicyCard;
