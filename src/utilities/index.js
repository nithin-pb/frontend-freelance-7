function apiErrorResponse(e, key = 'message') {
    try {
        if (typeof e === 'string') {
            return {
                type: 'RunTimeException',
                error: e,
            }
        }

        if (e.request.response) {
            const response = JSON.parse(e.request.response)
            return {
                type: response.code || 'ERROR',
                error: response[key],
            }
        }
        return {
            type: 'ERROR',
            error: e.message,
        }
    } catch (expErr) {
        return {
            type: 'ERROR',
            error: e.message,
        }
    }
}

export { apiErrorResponse }
