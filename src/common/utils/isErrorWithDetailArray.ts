export function isErrorWithDetailArray(error: unknown): error is { errors: { detail: string }[] } {
    return (
        typeof error === 'object' &&
        error !== null &&
        'errors' in error &&
        Array.isArray(error.errors) &&
        error.errors.length > 0 &&
        typeof error.errors[0].detail === 'string'
    )
}