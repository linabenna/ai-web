import React, { useRef, useState } from 'react';
import './CommunityPage.css';
import './AboutPage.css';
import './ApplyForm.css';
import Swal from 'sweetalert2';

const CommunityPage = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false); // Add loading state

  const handleSuccessClick = () => {
    setLoading(false); // Stop loading when popup appears
    Swal.fire('Success!', 'Suggestion was sent.', 'success');
  };

  const handleError = (error) => {
    console.error('Error details:', error);
    setLoading(false); // Stop loading in case of error
    Swal.fire('Error!', 'There was an issue sending your suggestion.', 'error');
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when form is submitted

    const formData = new FormData(e.target);

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbwWWnxHfRVcvEy68rNK9DdBIWBdWhBGQPyUGvgVGDz5e0UuoJvg1z6EYLRUabh7CGg/exec', {
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
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && e.target.tagName === 'TEXTAREA') {
      return;
    } else if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  return (
    <div>
      <div className='training'>
        <div className='cardSliders'>
          <div className='cardSlideshow'>
            <input type='radio' name='slide1' id='vision' checked />                     
            <label htmlFor='vision' className='slide1'>             
              <div className='row'>
                <div className='icon'>1</div>
                <div className='description'>
                  <h4>Networking Events</h4>
                </div>
              </div>                       
            </label> 
            <input type='radio' name='slide1' id='mission' checked />
            <label htmlFor='mission' className='slide1'>
              <div className='row'>                       
                <div className='icon'>2</div>
                <div className='description'>
                  <h4>Hackathons</h4>
                  <p>Join us in competitive events and test your AI skills. Who doesn’t love a good brain workout?</p>
                </div>
              </div>
            </label>
            <input type='radio' name='slide1' id='goals' checked />
            <label htmlFor='goals' className='slide1'>
              <div className='row'>                       
                <div className='icon'>3</div>
                <div className='description'>
                  <h4>Workshops</h4>
                  <p>Join us for hands-on workshops and unleash your creativity—let’s turn ideas into reality together!</p>
                </div>
              </div>
            </label>
          </div>
        </div> 
      </div>

      <div className='customHeading'>
        <h3>Suggest an Event</h3>
        <p>We'd love to hear your ideas on new or current events! Be creative and feel free to add whatever crosses your mind.</p>
      </div>

      <div className='Form'>
        <div className='form-wrapper'>
          <form className='form' onSubmit={handleFormSubmit} onKeyDown={handleKeyDown} ref={formRef}>
            <div className="grid-container">
              <div>
                <label>Full Name</label>
                <input placeholder='Name' name='Name' type='text' required />
              </div>
              <div>
                <label>Email</label>
                <input placeholder='Email' name='Email' type='email' required />
              </div>
            </div>

            <label>Event Suggestion</label>
            <textarea rows='6' placeholder='Let us know!' name='Suggestion' type='text' required />

            <div className='button-container'>
              <label>** It may take a few seconds to process your suggestion after clicking submit. Don't Worry :)</label>
              <button className='btn' type='submit' disabled={loading}>
                {loading ? 'Loading...' : 'Suggest Event'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
