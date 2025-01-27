import React from 'react'
import images from "../../assets";
import './Paymentpartner.css';

const Paymentpartner = () => {
    return (
        <>
            <div className='payment_container'>
                <div className='payment_subconatiner1'>
                    <div className='pay_img1'>
                        <img src={images.paymenticon1} alt='payment_img1' className='payment_img' />
                    </div>
                    <p className='pay_para1'>Responsible gaming</p>
                    <p className='pay_sub_para1'>Players must be minimum 18 yeers of age to play
                        rcal moncy rummy gomes This gome may be
                        habit-forming or financially risky Play responsibly.</p>
                    <div className='pay_horizonatal_style'>
                        <hr></hr>
                    </div>
                </div>

                <div className='payment_subconatiner3'>
                    <div className='pay_img1'>
                        <img src={images.paymenticon2} alt='payment_img2' className='payment_img' />
                    </div>
                    <p className='pay_para1'>Secured Payment Partner</p>
                    <div className='pay_second_col'>
                        <img src={images.paytm} alt='paytm' className='pay_paytm' />
                        <img src={images.visa} alt='visa' className='pay_visa' />
                        <img src={images.phonepay} alt='Ppay' className='pay_phone' />
                        <img src={images.googlepay} alt='gPay' className='pay_google' />
                    </div>
                    <div className='pay_horizonatal_style'>
                        <hr></hr>
                    </div>
                </div>


                <div className='payment_subconatiner2'>
                    <div className='pay_img1'>
                        <img src={images.paymenticon3} alt='payment_img2' className='payment_img' />
                    </div>
                    <p className='pay_para1'>100% Legal</p>
                    <p className='pay_sub_para1'>was declared to be a game of akill by the
                        Honble. Supreme Court of India in 1968 and is
                        100% logal to play for free or cash in most parts
                        of Indis.</p>
                </div>
            </div>
        </>
    )
}

export default Paymentpartner;