import React, { useState } from "react";

const useForm = (initialValue) => {
    const [values, setValue] = useState(initialValue);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleChanges = e => {
        const { name, value } = e.target;
        setValue({ ...values, [name]: value });
      };
    const handleSubmit = e => {
        e.preventDefault();
        setShowSuccessMessage(true);
      };

   return [values, handleChanges, handleSubmit, showSuccessMessage];
};

export default useForm;


