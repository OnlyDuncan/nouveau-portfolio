"use client";

import React, { useState } from 'react';
import Modal from 'react-modal';
import Image from 'next/image';

const ContactModal = () => {
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
            <button className="nav-button acuminMid text-white" onClick={() => setIsOpen(true)}>Contact</button>
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
                        Contact Me
                    </h1>
                    <br />
                    <p className="acuminMid flex text-center text-white pb-10 px-10">
                        For business inquiries feel free to contact me using the number or email provided below.
                    </p>
                    <br />
                    <div className="flex justify-center">
                        <h2 className="acuminMid text-2xl text-center text-white px-10">
                            Phone:&nbsp;
                            <a href="tel:1-405-308-9609" className="underline">1-405-308-9609</a>
                        </h2>
                    </div>
                    <div className="flex justify-center">
                        <h2 className="acuminMid text-2xl text-center text-white px-10">
                            Email:&nbsp;
                            <a href="mailto: Duncan.C.Payne@gmail.com" className="underline">Duncan.C.Payne@gmail.com</a>
                        </h2>
                    </div>
                    <br />
                    <div className="flex justify-center">
                        <a href="https://vercel.com/onlyduncan" target="_blank">
                            <Image
                                src="/Icon-SVGs/Vercel.svg"
                                width={85}
                                height={85}
                                className="p-3"
                            />
                        </a>
                        <a href="https://github.com/OnlyDuncan" target="_blank">
                            <Image
                                src="/Icon-SVGs/GitHub.svg"
                                width={85}
                                height={85}
                                className="p-3"
                            />
                        </a>
                        <a href="https://www.linkedin.com/in/duncan-payne-3493201ba/" target="_blank">
                            <Image
                                src="/Icon-SVGs/LinkedIn.svg"
                                width={85}
                                height={85}
                                className="p-3"
                            />
                        </a>
                    </div>
                </div>
            </Modal>
        </div>
    )

}

export default ContactModal;