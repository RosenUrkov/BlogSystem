const getResponse = (status, message, ...data) => {
    return {
        status,
        data,
        message,
    };
};

const sendSuccess = (msg, res, ...data) => {
    const response = getResponse(
        200,
        typeof msg === 'object' ? msg.message : msg,
        ...data
    );

    res.status(200).json(response);
};

const sendError = (err, res) => {
    const response = getResponse(
        400,
        typeof err === 'object' ? err.message : err
    );

    res.status(400).json(response);
};

module.exports = { sendSuccess, sendError };
