import React, { useState, useRef } from 'react';
import './ApplyForm.css';
import Swal from 'sweetalert2';

const ApplyForm = () => {
  const [isLoading, setIsLoading] = useState(false); // State for loading
  const formRef = useRef(null);

  const handleSuccessClick = () => {
    // Adding a slight delay before showing the popup
    setTimeout(() => {
      Swal.fire('Success!', 'Application was sent.', 'success');
      setIsLoading(false); // Reset loading state after popup
    }, 100); // 100ms delay
  };

  const handleError = (error) => {
    console.error('Error details:', error);
    Swal.fire('Error!', 'There was an issue sending your application.', 'error');
    setIsLoading(false); // Reset loading state on error
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state when form is submitted

    if (e.nativeEvent.submitter) {
      const formData = new FormData(e.target);

      try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbzaaOMfa9n8XSR-C1KVT_MB_2LxLQtaJf-7rId7pu8GfPUjgLMU7J42m75kYPHJIbLFag/exec', {
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
    <div className='form'>
      <div className='form-wrapper'>
        <form className='form' onSubmit={handleFormSubmit} onKeyDown={handleKeyDown} ref={formRef}>
          <div className="grid-container">
            <div>
              <label>Full Name</label>
              <input placeholder='Name' name='Full_Name' type='text' required />
            </div>
            <div>
              <label>Email</label>
              <input placeholder='Email' name='Email' type='email' required />
            </div>
          </div>

          <label>Level</label>
          <div className='radio-group'>
            <div className='radiobuttons'>
              <input type="radio" id="Sophomore" name="Level" value="Sophomore" required />
              <label htmlFor="Sophomore">Sophomore</label>
            </div>
            <div className='radiobuttons'>
              <input type="radio" id="Junior" name="Level" value="Junior" required />
              <label htmlFor="Junior">Junior</label>
            </div>
            <div className='radiobuttons'>
              <input type="radio" id="Senior" name="Level" value="Senior" required />
              <label htmlFor="Senior">Senior</label>
            </div>
            <div className='radiobuttons'>
              <input type="radio" id="PG" name="Level" value="PG" required />
              <label htmlFor="PG">Masters / PhD</label>
            </div>
          </div>

          <label htmlFor="Position">Position</label>
          <select name="Position" id="Position" required>
            <option value="" disabled>Select a position</option>
            <option value="AcademicLead">Academic Lead</option>
            <option value="EventsChair">Events Chair</option>
            <option value="EventsOrganizer_AcademicCo-Lead">Events Organizer or Academic Co-Lead</option>
            <option value="Treasurer">Treasurer</option>
            <option value="SocialDirector">Social Director</option>
            <option value="Marketing">Marketing</option>
          </select>

          <label>What do you plan to offer to the club?</label>
          <textarea rows='6' placeholder='Be yourself!' name='What_do_you_plan_to_offer_to_the_chapter' type='text' required />

          <label>What are your personal strengths?</label>
          <textarea rows='6' placeholder='Tell us about yourself' name='What_are_your_personal_strengths' type='text' required />

          <div className='button-container'>
            <label>** It may take a few seconds to process your application after clicking submit. Don't Worry :)</label>
            <button className='btn' type='submit' disabled={isLoading}>
              {isLoading ? 'Loading...' : 'Send Application'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyForm;
