

import i18next from 'i18next';

// Start ActivitiesType Views
// import ActivitiesTypeEn from '../Views/Home/ActivitiesTypeView/ActivitiesTypeManagementView/I18n/en.json';
// import ActivitiesTypeAr from '../Views/Home/ActivitiesTypeView/ActivitiesTypeManagementView/I18n/ar.json';

// import ReportsEn from '../Views/Home/ReportsView/I18n/en.json';
// import ReportsAr from '../Views/Home/ReportsView/I18n/ar.json';

import policyAr from '../components/Footer/I18n/ar.json';
import policyEn from '../components/Footer/I18n/en.json';

// End  ActivitiesType Views





export function localizationInit() {
    i18next.init({
        interpolation: { escapeValue: false }, // React already does escaping
        fallbackLng: ['en', 'ar'],
        lng: 'en', // language to use
        resources: {
            en: {
                policy: policyEn
            },
            ar: {
                policy: policyAr,
            },
        },
    });

    if (localStorage.getItem('localization')) {
        //   moment.tz.setDefault(config.timeZone);
        i18next.changeLanguage(JSON.parse(localStorage.getItem('localization')).currentLanguage);
        // const isRtl = JSON.parse(localStorage.getItem('localization')).currentLanguage === 'ar';
        // if (isRtl) {
        //     // const direction =
        //     //     JSON.parse(localStorage.getItem('localization')).currentLanguage === 'ar' ? 'rtl' : '';
        //     document.body.setAttribute('class', direction);
        //     document.body.setAttribute('dir', direction);
        //     document.documentElement.lang = JSON.parse(
        //         localStorage.getItem('localization')
        //     ).currentLanguage;
        // }
    } else {
        localStorage.setItem('localization', JSON.stringify({ currentLanguage: 'en' }));
        i18next.changeLanguage('en');
    }
}

localizationInit();