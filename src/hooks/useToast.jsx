import toast from "react-hot-toast";

const useToast = () => {

    const successToast = (toastMessage) => {
        toast.success(toastMessage, {
            style: {
                border: '1px solid #232323',
                borderRadius: '0',
                padding: '16px',
                color: '#232323',
                backgroundColor: '#fff10f'
            },
            iconTheme: {
                primary: '#61d345',
                secondary: '#fff',
            },
        });
    }

    const errorToast = (toastMessage) => {
        toast.error(toastMessage, {
            style: {
                border: '1px solid #232323',
                borderRadius: '0',
                padding: '16px',
                color: '#ffffff',
                backgroundColor: '#ff4b4b'
            },
            iconTheme: {
                primary: '#232323',
                secondary: '#ff4b4b',
            },
        });
    }

    return { successToast, errorToast };
};

export default useToast;
