import styled from 'styled-components';
import Slider from 'react-slick';

const StyledSlider = styled(Slider)`
  width: var(--size-inner-max-width);
  overflow-y: hidden;
  .slick-list {
    overflow: hidden;
    border-radius: 20px;
  }
  .slick-slide {
    display: flex;
    justify-content: center;
    border-radius: 20px;
  }

  .slick-dots {
    bottom: 5px;
    display: flex;
    justify-content: center;
  }

  .slick-dots ul {
    display: flex;
    width: 100%;
  }

  .slick-dots li {
    width: 5px;
  }

  .slick-dots li button:before {
    opacity: 1;
    color: #ffffff;
  }

  .slick-dots li.slick-active button:before {
    opacity: 1;
    color: #e28958;
  }
`;

const Banner = styled.div`
  display: flex !important;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-width: 345px;
  min-height: 150px;
  background-color: var(--color-gray-800);
  background-image: radial-gradient(
    circle at top right,
    rgba(226, 161, 88, 0.1),
    rgba(226, 88, 88, 0.1),
    rgba(149, 181, 237, 0.1),
    rgba(83, 86, 93, 1)
  );
  background-size: cover;
`;
const Texts = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  justify-content: center;
  margin-left: 20px;
  gap: 10px;
`;

const Title = styled.div`
  color: #ffffff;
  font-size: 26px;
  font-weight: bold;
`;

const Content = styled.div`
  font-size: 15px;
  color: #ffffff;
  word-break: keep-all;
  font-weight: 600;
  line-height: 135%;
`;

const Img = styled.img`
  width: 120px;
  object-fit: cover;
  margin-right: 10px;
`;

export { Texts, Title, Content, Img, Banner, StyledSlider };
