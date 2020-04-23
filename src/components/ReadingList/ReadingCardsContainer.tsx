import React, { useRef } from 'react';
import Slider, { Settings } from 'react-slick';
import { ReadingCard } from './ReadingCard';
import { ReadingCardsNext } from './ReadingCardsNext';


interface IProps {
    settings?: Settings;
    classes?: string;
}

export const ReadingCardsContainer: React.FC<IProps> = ({ settings }) => {
  const pseudoData = [
    {
      title: 'UI design',
      href: '#',
    },
    {
      title: 'UX design',
      href: '#',
    },
    {
      title: 'SEO',
      href: '#',
    },
    {
      title: 'Popular',
      href: '#',
    },
    {
      title: 'Essential',
      href: '#',
    },
    {
      title: 'React',
      href: '#',
    },
    {
      title: 'Angular',
      href: '#',
    },
  ];

  const sliderNext = useRef(null);

  const nextSliderFunc = () => {
    // @ts-ignore
    sliderNext.current.slickNext();
  };
  return (
    <div className="reading-list-container ">
      <Slider ref={(slider: any) => (sliderNext.current = slider)} {...settings}>
        {pseudoData.map((obj) => <ReadingCard title={obj.title} key={obj.title} />)}
      </Slider>
      <ReadingCardsNext onClick={nextSliderFunc} />
    </div>
  );
};
