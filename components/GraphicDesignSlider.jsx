"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";

const GraphicDesignSlider = () => {
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
                        <div fill className="keen-slider__slide number-slide1 flex-col object-contain">
                            <Image
                                src="/Design-Images/Graphic-Design/DreameaterLogo.webp"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="object-contain image-modal"
                                style={{ backgroundColor: "#462466" }}
                            />
                            <div className="bg-white flex justify-center w-full h-full">
                                <p className="acuminMid text-wrap text-2xl flex text-center justify-center text-grey px-2 py-2">
                                    Logo Design for Dreameater Sake
                                </p>
                            </div>
                        </div>
                        <div className="keen-slider__slide number-slide2 flex-col object-contain">
                            <Image
                                src="/Design-Images/Graphic-Design/DreameaterHero.webp"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="object-contain image-modal"
                                style={{ backgroundColor: "#99f0e6" }}
                            />
                            <div className="bg-white flex justify-center w-full h-full">
                                <p className="acuminMid text-wrap text-2xl flex text-center justify-center text-grey px-2 py-2">
                                    Hero Image for Dreameater Sake
                                </p>
                            </div>
                        </div>
                        <div className="keen-slider__slide number-slide3 flex-col object-contain">
                            <Image
                                src="/Design-Images/Graphic-Design/SakeCanAll3.webp"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="object-contain image-modal"
                                style={{ backgroundColor: "#3a163e" }}
                            />
                            <div className="bg-white flex justify-center w-full h-full">
                                <p className="acuminMid text-wrap text-2xl flex text-center justify-center text-grey px-2 py-2">
                                    Sake Can Mockup for Dreameater Sake
                                </p>
                            </div>
                        </div>
                        <div className="keen-slider__slide number-slide4 flex-col object-contain">
                            <Image
                                src="/Design-Images/Graphic-Design/MugMockup.webp"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="object-contain image-modal"
                                style={{ backgroundColor: "#3a163e" }}
                            />
                            <div className="bg-white flex justify-center w-full h-full">
                                <p className="acuminMid text-wrap text-2xl flex text-center justify-center text-grey px-2 py-2">
                                    Mug Mockup for Dreameater Sake
                                </p>
                            </div>
                        </div>
                        <div className="keen-slider__slide number-slide5 flex-col object-contain">
                            <Image
                                src="/Design-Images/Graphic-Design/ShirtMockup.webp"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="object-contain image-modal"
                                style={{ backgroundColor: "#3a163e" }}
                            />
                            <div className="bg-white flex justify-center w-full h-full">
                                <p className="acuminMid text-wrap text-2xl flex text-center justify-center text-grey px-2 py-2">
                                    T-Shirt Mockup for Dreameater Sake
                                </p>
                            </div>
                        </div>
                        <div className="keen-slider__slide number-slide6 flex-col object-contain">
                            <Image
                                src="/Design-Images/Graphic-Design/SweetDreams.webp"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="object-contain image-modal"
                                style={{ backgroundColor: "#da7ee4" }}
                            />
                            <div className="bg-white flex justify-center w-full h-full">
                                <p className="acuminMid text-wrap text-2xl flex text-center justify-center text-grey px-2 py-2">
                                    Sweet Dreams Design for Dreameater Sake
                                </p>
                            </div>
                        </div>
                        <div className="keen-slider__slide number-slide7 flex-col object-contain">
                            <Image
                                src="/Design-Images/Graphic-Design/StrangeJourney.webp"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="object-contain image-modal"
                                style={{ backgroundColor: "#8272b7" }}
                            />
                            <div className="bg-white flex justify-center w-full h-full">
                                <p className="acuminMid text-wrap text-2xl flex text-center justify-center text-grey px-2 py-2">
                                    Strange Journey Design for Dreameater Sake
                                </p>
                            </div>
                        </div>
                        <div className="keen-slider__slide number-slide8 flex-col object-contain">
                            <Image
                                src="/Design-Images/Graphic-Design/DarkNightmares.webp"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="object-contain image-modal"
                                style={{ backgroundColor: "#312d45" }}
                            />
                            <div className="bg-white flex justify-center w-full h-full">
                                <p className="acuminMid text-wrap text-2xl flex text-center justify-center text-grey px-2 py-2">
                                    Dark Nightmares Design for Dreameater Sake
                                </p>
                            </div>
                        </div>
                        <div className="keen-slider__slide number-slide9 flex-col object-contain">
                            <Image
                                src="/Design-Images/Graphic-Design/Abattoir.webp"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="object-contain image-modal"
                                style={{ backgroundColor: "#46b7ae" }}
                            />
                            <div className="bg-white flex justify-center w-full h-full">
                                <p className="acuminMid text-wrap text-2xl flex text-center justify-center text-grey px-2 py-2">
                                    Abattoir Poster Design Concept
                                </p>
                            </div>
                        </div>
                        <div className="keen-slider__slide number-slide10 flex-col object-contain">
                            <Image
                                src="/Design-Images/Graphic-Design/TheTelltaleHeart.webp"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="object-contain image-modal"
                                style={{ backgroundColor: "#6bc4df" }}
                            />
                            <div className="bg-white flex justify-center w-full h-full">
                                <p className="acuminMid text-wrap text-2xl flex text-center justify-center text-grey px-2 py-2">
                                    TellTale Heart Poster Design Concept
                                </p>
                            </div>
                        </div>
                        <div className="keen-slider__slide number-slide11 flex-col object-contain">
                            <Image
                                src="/Design-Images/Graphic-Design/TheMasqueOfTheRedDeath.webp"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="object-contain image-modal"
                                style={{ backgroundColor: "#da4d5d" }}
                            />
                            <div className="bg-white flex justify-center w-full h-full">
                                <p className="acuminMid text-wrap text-2xl flex text-center justify-center text-grey px-2 py-2">
                                    Masque of the Red Death Poster Design Concept
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

export default GraphicDesignSlider;
