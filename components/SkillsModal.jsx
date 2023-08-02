"use client";

import React, { useState } from 'react';
import Modal from 'react-modal';
import Image from 'next/image';

const SkillsModal = () => {
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
            <button className="nav-button acuminMid text-white" onClick={() => setIsOpen(true)}>Skills</button>
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
                        Skills
                    </h1>
                    <br />
                    <p className="acuminMid flex text-center text-white px-10">
                        I have experience working with a wide variety of technologies and applications including:
                    </p>
                    <div className="flex-col p-10 relative icons-scale">
                        <div className="flex justify-center">
                            <Image
                                src="/Icon-SVGs/JavaScript.svg"
                                width={30}
                                height={30}
                                className="mr-1"
                            />
                            <Image
                                src="/Icon-SVGs/CSS.svg"
                                width={30}
                                height={30}
                                className="mx-1"
                            />
                            <Image
                                src="/Icon-SVGs/HTML.svg"
                                width={30}
                                height={30}
                                className="mx-1"
                            />
                            <Image
                                src="/Icon-SVGs/React.svg"
                                width={30}
                                height={30}
                                className="mx-1"
                            />
                            <Image
                                src="/Icon-SVGs/Python.svg"
                                width={30}
                                height={30}
                                className="mx-1"
                            />
                            <Image
                                src="/Icon-SVGs/TypeScript.svg"
                                width={30}
                                height={30}
                                className="mx-1"
                            />
                            <Image
                                src="/Icon-SVGs/VSCode.svg"
                                width={30}
                                height={30}
                                className="mx-1"
                            />
                            <Image
                                src="/Icon-SVGs/Firebase.svg"
                                width={30}
                                height={30}
                                className="mx-1"
                            />
                            <Image
                                src="/Icon-SVGs/Docker.svg"
                                width={30}
                                height={30}
                                className="mx-1"
                            />
                            <Image
                                src="/Icon-SVGs/PostgreSQL.svg"
                                width={30}
                                height={30}
                                className="ml-1"
                            />
                        </div>
                        <div className="flex justify-center">
                            <Image
                                src="/Icon-SVGs/Bootstrap.svg"
                                width={30}
                                height={30}
                                className="mr-1"
                            />
                            <Image
                                src="/Icon-SVGs/Redux.svg"
                                width={30}
                                height={30}
                                className="mx-1"
                            />
                            <Image
                                src="/Icon-SVGs/Next.svg"
                                width={30}
                                height={30}
                                className="mx-1"
                            />
                            <Image
                                src="/Icon-SVGs/Django.svg"
                                width={30}
                                height={30}
                                className="mx-1"
                            />
                            <Image
                                src="/Icon-SVGs/Express.svg"
                                width={30}
                                height={30}
                                className="mx-1"
                            />
                            <Image
                                src="/Icon-SVGs/Flask.svg"
                                width={30}
                                height={30}
                                className="mx-1"
                            />
                            <Image
                                src="/Icon-SVGs/AndroidStudio.svg"
                                width={30}
                                height={30}
                                className="mx-1"
                            />
                            <Image
                                src="/Icon-SVGs/jQuery.svg"
                                width={30}
                                height={30}
                                className="mx-1"
                            />
                            <Image
                                src="/Icon-SVGs/MySQL.svg"
                                width={30}
                                height={30}
                                className="mx-1"
                            />
                            <Image
                                src="/Icon-SVGs/Postman.svg"
                                width={30}
                                height={30}
                                className="ml-1"
                            />
                        </div>
                        <div className="flex justify-center">
                            <Image
                                src="/Icon-SVGs/Node.svg"
                                width={30}
                                height={30}
                                className="mr-1"
                            />
                            <Image
                                src="/Icon-SVGs/Tailwind.svg"
                                width={30}
                                height={30}
                                className="mx-1"
                            />
                            <Image
                                src="/Icon-SVGs/Sass.svg"
                                width={30}
                                height={30}
                                className="mx-1"
                            />
                            <Image
                                src="/Icon-SVGs/MaterialUI.svg"
                                width={30}
                                height={30}
                                className="mx-1"
                            />
                            <Image
                                src="/Icon-SVGs/MongoDb.svg"
                                width={15}
                                height={15}
                                className="mx-1"
                            />
                            <Image
                                src="/Icon-SVGs/Git.svg"
                                width={30}
                                height={30}
                                className="mx-1"
                            />
                            <Image
                                src="/Icon-SVGs/Illustrator.svg"
                                width={30}
                                height={30}
                                className="mx-1"
                            />
                            <Image
                                src="/Icon-SVGs/Xd.svg"
                                width={30}
                                height={30}
                                className="mx-1"
                            />
                            <Image
                                src="/Icon-SVGs/Photoshop.svg"
                                width={30}
                                height={30}
                                className="mx-1"
                            />
                            <Image
                                src="/Icon-SVGs/Blender.svg"
                                width={30}
                                height={30}
                                className="ml-1"
                            />
                        </div>
                    </div>
                    <p className="acuminMid flex text-center text-white px-10">
                        Below are copies of my software development focused resume, as well as my design focused resume:
                    </p>
                    <br />
                    <a href="/Resume/TechResume.pdf" target="_blank" className="acuminMid flex justify-center text-xl md:text-2xl text-center text-white underline">
                        Tech and Software <br />
                        Development Resume
                    </a>
                    <br />
                    <a href="/Resume/DesignResume.pdf" target="_blank" className="acuminMid flex justify-center text-xl md:text-2xl text-center text-white underline mb-10">
                        Design Resume
                    </a>
                </div>
            </Modal>
        </div>
    )

}

export default SkillsModal;