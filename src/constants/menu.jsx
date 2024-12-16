import { GrHomeRounded } from 'react-icons/gr';
import { GrSearch } from 'react-icons/gr';
import { AiOutlineMessage } from 'react-icons/ai';
import { LuCalendarDays } from 'react-icons/lu';
import { FaRegUser } from 'react-icons/fa';

const NAVMENU = [
  {
    id: 1,
    name: '홈',
    img: <GrHomeRounded />,
    path: '/home',
  },
  {
    id: 2,
    name: '맞춤 추천',
    img: <GrSearch />,
    path: '/recommend',
  },
  {
    id: 3,
    name: '커뮤니티',
    img: <AiOutlineMessage />,
    path: '/community',
  },
  {
    id: 4,
    name: '캘린더',
    img: <LuCalendarDays />,
    path: '/calendar',
  },
  {
    id: 5,
    name: 'MY',
    img: <FaRegUser />,
    path: '/my',
  },
];

export { NAVMENU };
