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
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  isBookmarked,
  deleteBookmark,
  requestBookmark,
} from '../../apis/bookmark';
import { useContext, useEffect, useState } from 'react';
import { LoginContext } from '../../context/LoginContext';
import Portal from '../Portal';
import ContentModal from '../modal/ContentModal';
import { useNavigate } from 'react-router-dom';
import { canApplyNow } from '../../utils/formatDate';

const ImagesArr = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const PolicyCard = (props) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsUpload(false);
    }, 100000);
    return () => clearTimeout(timer);
  }, [isClicked]);

  const bookmarkMutation = useMutation({
    mutationFn: async (isAdding) => {
      const { start, end } = extractDatesAPIVer(rqutPrdCn);

      if (isAdding) {
        return requestBookmark({
          polyBizSjnm,
          srchPolicyId: bizId,
          startDate: start,
          deadline: end,
        });
      } else {
        return deleteBookmark(bizId);
      }
    },
    onSuccess: (response, isAdding) => {
      setIsClicked(isAdding);
      setIsUpload(true);
      setUploadResponse(
        isAdding ? '성공적으로 북마크되었습니다' : '북마크가 삭제되었습니다'
      );
      queryClient.invalidateQueries(['bookmark', bizId]);
    },
    onError: (error) => {
      console.error('북마크 요청 실패:', error);
      setIsUpload(true);
      setUploadResponse('북마크에 실패하였습니다');
    },
  });

  const handleBookmarkClick = () => {
    if (!isLogin) {
      setIsModalOpen(true);
      return;
    }
    bookmarkMutation.mutate(!isClicked);
  };

  const randomIndex = parseInt(bizId.slice(1, 14), 10) % 9;
  const RandomImage = ImagesArr[randomIndex];
  const editDate = extractDates(rqutPrdCn);
  const canApply = canApplyNow(rqutPrdCn);

  return (
    <>
      <S.Container canApply={canApply}>
        <S.Card to={`/policy/${bizId}`}>
          <S.Texts>
            <S.Title canApply={canApply}>{polyBizSjnm}</S.Title>
            <S.Content>{editDate}</S.Content>
          </S.Texts>
          <S.Img canApply={canApply}>
            {RandomImage && <img src={RandomImage} alt="랜덤 이미지" />}
          </S.Img>
        </S.Card>
        {isClicked === true ? (
          <S.BookmarkFillIcon
            canApply={canApply}
            onClick={handleBookmarkClick}
          />
        ) : (
          <S.BookmarkIcon canApply={canApply} onClick={handleBookmarkClick} />
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
