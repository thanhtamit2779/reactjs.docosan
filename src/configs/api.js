import axios from 'axios';
import qs from 'qs';

export const API = {
    BASE_URL: 'http://localhost:4000'
}

// REQUEST API
export const makeRequestApi = ({
    url,
    method = 'GET',
    data = null,
    headers = null,
    type = null
}) => {
    if (!url) return false;

    let formatData = null;
    const axiosConfig = {
        url,
        method,
        data,
        // mode: 'no-cors',
        headers: {
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
            ...headers
        }
    }

    switch (method) {
        case 'POST':
        case 'PUT':
        case 'PATCH':
        case 'DELETE':
            if(data) formatData = qs.stringify(data);
            if (type === 'FormData') {
                formatData = new FormData();
                if (data) {
                    for (let key in data) {
                        const value = data[key];
                        formatData.append(key, value);
                    }
                }
                axiosConfig.headers = {
                    ...headers,
                    'Content-Type': 'multipart/form-data'
                }
            }
            break;

        default:
            const urlQueryObj = data ? queryStringBuilder(data) : '';
            axiosConfig.url = `${url}${urlQueryObj}`;
            break;
    }

    axiosConfig.data = formatData;

    try {
        return axios(axiosConfig);
    } catch (error) {
        console.log('axios error -> ', error);
        console.error(error);
    }
};

// Create query string
function queryStringBuilder(urlQueryObj) {
    return (typeof urlQueryObj === 'object' && Object.entries(urlQueryObj).length > 0) ?
        `?${Object.keys(urlQueryObj).map(key =>
  (Array.isArray(urlQueryObj[key])
      ? urlQueryObj[key].map((item, idx) => `${key}[${idx}]=${item}`).join('&')
      : `${key}=${urlQueryObj[key]}`)).join('&')}`
  : '';
}