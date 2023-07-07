import React from 'react'
import Slider from 'react-slick'
import { Slideshow as SlideshowEntry } from '../../../@types/generated'
import { documentToReactComponents } from 'components/Nodes'
import Head from 'next/head'

export const Slideshow = ({
  entry: { slidesCollection },
}: {
  entry: SlideshowEntry
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <Slider {...settings}>
        {slidesCollection?.items.map((slide) => {
          return (
            <div key={slide?.sys.id}>
              {slide?.slideAsset &&
                slide.slideAsset.url &&
                slide.slideAsset.description && (
                  <img
                    src={slide?.slideAsset?.url}
                    alt={slide?.slideAsset?.description}
                  />
                )}
              {documentToReactComponents(slide?.slideContent?.json)}
            </div>
          )
        })}
      </Slider>
    </>
  )
}
