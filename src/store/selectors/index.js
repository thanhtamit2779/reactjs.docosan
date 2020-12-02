export const ApiDataSelector = (state = null, type = null) => {
    if(!state || !type) return null;
    const api = state.api ?? null;
    const apiObj = api[type] || null;
    const result = apiObj?.data ?? null;
    return result;
}

export const ApiLoadingSelector = (state = null, type = null) => {
    if(!state || !type) return null;
    const api = state.api ?? null;
    const apiObj = api[type] || null;
    const result = apiObj?.isLoading ?? true;
    return result;
}

export const LanguageSelector = (state) => {
    if(!state) return null;

    const language = state.language ?? null;
    return language;
}

export const LanguageCodeSelector = (state) => {
    if(!state) return null;

    const language = state.language ?? null;
    return language.code ?? null;
}