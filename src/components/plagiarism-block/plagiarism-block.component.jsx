import React from 'react';

const PlagiarismBlock = () => {
    return (
        <div className='plagiarism-block'>
            <div className='wrapper'>
                <div className='head'>
                    <p className='text'>Available balance: 0 characters (Pro Plan, more accurate results)</p>
                    <p className='text'>Free checks available today: 0 (up to 2000 symbols)</p>
                </div>
                <div className='form'>
                    <p className='length'>
                        Text length: <span>0</span> (without spaces: <span>0</span>)
                    </p>
                    <textarea className='textarea' placeholder='Your text'></textarea>
                    <div className='plan'>
                        <div className='option active'>Free</div>
                        <div className='option'>Pro</div>
                    </div>
                    <button className='check'>CHECK FOR PLAGIARISM</button>
                </div>
            </div>
            <div className='cards'>
                <div className='card orange'>
                    <div className='header'>
                        <p>Package 200К</p>
                    </div>
                    <div className='text'>
                        <p>$5.00</p>
                        <p>200 000 characters</p>
                        <p>$0,025 per 1 000 characters</p>
                    </div>
                    <a className='button'>Buy</a>
                </div>
                <div className='card pumpkin'>
                    <div className='header'>
                        <p>Package 200К</p>
                    </div>
                    <div className='text'>
                        <p>$5.00</p>
                        <p>200 000 characters</p>
                        <p>$0,025 per 1 000 characters</p>
                    </div>
                    <a className='button'>Buy</a>
                </div>
                <div className='card blue'>
                    <div className='header'>
                        <p>Package 200К</p>
                    </div>
                    <div className='text'>
                        <p>$5.00</p>
                        <p>200 000 characters</p>
                        <p>$0,025 per 1 000 characters</p>
                    </div>
                    <a className='button'>Buy</a>
                </div>
                <div className='card purple'>
                    <div className='header'>
                        <p>Package 200К</p>
                    </div>
                    <div className='text'>
                        <p>$5.00</p>
                        <p>200 000 characters</p>
                        <p>$0,025 per 1 000 characters</p>
                    </div>
                    <a className='button'>Buy</a>
                </div>
            </div>
        </div>
    )
}

export default PlagiarismBlock;