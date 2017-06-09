import React, {Component} from 'react';
import Data from '../../content/investment';
import ContactBlock from '../ContactBlock/ContactBlock';

class Investment extends Component {
    render() {
        return (
            <div className='Investment'>
                <div className='container'>
                    <div className='section-header'>
                        <h1>Seeking investors who believe healthcare needs more innovation.</h1>
                    </div>
                    <div className='text-block-grid-investment'>
                        <div className='text-block-milestone'>
                            <div className='header-text-milestone'>
                                <h6>Pre-Seed Round</h6>
                                <div className='milestone-date'>
                                    <p>Close Date: July 11, 2017</p>
                                </div>
                            </div>
                            <div className='milestone'>
                                <div className='milestone-title'>
                                    <p>Launched Rise Up tracking app on Android</p>
                                </div>
                            </div>
                            <div className='milestone'>
                                <div className='milestone-title'>
                                    <p>Forbes featured app as a technology innovating mental health</p>
                                </div>
                            </div>
                            <div className='header-text-milestone'>
                                <h6>Seed Round</h6>
                                <div className='milestone-date'>
                                    <p>Anticipated Close Date: October 11, 2017</p>
                                </div>

                            </div>
                            <div className='milestone'>
                                <div className='milestone-title'>
                                    <p>Doubled annual revenue to $86K through subscriptions to our treatment directory</p>
                                </div>
                            </div>
                            <div className='milestone'>
                                <div className='milestone-title'>
                                    <p>Sold $5k in subscriptions to Warriorfy pre-launch</p>
                                </div>
                            </div>
                            <div className='milestone'>
                                <div className='milestone-title'>
                                    <p>Launch web-based version of Warriorfy</p>
                                </div>
                            </div>
                            <div className='milestone'>
                                <div className='milestone-title'>
                                    <p>Launch mobile version of Warriorfy</p>
                                </div>
                            </div>
                            <div className='milestone'>
                                <div className='milestone-title'>
                                    <p>25,000 users ($33K MRR)</p>
                                </div>
                            </div>
                            <div className='milestone'>
                                <div className='milestone-title'>
                                    <p>Add 1:1 coaching as a service</p>
                                </div>
                            </div>
                            <div className='milestone'>
                                <div className='milestone-title'>
                                    <p>100,000 users ($130K MRR)</p>
                                </div>
                            </div>
                            <div className='milestone'>
                                <div className='milestone-title'>
                                    <p>1,000,000 users ($1.3M MRR)</p>
                                </div>
                            </div>
                        </div>
                        <div className='text-block-container'>
                            <div className='header-text-money'>
                                <h6>MONEY WELL SPENT:</h6>
                            </div>
                            <div className='text-blocks'>
                                <div className='text-block-row'>
                                    {Data.slice(0, 3).map((block, i) => (
                                        <div className='text-block'>
                                            <h6>{block.title}</h6>
                                            <p>{block.description}</p>
                                            <div className='text-block-list'>
                                                <div className='roles'>
                                                    {block.list.map((item, i) => (
                                                        <div className='role'>
                                                            <p className='role-title'>• {item}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className='text-block-row'>
                                    {Data.slice(3, 5).map(function(block, i) {
                                        var append;
                                        if (i == 1) {
                                            append = <ContactBlock/>;
                                        }
                                        return (
                                            <div>
                                                <div className='text-block'>
                                                    <h6>{block.title}</h6>
                                                    <p>{block.description}</p>
                                                    <div className='text-block-list'>
                                                        <div className='roles'>
                                                            {block.list.map((item, i) => (
                                                                <div className='role'>
                                                                    <p className='role-title'>• {item}</p>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                                {append}
                                            </div>
                                        );
                                    })
}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Investment;
