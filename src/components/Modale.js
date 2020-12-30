import React, { useState, useEffect, useRef, useCallback } from 'react';
// import { useSpring, animated } from 'react-spring';
import { MdClose } from 'react-icons/md';

const Modale = ({ showModal, setShowModal }) => {
  const modalRef = useRef();
  const [email, setEmail] = useState('');

  // const animation = useSpring({
  //   config: {
  //     duration: 250,
  //   },
  //   opacity: showModal ? 1 : 0,
  //   transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  // });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  const handleSubmit = (event) => {};

  return (
    <>
      {showModal ? (
        <div className='Background' onClick={closeModal} ref={modalRef}>
          {/* <animated.div style={animation}> */}
          <div className='wrap-login100'>
            <form onSubmit={handleSubmit} className='login100-form'>
              <span className='login100-form-title'>Enter your email</span>
              <div className='wrap-input100'>
                <input
                  className='input100'
                  type='email'
                  placeholder='Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className='symbol-input100'></span>
              </div>
              <div className='container-login100-form-btn'>
                <button className='login100-form-btn'>Submit</button>
              </div>
            </form>
            <span
              className='CloseModalButton'
              aria-label='Close modal'
              onClick={() => setShowModal((prev) => !prev)}
            >
              <MdClose />
            </span>
          </div>
          {/* </animated.div> */}
        </div>
      ) : null}
    </>
  );
};

export default Modale;
