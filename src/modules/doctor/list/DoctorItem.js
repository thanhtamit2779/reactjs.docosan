import { Image } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faStar,
} from '@fortawesome/free-solid-svg-icons';

const DoctorItem = (props) => {
    const {
        display_name = null,
        avatar = null,
        language,
        clinic_name,
        clinic_address,
        rating,
        distance,
        specialty = null
    } = props;

    const ratingCeil = Math.ceil((rating));
    
    let start = '';
    switch(ratingCeil) {
        case 1:
            start = <><FontAwesomeIcon icon={faStar} /></>;
            break;
        
        case 2:
            start = <>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
            </>;
            break;
        
        case 3:
            start = <>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
            </>;
            break;
        
        case 4:
            start = <>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
            </>;
            break;
        
        case 5:
            start = <>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
            </>;
            break;
    }

    const position = (!specialty || specialty.length === 0) ? '' : specialty.map((v, k) => {
        const { name } = v;
        return <span key={k}>{ name }</span>;
    });

    return <article className='doctor-item d-flex'>
                <figure className='p-0 m-0'>
                    <Image rounded src={avatar} className='doctor-item__avatar img-fluid' />
                </figure>
                <div xs={12} md={8} lg={10}>
                    <p className='doctor-item__fullname'><strong>{display_name}</strong></p>
                    <p className='doctor-item__rating'>{start}</p>
                    <p className='doctor-item__position'>{position}</p>
                    <p className='doctor-item__branch-name'>{clinic_name}</p>
                    <p className='doctor-item__branch-address'>{clinic_address}</p>
                </div>
    </article>
}
export default DoctorItem;