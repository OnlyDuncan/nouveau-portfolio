"use client";

import React, { useState } from 'react';
import Modal from 'react-modal';
import Image from 'next/image';
import { GraphicDesignSlider, UiUxSlider, IllustrationSlider } from './';

const DesignModal = () => {
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
            <button className="nav-button acuminMid text-white" onClick={() => setIsOpen(true)}>Design</button>
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
                        Design
                    </h1>
                    <br />
                    <div className="flex justify-center">
                        <p className="acuminMid flex text-center text-white pb-10 px-10">
                            Welcome to my design page! Below are several different slideshows. To go to different slides, slide to the left or right, or select the arrows on the side. If you select an image, a larger version will open in a new tab.
                        </p>
                    </div>
                    <div className="flex-col">
                        <div className="flex justify-center">
                            <h2 className="sourceCode text-3xl text-center justify-center text-white">
                                Graphic Design
                            </h2>
                        </div>
                        <br />
                        <div className="flex justify-center">
                            <GraphicDesignSlider />
                        </div>
                    </div>
                    <br />
                    <div className="flex-col">
                        <div className="flex justify-center">
                            <h2 className="sourceCode text-3xl text-center justify-center text-white">
                                UI/UX Design
                            </h2>
                        </div>
                        <br />
                        <div className="flex justify-center">
                            <UiUxSlider />
                        </div>
                    </div>
                    <br />
                    <div className="flex-col pb-10">
                        <div className="flex justify-center">
                            <h2 className="sourceCode text-3xl text-center justify-center text-white">
                                Illustration
                            </h2>
                        </div>
                        <br />
                        <div className="flex justify-center">
                            <IllustrationSlider />
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )

}

export default DesignModal;