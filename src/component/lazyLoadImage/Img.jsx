import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
export function Img({alt,src, className,title,onClick}) {
  

   
  return (
    <LazyLoadImage
    alt={alt}
    effect="blur"
    src={src} 
    className={className || ""}
    title={title}
    onClick={onClick}
    />
);
  }
