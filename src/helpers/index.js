export const ordering = (key, order = 'asc') => {
    return function (a, b) {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            return 0;
        }

        const varA = (typeof a[key] === 'string') ?
            a[key].toUpperCase() : a[key];
        const varB = (typeof b[key] === 'string') ?
            b[key].toUpperCase() : b[key];

        let comparison = 0;
        if (varA > varB) {
            comparison = 1;
        } else if (varA < varB) {
            comparison = -1;
        }
        return (
            (order === 'desc') ? (comparison * -1) : comparison
        );
    };
}

export const getDayOfWeek = (dayIndex = null, code = 'en') => {
    const day = parseInt(dayIndex);
    if (day > 6 || day < 0) return '';

    switch(code) {
        case 'en':
            switch (day) {  
                case 0: 
                    return 'Sunday';

                case 1:
                    return 'Monday';
                
                case 2:
                    return 'Tuesday';
                
                case 3:
                    return 'Wednesday';
                
                case 4:
                    return 'Thursday';
                
                case 5:
                    return 'Friday';
                
                case 6:
                    return 'Saturday';
            }

        default:
            switch (day) {
                case 0:
                    return 'Chủ nhật';

                case 1:
                    return 'Thứ hai';

                case 2:
                    return 'Thứ ba';

                case 3:
                    return 'Thứ tư';

                case 4:
                    return 'Thứ năm';

                case 5:
                    return 'Thứ sáu';

                case 6:
                    return 'Thứ bảy';

                default:
                    return '';
            }
    }
}