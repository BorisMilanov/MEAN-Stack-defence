export const CreateError = (status,messsage) => {
    const err = new Error();
    err.status = status,
    err.message = messsage;
    return err;
}