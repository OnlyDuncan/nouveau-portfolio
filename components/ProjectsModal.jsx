"use client";

import React, { useState } from 'react';
import Modal from 'react-modal';
import Image from 'next/image';

const ProjectsModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const styles = {
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            overflowY: 'scroll'
        },
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#404355',
            width: '40rem',
            maxWidth: '90%',
            maxHeight: '95vh',
            position: 'relative'
        }
    }

    return (
        <div>
            <button className="nav-button acuminMid text-white" onClick={() => setIsOpen(true)}>Projects</button>
            <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={styles}>
                <div className="modal-border flex-col">
                    <div className="flex">
                        <button onClick={() => setIsOpen(false)} className="mr-0 ml-auto p-3">
                            <Image
                                src="/Other-Images/Close.svg"
                                width={30}
                                height={30}
                            />
                        </button>
                    </div>
                    <br />
                    <h1
                        className="sourceCode text-4xl text-center justify-center text-white"
                        style={{ letterSpacing: "0.07em" }}
                    >
                        Projects
                    </h1>
                    <br />
                    <div className="flex justify-center">
                        <p className="acuminMid flex text-center text-white pb-10 px-10">
                            Welcome to my projects page! In addition to this website, which was built using React, Next, and Tailwind, some other projects I've worked on include:
                        </p>
                    </div>
                    <div className="flex-col">
                        <div className="flex justify-center">
                            <h2 className="sourceCode text-3xl text-center justify-center text-white">
                                Dreameater Sake
                            </h2>
                        </div>
                        <br />
                        <div className="flex justify-center">
                            <Image
                                src="/Project-Images/Sake-Site.webp"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="project-image photo-frame"
                                alt="Photo of Sake Website"
                            />
                        </div>
                        <br />
                        <div className="flex justify-center">
                            <a href="https://github.com/OnlyDuncan/Dream-Eater-Sake" target="_blank" className="acuminMid text-xl md:text-2xl text-center text-white underline">GitHub Repository</a>
                        </div>
                        <div className="flex justify-center">
                            <a href="https://dream-eater-sake.vercel.app/" target="_blank" className="acuminMid text-xl md:text-2xl text-center text-white underline">Deployed App</a>
                        </div>
                        <br />
                        <p className="acuminMid flex text-center text-white pb-10 px-10">
                            This front end project is a website for a fake brand of sake. I made all of the graphics for it and designed both the Lo-fi and Hi-fi wireframes for it using AdobeXd. It was built with React.
                        </p>
                    </div>
                    <div className="flex-col">
                        <div className="flex justify-center">
                            <h2 className="sourceCode text-3xl text-center justify-center text-white">
                                Hypnodrome
                            </h2>
                        </div>
                        <br />
                        <div className="flex justify-center">
                            <Image
                                src="/Project-Images/Hypnodrome.webp"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="project-image photo-frame"
                                alt="Photo of Youtube Clone Website"
                            />
                        </div>
                        <br />
                        <div className="flex justify-center">
                            <a href="https://github.com/OnlyDuncan/Hypnodrome" target="_blank" className="acuminMid text-xl md:text-2xl text-center text-white underline">GitHub Repository</a>
                        </div>
                        <div className="flex justify-center">
                            <a href="https://hypnodrome.vercel.app/" target="_blank" className="acuminMid text-xl md:text-2xl text-center text-white underline">Deployed App</a>
                        </div>
                        <br />
                        <p className="acuminMid flex text-center text-white pb-10 px-10">
                            This full stack project is a video streaming site much like YouTube. It was built using React, MaterialUI, and Tailwind, and utilizes the Youtube V3 API by ytdlfree.
                        </p>
                    </div>
                    <div className="flex-col">
                        <div className="flex justify-center">
                            <h2 className="sourceCode text-3xl text-center justify-center text-white">
                                Art Portfolio Website
                            </h2>
                        </div>
                        <br />
                        <div className="flex justify-center">
                            <Image
                                src="/Project-Images/ArtPortfolio.webp"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="project-image photo-frame"
                                alt="Photo of Art Website"
                            />
                        </div>
                        <br />
                        <div className="flex justify-center">
                            <a href="https://github.com/OnlyDuncan/nouveau-art-portfolio" target="_blank" className="acuminMid text-xl md:text-2xl text-center text-white underline">GitHub Repository</a>
                        </div>
                        <div className="flex justify-center">
                            <a href="https://nouveau-art-portfolio.vercel.app/" target="_blank" className="acuminMid text-xl md:text-2xl text-center text-white underline">Deployed App</a>
                        </div>
                        <br />
                        <p className="acuminMid flex text-center text-white pb-10 px-10">
                            This is a complete remake of a project my teammate Matthew and I made while taking several of NuCamps software engineering bootcamps in 2022.
                            This was made using React, Next, Tailwind, Material UI, and Redux. It's a portfolio website for artwork.
                        </p>
                    </div>
                    <div className="flex-col">
                        <div className="flex justify-center">
                            <h2 className="sourceCode text-3xl text-center justify-center text-white">
                                In the Cards
                                <br />
                                &#40;A Work In Progress&#41;
                            </h2>
                        </div>
                        <br />
                        {/* <div className="flex justify-center">
                            <Image
                                src="/Project-Images/ArtPortfolio.webp"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="project-image photo-frame"
                                alt="Photo of Art Website"
                            />
                        </div>
                        <br /> */}
                        <div className="flex justify-center">
                            <a href="https://github.com/OnlyDuncan/in-the-cards" target="_blank" className="acuminMid text-xl md:text-2xl text-center text-white underline">GitHub Repository</a>
                        </div>
                        <div className="flex justify-center">
                            <a href="https://in-the-cards.vercel.app/" target="_blank" className="acuminMid text-xl md:text-2xl text-center text-white underline">Deployed App</a>
                        </div>
                        <br />
                        <p className="acuminMid flex text-center text-white pb-10 px-10">
                            This is a full stack tarot card fortune telling web application that I am currently building using React, Next, Firebase-Firestore, and Tailwind. I still need to fix several errors involving data collection, optimize it for different screen sizes, and improve the styling. I also may add more tarot cards.
                        </p>
                    </div>
                </div>
            </Modal>
        </div>
    )

}

export default ProjectsModal;