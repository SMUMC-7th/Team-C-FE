import { useState, useEffect, useContext } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import * as S from './policyDetails.style';

import { getSinglePolicy } from '../../apis/policy';
import {
  requestBookmark,
  deleteBookmark,
  isBookmarked,
} from '../../apis/bookmark';
import { extractDatesAPIVer, extractDates } from '../../utils/formatDate';
import { getRpttDescription, getpolyRlmCd } from '../../utils/policyCodeFormat';
import { parseLinks, getSafeValue } from '../../utils/policyDetailParse';
import { updateVh } from '../../utils/calculateVH';
import Portal from '../../components/Portal';
import { LoginContext } from '../../context/LoginContext';
import ContentModal from '../../components/modal/ContentModal';
import Loading from '../loading/Loading';
import Error from '../error/Error';
import Alert from '../../components/alert/alert';
import { useNavigate } from 'react-router-dom';

const PolicyDetails = () => {
  useEffect(() => {
    updateVh();
    window.addEventListener('resize', updateVh);
  }, []);

  const { isLogin } = useContext(LoginContext);
  const params = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    data: bookmark,
    error: bookmarkError,
    isLoading: bookmarkLoading,
  } = useQuery({
    queryKey: ['bookmark', params],
    queryFn: () => isBookmarked(params.policyId),
    enabled: !!isLogin,
  });

  const [isClicked, setIsClicked] = useState(bookmark?.data);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpload, setIsUpload] = useState(false);
  const [uploadResponse, setUploadResponse] = useState('');

  const { data, error, isLoading } = useQuery({
    queryKey: [params],
    queryFn: () => getSinglePolicy(params.policyId),
  });

  useEffect(() => {
    setIsClicked(bookmark?.data);
  }, [bookmark?.data]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsUpload(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [isUpload]);

  const bookmarkMutation = useMutation({
    mutationFn: async (isAdding) => {
      const { start, end } = extractDatesAPIVer(data?.data?.emp?.rqutPrdCn);
      const polyBizSjnm = data?.data?.emp?.polyBizSjnm;
      const bizId = params.policyId;

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
      queryClient.invalidateQueries(['bookmark', params]);
    },
    onError: (error) => {
      console.error('북마크 요청 실패:', error);
    },
  });

  const handleBookmarkClick = () => {
    if (!isLogin) {
      setIsModalOpen(true);
      return;
    }
    bookmarkMutation.mutate(!isClicked);
  };

  if (isLoading || bookmarkLoading) {
    return <Loading />;
  }

  if (error || bookmarkError) {
    console.log(error);
  }

  const policyData = data?.data?.emp;
  const newDate = extractDates(data?.data?.emp?.rqutPrdCn);

  return (
    <>
      <S.Container>
        <S.PolicyInfoCard>
          <S.Header>
            <S.Title>{getSafeValue(policyData?.polyBizSjnm)}</S.Title>
            <S.Explain>{getSafeValue(policyData?.polyItcnCn)}</S.Explain>
          </S.Header>
          <S.Table>
            <tbody>
              <S.Row>
                <S.Category>사업신청기간</S.Category>
                <S.Data>{getSafeValue(newDate)}</S.Data>
              </S.Row>
              <S.Row>
                <S.Category>지원 내용</S.Category>
                <S.Data>{getSafeValue(policyData?.sporCn)}</S.Data>
              </S.Row>
              <S.Row>
                <S.Category>제출 서류 내용</S.Category>
                <S.Data>{getSafeValue(policyData?.pstnPaprCn)}</S.Data>
              </S.Row>
              <S.Row>
                <S.Category>연령 조건</S.Category>
                <S.Data>{getSafeValue(policyData?.ageInfo)}</S.Data>
              </S.Row>
              <S.Row>
                <S.Category>전공 요건</S.Category>
                <S.Data>{getSafeValue(policyData?.majrRqisCn)}</S.Data>
              </S.Row>
              <S.Row>
                <S.Category>학력 요건</S.Category>
                <S.Data>{getSafeValue(policyData?.accrRqisCn)}</S.Data>
              </S.Row>
              <S.Row>
                <S.Category>취업 상태</S.Category>
                <S.Data>{getSafeValue(policyData?.empmSttsCn)}</S.Data>
              </S.Row>
              <S.Row>
                <S.Category>
                  거주지 /<br /> 소득 조건
                </S.Category>
                <S.Data>{getSafeValue(policyData?.prcpCn)}</S.Data>
              </S.Row>
              <S.Row>
                <S.Category>신청방법</S.Category>
                <S.Data>
                  {parseLinks(getSafeValue(policyData?.rqutProcCn))}
                </S.Data>
              </S.Row>
              <S.Row>
                <S.Category>사업 신청 기간 주기</S.Category>
                <S.Data>
                  {getSafeValue(getRpttDescription(policyData?.prdRpttSecd))}
                </S.Data>
              </S.Row>
              <S.Row>
                <S.Category>참여 제한 대상 내용</S.Category>
                <S.Data>{getSafeValue(policyData?.prcpLmttTrgtCn)}</S.Data>
              </S.Row>
              <S.Row>
                <S.Category>운영기관명</S.Category>
                <S.Data>{getSafeValue(policyData?.cnsgNmor)}</S.Data>
              </S.Row>
              <S.Row>
                <S.Category>운영 기관 담당자 연락처</S.Category>
                <S.Data>{getSafeValue(policyData?.tintCherCtpcCn)}</S.Data>
              </S.Row>
              <S.Row>
                <S.Category>주관 부처 담당자 연락처</S.Category>
                <S.Data>{getSafeValue(policyData?.cherCtpcCn)}</S.Data>
              </S.Row>
              <S.Row>
                <S.Category>지원 규모</S.Category>
                <S.Data>{getSafeValue(policyData?.sporScvl)}</S.Data>
              </S.Row>
              <S.Row>
                <S.Category>사업 운영 기간</S.Category>
                <S.Data>{getSafeValue(policyData?.bizPrdCn)}</S.Data>
              </S.Row>
              <S.Row>
                <S.Category>기타사항</S.Category>
                <S.Data>{getSafeValue(policyData?.etct)}</S.Data>
              </S.Row>
              <S.Row>
                <S.Category>참고 사이트1</S.Category>
                <S.Data>
                  {getSafeValue(policyData?.rfcSiteUrla1) !== '-' ? (
                    <a href={policyData?.rfcSiteUrla1} target="_blank">
                      바로가기 ↗️
                    </a>
                  ) : (
                    '-'
                  )}
                </S.Data>
              </S.Row>
              <S.Row>
                <S.Category>참고 사이트2</S.Category>
                <S.Data>
                  {getSafeValue(policyData?.rfcSiteUrla2) !== '-' ? (
                    <a href={policyData?.rfcSiteUrla2} target="_blank">
                      바로가기 ↗️
                    </a>
                  ) : (
                    '-'
                  )}
                </S.Data>
              </S.Row>
              <S.Row>
                <S.Category>정책분야</S.Category>
                <S.Data>
                  {getSafeValue(getpolyRlmCd(policyData?.polyRlmCd))}
                </S.Data>
              </S.Row>
              <S.Row>
                <S.Category>특화분야</S.Category>
                <S.Data>{getSafeValue(policyData?.splzRlmRqisCn)}</S.Data>
              </S.Row>
            </tbody>
          </S.Table>
          {isClicked ? (
            <S.BookmarkFillIcon onClick={handleBookmarkClick} />
          ) : (
            <S.BookmarkIcon onClick={handleBookmarkClick} />
          )}
        </S.PolicyInfoCard>
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
      {isUpload && <Alert content={uploadResponse} />}
      {error && (
        <Portal>
          <Error />
        </Portal>
      )}
    </>
  );
};

export default PolicyDetails;
