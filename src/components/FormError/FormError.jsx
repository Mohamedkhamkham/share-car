const FormError = ({ children }) => {
    return (
        <div className="alert alert-danger" role="alert">
            {children}
        </div>
    );
};

export default FormError;
