import { useContext, useCallback, useState } from "react";
import { DoctorListContext } from '../DoctorListContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTimes,
} from '@fortawesome/free-solid-svg-icons';

const sorts = {
    distance: 'Khoảng cách',
    rating: 'Đánh giá'
};
const sortKey = Object.keys(sorts);

const languages = {
    vi: 'Tiếng việt',
    en: 'English',
    fr: 'French'
};
const languageCode = Object.keys(languages);

const DoctorListFilter = () => {
    const [isFilterSort, setIsFilterSort] = useState(false);
    const [isFilterLang, setIsFilterLang] = useState(false);

    const { request, getDoctors } = useContext(DoctorListContext);
    const { order, lang } = request;

    const handleChange = e => {
        const { name, value } = e.target;
        setIsFilterLang(false);
        setIsFilterSort(false);
        return getDoctors({
            [name]: value
        });
    }

    const handleClearLang = () => {
        setIsFilterLang(false);
        setIsFilterSort(false);
        return getDoctors({
            lang: ''
        });
    } 

    const textOrder = sortKey.includes(order) ? sorts[order] : '';
    const dropdownOrder = Object.entries(sorts).map((v, k) => {
        const [value, text] = v;
        return <label className='d-block' key={k}>
            <input onChange={handleChange} type="radio" value={value} name="order" checked={value === order ? true : false} />
            {text}
        </label>
    });

    const textLanguage = languageCode.includes(lang) ? <>{languages[lang]} <span className='close' onClick={handleClearLang}><FontAwesomeIcon icon={faTimes}/></span></> : <span>Ngôn ngữ</span>;
    const dropdownLanguage = Object.entries(languages).map((v, k) => {
        const [value, text] = v;
        return <label className='d-block' key={k}>
            <input onChange={handleChange} type="radio" value={value} name="lang" checked={value === lang ? true : false} />
            {text}
        </label>
    });

    return <aside className='section-filter d-flex mb-4'>
        <div className='filter-selectbox filter-order filter-change d-flex'>
            <span className='filter-selectbox__name'>Sắp xếp theo</span>
            <div className="filter-selectbox__content">
                <button className="filter-selectbox__content__btn" onClick={useCallback(() => setIsFilterSort(!isFilterSort))}>{textOrder}</button>
                <div className={`filter-selectbox__content__dropdown ${isFilterSort ? 'filter-selectbox__content__dropdown--active' : 'filter-selectbox__content__dropdown--not-active'}`}>
                    {dropdownOrder}
                </div>
            </div>
        </div>
        <div className='filter-selectbox filter-selectbox--lange filter-change d-flex'>
            <span className='filter-selectbox__name'>Lọc kết quả</span>
            <div className="filter-selectbox__content">
                <button className={`filter-selectbox__content__btn ${lang === '' ? 'filter-selectbox__content__btn--not-active' : 'filter-selectbox__content__btn--active'}`} onClick={useCallback(() => setIsFilterLang(!isFilterLang))}><span>{textLanguage}</span></button>
                <div className={`filter-selectbox__content__dropdown ${isFilterLang ? 'filter-selectbox__content__dropdown--active' : 'filter-selectbox__content__dropdown--not-active'}`}>
                    {dropdownLanguage}
                </div>
            </div>
        </div>
    </aside>
}
export default DoctorListFilter;