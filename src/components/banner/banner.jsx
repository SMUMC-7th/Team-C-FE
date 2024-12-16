import * as S from './banner.style';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../../images/bannerImg1.svg';
import img2 from '../../images/bannerImg2.svg';
import img3 from '../../images/bannerImg3.svg';
import img4 from '../../images/bannerImg4.svg';
import img5 from '../../images/bannerImg5.svg';

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const banners = [
    {
      title: '주택청약',
      content: '청약통장에 가입한 사람에 한하여 아파트 분양 시 당첨자를 선정',
      img: img1,
      alt: '주택청약',
    },
    {
      title: '청년도약계좌',
      content: '월 70만원을 5년 납입하면 약 5,000만 원을 드려요!',
      img: img2,
      alt: '청년도약계좌',
    },
    {
      title: 'N분위란?',
      content: '소득이나 비율을 기준으로 전체를 나누어 분류하는 방법',
      img: img3,
      alt: 'N분위란',
    },
    {
      title: '국가장학금',
      content: '등록금 부담을 줄이기 위해 소득 수준에 따라 차등 지원',
      img: img4,
      alt: '국가장학금',
    },
    {
      title: '내일배움카드',
      content: '직업 능력을 향상시키기 위해 국가에서 훈련비를 지원하는 제도',
      img: img5,
      alt: '내일배움카드',
    },
  ];

  return (
    <S.StyledSlider {...settings}>
      {banners.map((banner, index) => (
        <S.Banner key={index}>
          <S.Contents>
            <S.Texts>
              <S.Title>{banner.title}</S.Title>
              <S.Content>{banner.content}</S.Content>
            </S.Texts>
            <S.Img src={banner.img} alt={banner.alt} />
          </S.Contents>
        </S.Banner>
      ))}
    </S.StyledSlider>
  );
};

export default Banner;
