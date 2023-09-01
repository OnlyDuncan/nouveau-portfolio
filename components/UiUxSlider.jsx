"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";

const UiUxSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
    })

    return (
        <>
            <div className="photo-frame">
                <div className="navigation-wrapper">
                    <div ref={sliderRef} className="keen-slider">
                        <div className="keen-slider__slide number-slide1 flex-col object-contain">
                            <Image
                                src="/Design-Images/UiUx/NouveauPortfolioUiUx.webp"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="object-contain image-modal"
                                style={{ backgroundColor: "#88e0d9" }}
                            />
                            <div className="bg-white flex justify-center w-full h-full">
                                <p className="acuminMid text-wrap text-2xl flex text-center justify-center text-grey px-2 py-2">
                                    Mockup Design for Software Development and Design Portfolio Site
                                </p>
                            </div>
                        </div>
                        <div className="keen-slider__slide number-slide2 flex-col object-contain">
                            <Image
                                src="/Design-Images/UiUx/ArtPortfolioDesign.webp"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="object-contain image-modal"
                                style={{ backgroundColor: "#e394f7" }}
                            />
                            <div className="bg-white flex justify-center w-full h-full">
                                <p className="acuminMid text-wrap text-2xl flex text-center justify-center text-grey px-2 py-2">
                                    Mockup Design for Art Portfolio Website
                                </p>
                            </div>
                        </div>
                        <div className="keen-slider__slide number-slide3 flex-col object-contain">
                            <Image
                                src="/Design-Images/UiUx/HypnodromeDesign.webp"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="object-contain image-modal"
                                style={{ backgroundColor: "#6bb4de" }}
                            />
                            <div className="bg-white flex justify-center w-full h-full">
                                <p className="acuminMid text-wrap text-2xl flex text-center justify-center text-grey px-2 py-2">
                                    Mockup Design for Hypnodrome Website
                                </p>
                            </div>
                        </div>
                        <div className="keen-slider__slide number-slide4 flex-col object-contain">
                            <Image
                                src="/Design-Images/UiUx/DreameaterHifiDesign.webp"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="object-contain image-modal"
                                style={{ backgroundColor: "#89c2df" }}
                            />
                            <div className="bg-white flex justify-center w-full h-full">
                                <p className="acuminMid text-wrap text-2xl flex text-center justify-center text-grey px-2 py-2">
                                    Mockup Design for Dreameater Sake Website
                                </p>
                            </div>
                        </div>
                        <div className="keen-slider__slide number-slide5 flex-col object-contain">
                            <Image
                                src="/Design-Images/UiUx/DreameaterLofiWireframe.webp"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="object-contain image-modal"
                                style={{ backgroundColor: "#deb3df" }}
                            />
                            <div className="bg-white flex justify-center w-full h-full">
                                <p className="acuminMid text-wrap text-2xl flex text-center justify-center text-grey px-2 py-2">
                                    Wireframe for Dreameater Sake Website
                                </p>
                            </div>
                        </div>
                    </div>
                    {loaded && instanceRef.current && (
                        <>
                            <Arrow
                                left
                                onClick={(e) =>
                                    e.stopPropagation() || instanceRef.current?.prev()
                                }
                                disabled={currentSlide === 0}
                            />

                            <Arrow
                                onClick={(e) =>
                                    e.stopPropagation() || instanceRef.current?.next()
                                }
                                disabled={
                                    currentSlide ===
                                    instanceRef.current.track.details.slides.length - 1
                                }
                            />
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

function Arrow(props) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
        <svg
            onClick={props.onClick}
            className={`arrow ${props.left ? "arrow--left" : "arrow--right"
                } ${disabeld}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            {props.left && (
                <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            )}
            {!props.left && (
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            )}
        </svg>
    )
}

export default UiUxSlider;
