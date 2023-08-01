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
                            This front end project is a website for a fake brand of sake. The brand is inspired by a creature from Japanese myth known as a Baku that eats dreams. I am doing the UI/UX design for the website, as well as making many of the graphics, and writing the code for it. I also am considering eventually adding a database component. It was built with React.
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
                                src="/Project-Images/Youtube-Clone.webp"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="project-image photo-frame"
                                alt="Photo of Sake Website"
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
                            This full stack project is a video streaming site much like YouTube. I plan on improving the UI and focusing on the more stylistic aspects of the site in the future. It was built using React and MaterialUI, and utilizes the Youtube V3 API by ytdlfree.
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
                                src="/Project-Images/Portfolio-Site.webp"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="project-image photo-frame"
                                alt="Photo of Sake Website"
                            />
                        </div>
                        <br />
                        <div className="flex justify-center">
                            <a href="https://github.com/OnlyDuncan/Bootcamp-Art-Portfolio-Project-React" target="_blank" className="acuminMid text-xl md:text-2xl text-center text-white underline">GitHub Repository</a>
                        </div>
                        <div className="flex justify-center">
                            <a href="https://bootcamp-art-portfolio-project-react.vercel.app/" target="_blank" className="acuminMid text-xl md:text-2xl text-center text-white underline">Deployed App</a>
                        </div>
                        <br />
                        <p className="acuminMid flex text-center text-white pb-10 px-10">
                            This is a front end project my teammate Matthew and I made while taking several of NuCamps software engineering bootcamps in 2022. During the different courses we actually made three versions of this site. This version was built using React and Redux.
                        </p>
                    </div>
                </div>
            </Modal>
        </div>
    )

}

export default ProjectsModal;