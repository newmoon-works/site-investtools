const getLocaleParam = locale => locale === 'pt' ? '' : `?_locale=${locale}`;
export default getLocaleParam;