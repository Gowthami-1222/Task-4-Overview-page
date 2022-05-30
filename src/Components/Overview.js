import React, { useState } from 'react'
import "./Overview.css";
import arrow from '../Assets/arrow.png';
import Graphdata from './Graphdata';
export default function Overview() {
    const [duration, setDuration] = useState(1)
    return (
        <section className='overview'>
            <div className='container'>
                <h1 className='e_overview-title'>Overview</h1>
                <div className='row'>
                    <div class="col-sm-2 current-value">Current value
                        <div className='amount'>₹ 22,342</div>
                    </div>

                    <div class="col-sm-9 total-value">
                        <div className='row'>
                            <div className='col-sm-2 e-invested'>
                                Amount invested
                                <div className='num1'>₹ 18,599</div>
                            </div>
                            <div className='col-sm-4 e-total'>
                                Total returns
                                <div className='num2'>₹ 3,743</div>
                            </div>
                            <div className='col-sm-3 e-xirr'>
                                XIRR(%)
                                <div className='num3'>25.08%</div>
                            </div>
                            <div className='col-sm-3'>
                                <img className='e-arrow' src={arrow} alt="arrow" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row pf-row'>
                    <div class="col-sm-4 summery">Portfolio summary
                        <div className='row'>
                            <div className='col-sm-6'>
                                <div className='e-score'>Your risk score</div>
                                <div className='e-amount-1'>7.0 / 10</div>
                            </div>
                            <div className='col-sm-6'>
                                <div className='e-last'>Last rebalanced on</div>
                                <div className='e-date'>15 Jun 2020</div>
                            </div>
                        </div>


                        <div className='row'>
                            <div className='col-sm-6'>
                                <div className='e-next'>Next rebalance on</div>
                                <div className='e-date-year'>30 Dec 2020</div>
                            </div>
                            <div className='col-sm-6'>
                                <div className='e-sip'>SIP status</div>
                                <div className='e-month'>Every month - 25th</div>
                            </div>
                        </div>
                        <div>
                            <button type="button" class="e-button">Invest more</button>
                        </div>
                    </div>
                    <div class="col-sm-7 performance">Portfolio performance
                    <div className='row'>
                        <div className='col-sm-2'>
                            <button className='btn1' onClick={()=> setDuration(1) }><span>1M</span></button>
                        </div>
                        <div className='col-sm-2'>
                            <button className='btn2'onClick={()=> setDuration(3) }><span>3M</span></button>
                        </div>
                        <div className='col-sm-2'>
                            <button className='btn3'onClick={()=> setDuration(6) }><span>6M</span></button>
                        </div>
                        <div className='col-sm-2'>
                            <button className='btn4'>YTD</button>
                        </div>
                        <div className='col-sm-2'>
                            <button className='btn5' onClick={()=> setDuration(12) }><span>1Y</span></button>
                        </div>
                        <div className='col-sm-2'>
                            <button className='btn6'>
                                <span>Since 1st Deposit</span>
                            </button>
                        </div>
                        </div>
                        <div className='row'>
                            <Graphdata duration={duration} />
                        </div>
                        

                    </div>
                </div>
            </div>
        </section>
    )
}
