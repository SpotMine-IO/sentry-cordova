class SentryIonicErrorHandler extends IonicErrorHandler {
  handleError(error) {
    super.handleError(error);
    try {
      const originalError = error.originalError || error || {};
      captureException(originalError.stack ? originalError : new Error(originalError.message || originalError));
    } catch (e) {
      console.error(e);
    }
  }
}
