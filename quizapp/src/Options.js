import React, { Component } from 'react'

export default class Options extends Component {
    render() {
        const { Options, selectedoption, onoptionchange } = this.props;
        return (
            <>
                <div className='options'>
                    {Options.map((option, index) => (
                        <div key={index} className='form-check'>
                            <input
                                type='radio' name='option' value={option} checked={selectedoption === option} onChange={onoptionchange} className='form-check-input' />
                            <label className='form-check-label'>{option}</label>
                        </div>
                    ))}                  
                </div>
            </>
        )
    }
}
