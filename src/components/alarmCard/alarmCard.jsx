import * as S from './alarmCard.style';

const AlarmCard = ({ alarm }) => {
  return (
    <S.Container>
      <S.Title>{alarm.body}</S.Title>
      <S.Content>{alarm.title}</S.Content>
    </S.Container>
  );
};

export default AlarmCard;
