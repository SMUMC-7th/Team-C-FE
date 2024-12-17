import * as S from './alarm.style';
import AlarmCard from '../../components/alarmCard/alarmCard';
import { useGetAlarm } from '../../hooks/useGetProfile';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import Error from '../error/Error';
import Portal from '../../components/Portal';
import SkeletonAlarmCard from '../../components/alarmCard/skeletonAlarmCard/skeletonAlarmCard';
import { useContext } from 'react';
import { useState } from 'react';
import ContentModal from '../../components/modal/ContentModal';
import { LoginContext } from '../../context/LoginContext';
import { useNavigate } from 'react-router-dom';
import { updateVh } from '../../utils/calculateVH';

const Alarm = () => {
  const { isLogin } = useContext(LoginContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  updateVh();
  window.addEventListener('resize', updateVh);

  useEffect(() => {
    if (isLogin === false) {
      setIsModalOpen(true);
    }
  }, [isLogin]);

  const {
    data: alarms,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isPending,
    isError,
  } = useGetAlarm();
  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView && !isFetching && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, isFetching, hasNextPage, fetchNextPage]);

  return (
    <>
      {isModalOpen && (
        <Portal>
          <ContentModal
            title="로그인하시겠습니까?"
            message="로그인이 필요한 서비스입니다."
            btnText1="로그인"
            btnText2="닫기"
            onBtn1Click={() => navigate('/')}
            onBtn2Click={() => {
              navigate('/home');
              setIsModalOpen(false);
            }}
          ></ContentModal>
        </Portal>
      )}
      <S.Container>
        {alarms?.pages?.map((page, pageIndex) =>
          page.data?.alarms?.length > 0 ? (
            page.data.alarms.map((alarm) => (
              <AlarmCard key={alarm.id} alarm={alarm} />
            ))
          ) : (
            <S.Explain key={pageIndex}>아직 알람이 없습니다</S.Explain>
          )
        )}
        {hasNextPage && !isFetching && <S.Ref ref={ref}></S.Ref>}
        {isFetching &&
          Array.from({ length: 10 }).map((_, index) => (
            <SkeletonAlarmCard key={index} />
          ))}
      </S.Container>
      {isError && (
        <Portal>
          <Error />
        </Portal>
      )}
    </>
  );
};

export default Alarm;
