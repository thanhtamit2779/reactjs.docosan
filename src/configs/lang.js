import * as lodash from 'lodash';
import { language } from '../languages';

export const _lang = name => {
    let code = 'vi';

    const languageStorage = localStorage.getItem('language');
    if (languageStorage !== '') {
        const lang = JSON.parse(languageStorage);
        code = lang.code ?? 'vi';
    }
    return lodash.get(language[code], name, name);
}

export const languages = [
    {
        code: 'vi',
        name: 'Việt Nam',
        default: true
    },
    {
        code: 'en',
        name: 'Tiếng Anh'
    }
];

