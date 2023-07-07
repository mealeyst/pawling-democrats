import React from 'react'
import Slider from 'react-slick'
import { Slideshow as SlideshowEntry } from '../../../@types/generated'
import { documentToReactComponents } from 'components/Nodes'
import Head from 'next/head'
import styled from 'styled-components'

export const Slideshow = styled(
  ({
    className,
    entry: { slidesCollection },
  }: {
    className?: string
    entry: SlideshowEntry
  }) => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 10000,
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
            console.log(slide?.slideAsset)
            return (
              <div className={className} key={slide?.sys.id}>
                {slide?.slideAsset &&
                  slide.slideAsset.url &&
                  slide.slideAsset.description && (
                    <div className="image-wrapper">
                      <img
                        src={`${slide?.slideAsset?.url}?f=face&fit=fill&w=300&h=400`}
                        alt={slide?.slideAsset?.description}
                      />
                    </div>
                  )}
                <div className="content">
                  {documentToReactComponents(slide?.slideContent?.json)}
                </div>
              </div>
            )
          })}
        </Slider>
      </>
    )
  }
)`
  display: flex !important;
  box-sizing: border-box;
  .image-wrapper {
    position: relative;
    &:after {
      content: '';
      position: absolute;
      display: block;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-collapse: separate;
      box-shadow: inset -40px 0 20px -10px white;
    }
  }
  .content {
    padding: 1rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`
