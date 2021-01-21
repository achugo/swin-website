import React from "react";

let dummyData = [1, 2, 3, 4, 5, 6, 7, 8];
const SoftwareOptions = ({data = dummyData}) => {
    const gutter = {
        margin: '20px 0'
    };
    return (
        <div>
            <section>
                <h3 className={'text-bold'}>Technical Specification</h3>
                <section>
                    <h4>Platforms</h4>
                    <section className='ui grid'>
                        {data.map((d) => (
                            <div className="four wide column">
                                <div className="inline field">
                                    <div className="ui checkbox">
                                        <input type="checkbox"/>
                                        <label>Mac OS</label>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </section>
                </section>

                <section>
                    <h4 style={{margin: '20px 0'}}>Deployment</h4>
                    <section className='ui grid'>
                        {data.slice(1, 4).map((d) => (
                            <div className="four wide column">
                                <div className="inline field">
                                    <div className="ui checkbox">
                                        <input type="checkbox"/>
                                        <label>CloudON</label>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </section>
                </section>

                <section>
                    <h4 style={{margin: '20px 0'}}>Business Size</h4>
                    <section className='ui grid'>
                        {data.slice(1, 4).map((d) => (
                            <div className="four wide column">
                                <div className="inline field">
                                    <div className="ui checkbox">
                                        <input type="checkbox"/>
                                        <label>small</label>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </section>
                </section>

                <section>
                    <h4 style={{margin: '20px 0'}}>Training Options</h4>
                    <section className='ui grid stacked'>
                        {data.slice(1, 7).map((d) => (
                            <div className="four wide column">
                                <div className="inline field">
                                    <div className="ui checkbox">
                                        <input type="checkbox"/>
                                        <label>Documentation</label>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </section>
                </section>

            </section>

            <section>
                <h3 className={'text-bold'} style={{marginTop: '80px'}}> Pricing</h3>
                <section>
                    <h4 style={gutter}>Pricing Model</h4>
                    <section className='ui grid'>
                        {data.slice(1, 3).map((d) => (
                            <div className="four wide column">
                                <div className="inline field">
                                    <div className="ui checkbox">
                                        <input type="checkbox"/>
                                        <label>Free Trial</label>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </section>
                </section>
                <section>
                    <h4 style={gutter}>Training Options</h4>
                    <section className='ui grid stacked'>
                        {data.slice(1, 2).map((d) => (
                            <div className="four wide column">
                                <p>$9.30/month</p>
                            </div>
                        ))}

                    </section>
                </section>

            </section>
        </div>


    )
};

export default SoftwareOptions
