"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";

const IllustrationSlider = () => {
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
                            <a href="/Design-Images/Illustration/InfernoCanto3.webp" target="_blank">
                                <Image
                                    src="/Design-Images/Illustration/InfernoCanto3.webp"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="object-contain image-modal"
                                    style={{ backgroundColor: "#80c894" }}
                                />
                            </a>
                            <div className="bg-white flex justify-center w-full h-full">
                                <p className="acuminMid text-wrap text-2xl flex text-center justify-center text-grey px-2 py-2">
                                    Divine Comedy, Inferno, Canto 3
                                </p>
                            </div>
                        </div>
                        <div className="keen-slider__slide number-slide2 flex-col object-contain">
                            <a href="/Design-Images/Illustration/InfernoCanto2.webp" target="_blank">
                                <Image
                                    src="/Design-Images/Illustration/InfernoCanto2.webp"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="object-contain image-modal"
                                    style={{ backgroundColor: "#af8bc0" }}
                                />
                            </a>
                            <div className="bg-white flex justify-center w-full h-full">
                                <p className="acuminMid text-wrap text-2xl flex text-center justify-center text-grey px-2 py-2">
                                    Divine Comedy, Inferno, Canto 2
                                </p>
                            </div>
                        </div>
                        <div className="keen-slider__slide number-slide3 flex-col object-contain">
                            <a href="/Design-Images/Illustration/InfernoCanto1.webp" target="_blank">
                                <Image
                                    src="/Design-Images/Illustration/InfernoCanto1.webp"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="object-contain image-modal"
                                    style={{ backgroundColor: "#46b7ae" }}
                                />
                            </a>
                            <div className="bg-white flex justify-center w-full h-full">
                                <p className="acuminMid text-wrap text-2xl flex text-center justify-center text-grey px-2 py-2">
                                    Divine Comedy, Inferno, Canto 1
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

export default IllustrationSlider;