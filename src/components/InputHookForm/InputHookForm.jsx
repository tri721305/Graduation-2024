import React from "react";
import { Controller, useForm } from "react-hook-form";

const InputHookForm = () => {
     const {
          handleSubmit,
          formState: { errors },
          register,
     } = useForm();
     const onSubmit = (data) => {
          console.log("data", data);
     };
     return (
          <form onSubmit={handleSubmit(onSubmit)}>
               <Controller name="username" control={control} />
          </form>
     );
};

export default InputHookForm;
