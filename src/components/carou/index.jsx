import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import productimage from '../../assets/home/section1/nouveaute/mc777_640x640.png'

//const Gallery = () => <AliceCarousel mouseTracking items={items} />;

export const Gallery = () => {
  const handleDragStart = (e) => e.preventDefault();

  const items = [
   <div className='flex'><img src={productimage} onDragStart={handleDragStart} role="presentation" className='w-fit'/>
   <img src={productimage} onDragStart={handleDragStart} role="presentation" className='w-fit'/>
   <img src={productimage} onDragStart={handleDragStart} role="presentation" className='w-fit'/>
   <img src={productimage} onDragStart={handleDragStart} role="presentation" className='w-fit'/>
   </div>, 
    <img src={productimage} onDragStart={handleDragStart} role="presentation" className='w-fit'/>,
    <img src={productimage} onDragStart={handleDragStart} role="presentation" className='w-fit'/>,
    <img src={productimage} onDragStart={handleDragStart} role="presentation" className='w-fit'/>,
    <img src={productimage} onDragStart={handleDragStart} role="presentation" className='w-fit'/>,
    <img src={productimage} onDragStart={handleDragStart} role="presentation" className='w-fit'/>,
    <img src={productimage} onDragStart={handleDragStart} role="presentation" className='w-fit'/>,
    <img src={productimage} onDragStart={handleDragStart} role="presentation" className='w-fit'/>,
    <img src={productimage} onDragStart={handleDragStart} role="presentation" className='w-fit'/>,
    <img src={productimage} onDragStart={handleDragStart} role="presentation" className='w-fit'/>,
    <img src={productimage} onDragStart={handleDragStart} role="presentation" className='w-fit'/>,
    <img src={productimage} onDragStart={handleDragStart} role="presentation" className='w-fit'/>,
  ];
  
  const EventObject = {
    item: 6,
    slide: 6,
    itemsInSlide: 6,
    isPrevSlideDisabled: true,
    isNextSlideDisabled: true,
    isActive: true,
	activeIndex: 1,
    type: 'info',
  };
  return (
    <AliceCarousel mouseTracking animationType='fadeout'
  onSlideChange={()=>EventObject}
  autoPlay={true} items={items} 
    renderPrevButton={false} renderNextButton={false} />
  
     

  );
};