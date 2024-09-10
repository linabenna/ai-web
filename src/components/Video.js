    import React, { useRef } from 'react';
    import { Link } from 'react-router-dom'
    import './Video.css'
    import spaceVideo from '../assets/backgroundVideo.mp4'
    import Swal from 'sweetalert2';

    function Video() {
        const formRef = useRef(null);

        const handleSuccessClick = () => {
          // Adding a slight delay before showing the popup
          setTimeout(() => {
            Swal.fire('Success!', 'You have joined our mailing list.', 'success');
          }, 100); // 100ms delay
        };
      
        const handleError = (error) => {
          console.error('Error details:', error);
          Swal.fire('Error!', 'There was an issue sending your request.', 'error');
        };
      
        const handleFormSubmit = async (e) => {
          e.preventDefault();
      
          if (e.nativeEvent.submitter) {
            const formData = new FormData(e.target);
      
            try {
              const response = await fetch('https://script.google.com/macros/s/AKfycbwYa-6N_xfF15TOMNq5ii4PAxct7nprzQS6DL8AYGCdwSOffjr8VxksHyRQEYJ6-1bcfg/exec', {
                method: 'POST',
                body: formData,
              });
      
              const contentType = response.headers.get('content-type');
              if (contentType?.includes('application/json')) {
                await response.json();
              } else if (contentType?.includes('text/plain')) {
                await response.text();
              } else {
                throw new Error('Unexpected response format');
              }
      
              handleSuccessClick();
              if (formRef.current) {
                formRef.current.reset(); // Reset the form
              }
            } catch (error) {
              handleError(error);
            }
          }
        };
      
        const handleKeyDown = (e) => {
          if (e.key === 'Enter' && e.target.tagName === 'TEXTAREA') {
            return;
          } else if (e.key === 'Enter') {
            e.preventDefault();
          }
        };

    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={spaceVideo} type='video/mp4'/>
            </video>
            <div className='content'>         
                <h2>Khalifa University</h2>  
                <h1>Artificial Intelligence Club</h1>   
                <p>Making machines smarter and us cooler</p> 

                <div className='mailing-wrapper'>
                    <form className='MainForm' onSubmit={handleFormSubmit} onKeyDown={handleKeyDown} ref={formRef}>                       
                        <input placeholder='Join Our Mailing List' name='Email' type='email' required/>
                        <button className='btn' type='submit'>
                                Join
                        </button>

                    </form>
                </div>   

        </div>
        </div>
    )
    }

    export default Video