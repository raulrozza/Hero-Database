import { AxiosError } from 'axios';

type IErrorResponseDetails = unknown;

interface GetAxiosMessage {
    message: string;
}

const isAxiosError = (error: Error | AxiosError): error is AxiosError =>
    (error as AxiosError).isAxiosError;

const getAxiosErrorMessage = (
    error: AxiosError<IErrorResponseDetails>,
): GetAxiosMessage => {
    const status = error.response?.status;
    const details = error.response?.data;

    if (status === 404) return { message: 'Resource not found' };

    if (details) return { message: JSON.stringify(details) };

    return { message: error.message };

    // #TODO Map api errors
    /*  if (!details) return { message: error.message, forbidden };
  const errorMessage = apiCodes[details.errorCode];
  if (!errorMessage) return { message: error.message, forbidden };
  return { message: errorMessage, forbidden }; */
};

export default class HTTPError extends Error {
    constructor(error: Error | AxiosError) {
        if (isAxiosError(error)) {
            const { message } = getAxiosErrorMessage(error);

            super(message);

            return;
        }

        super(error.message);
    }
}
