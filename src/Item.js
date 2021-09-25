import './Item.css';

const Item = (props) => {
    return (
        <div className='header'>
            <h2>{props.item.name.common}</h2>
            <span>{`(${props.item.name.official})`}</span>
            <section>
                <div className='entries'>
                    <span className='label'>Capital : </span>
                    <span className='data'>{props.item.capital[0]}</span>
                </div>
                <div className='entries'>
                    <span className='flag'><img src={props.item.flags[1]} alt='FLAG' className='img'/></span>
                </div>
                <div className='entries'>
                    <span className='label'>Region : </span>
                    <span className='data'>{props.item.region}</span>
                </div>
                <div className='entries'>
                    <span className='label'>Sub-Region : </span>
                    <span className='data'>{props.item.subregion}</span>
                </div>
                <div className='entries'>
                    <span className='label'>Borders : </span>
                    <span className='data'>{
                        props.item.borders ?
                            props.item.borders.map((border) => { return (<span key={border} className='border-span'>{border + ' '}</span>) }) :
                            'Data not available'
                    }</span>
                </div>
                <div className='entries'>
                    <span className='label'>Language : </span>
                    <span className='data'>{
                        props.item.languages ?
                            <ul>{Object.entries(props.item.languages).map(lang => <li key={lang[1]}>{lang[1]}</li>)}</ul> :
                            'Data not available'
                    }</span>
                </div>
            </section>
        </div>
    )
}

export default Item;