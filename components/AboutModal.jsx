"use client";

import React, { useState } from 'react';
import Modal from 'react-modal';
import Image from 'next/image';

const AboutModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const styles = {
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.4)'
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
            position: 'relative'
        }
    }

    return (
        <div>
            <button className="nav-button acuminMid text-white" onClick={() => setIsOpen(true)}>About</button>
            <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={styles}>
                <div className="modal-border flex flex-col">
                    <div className="float-right">
                        <button onClick={() => setIsOpen(false)}>
                            <Image
                                src="/Other-Images/Close.svg"
                                width={30}
                                height={30}
                            />
                        </button>
                    </div>
                    <br />
                    <h1 
                        className="sourceCode text-5xl text-center justify-center text-white"
                        style={{ letterSpacing: "0.07em" }}
                    >
                        About Me
                    </h1>
                    <div className="flex justify-center">
                        <Image
                            src="/Other-Images/Profile.png"
                            width="0"
                            height="0"
                            sizes="100vw"
                            className="w-60 h-auto photo-frame"
                            alt="Photo of Myself"
                        />
                    </div>
                    <p className="acuminMid text-center text-white">
                        I'm a multimedia artist, designer, and web developer currently residing in Oklahoma City, Oklahoma.
                        After graduating from the University of Science and Arts of Oklahoma in 2020 with a BFA in Sculpture and Expanded Media,
                        I spent 2022 taking several of NuCamp's software development bootcamps. As a designer and web developer
                        I am creative, goal-oriented, and passionate about thinking outside the box, while creating websites and applications
                        that fit the needs of my clients.
                    </p>
                </div>
            </Modal>
        </div>
    )

}

export default AboutModal;