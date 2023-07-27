"use client";

import React, { useState } from 'react';
import Modal from 'react-modal';
import Image from 'next/image';

const SkillsModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const styles = {
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.6)'
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
            <button className="nav-button acuminMid text-white" onClick={() => setIsOpen(true)}>Skills</button>
            <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={styles}>
                <div className="modal-border">
                    <button onClick={() => setIsOpen(false)}>
                        <Image
                            src="/Other-Images/Close.svg"
                            width={40}
                            height={40}
                        />
                    </button>
                    <h1>Modal Content</h1>
                    <button onClick={() => setIsOpen(false)}>Close Modal</button>
                </div>
            </Modal>
        </div>
    )

}

export default SkillsModal;