import React from 'react';

const Contacts = () => {
    return (
        <div className={'contacts'}>
            <div className="container">
                <h2 className="block__title text-white">
                    Contact us
                </h2>
                <form className='contacts__form' action="">
                    <div className="form__row">
                        <div className='form__group'>
                            <input type="text" className="input" placeholder={' '}/>
                            <label htmlFor="" className="label">
                                Name
                            </label>
                        </div>
                        <div className="form__group">
                            <input type="text" className="input" placeholder={' '}/>
                            <label htmlFor="" className="label">
                                Last name
                            </label>
                        </div>
                    </div>

                    <div className="form__row">
                        <div className="form__group">
                            <input type="email" className="input" placeholder={' '}/>
                            <label htmlFor="" className="label">
                                Email
                            </label>
                        </div>
                        <div className="form__group">
                            <input type="tel" className="input" placeholder={' '}/>
                            <label htmlFor="" className="label">
                                Phone
                            </label>
                        </div>
                    </div>

                    <div className="form__row">
                        <div className="form__group">
                            <textarea className='textArea' placeholder=' '></textarea>
                            <label htmlFor="" className='label'>
                                Message
                            </label>
                        </div>
                    </div>
                    <button type={"submit"} className='btn text-upper'>
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contacts;