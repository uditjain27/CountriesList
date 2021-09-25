import { Fragment } from 'react/cjs/react.production.min';
import './Loader.css';

const LoadingSpinner = () => {
    return (
        <Fragment>

            <div className='loader' >
                <span style={{'--i':1}}></span>
                <span style={{'--i':2}}></span>
                <span style={{'--i':3}}></span>
                <span style={{'--i':4}}></span>
                <span style={{'--i':5}}></span>
                <span style={{'--i':6}}></span>
                <span style={{'--i':7}}></span>
            </div>
            <svg>
                <filter id='liquid'>
                    <feGaussianBlur in='SourceGraphic' stdDeviation='10' />
                    <feColorMatrix values='
                1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 20 -10' />
                </filter>
            </svg>
        </Fragment>

    )
}

export default LoadingSpinner;