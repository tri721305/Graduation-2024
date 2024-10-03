import React, { useState, useEffect } from "react";
import { Modal, Button, Typography, Form, Input, Checkbox } from "antd";
import { useForm, Controller } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormItem } from "react-hook-form-antd";

const schema = yup.object({
     username: yup.string().min(6, { message: "Required" }).max(20, { message: "Username should be less than 20 characters" }),
     password: yup.string().min(6, { message: "Password must be more than 6 characters" }),
});

const ModalLogin = ({ isShow, setIsShow }) => {
     const [isLoginForm, setIsLoginForm] = useState(false);

     const {
          register,
          handleSubmit,
          watch,
          control,
          reset,
          formState: { errors },
     } = useForm({
          defaultValues: { username: "", password: "", confirmpassword: "", email: "", firstname: "", lastname: "", phone: "" },
          resolver: yupResolver(
               yup.object({
                    username: yup
                         .string()
                         .min(6, "Username must be more than 6 characters")
                         .max(20, "Username should be less than 20 characters")
                         .required("Please input your username"),
                    password: yup.string().min(6, "Password must be more than 6 characters").required("Please input your password"),
               })
          ),
     });

     const onFinish = (values) => {
          console.log("Success:", values);
     };
     const onSubmit = (value) => {
          console.log("value", value);
          setFormValues(value);
     };
     useEffect(() => {
          reset({
               username: "aaaaaa",
               password: "1234567",
          });
     }, []);
     return (
          <Modal
               open={isShow}
               onCancel={() => {
                    setIsShow(false);
               }}
               centered
               closable={true}
               footer={false}
               // title="Log in to Wanderlog"
          >
               {isLoginForm ? (
                    <div className="login-container flex flex-col pt-[24px] justify-center items-center gap-[24px]">
                         <Typography.Text className="text-[1.5rem] font-bold">Log in to Graduation</Typography.Text>
                         <div className="flex flex-col gap-[6px]">
                              <Button
                                   className="min-w-[300px] !bg-[#3f52e3]  h-[56px] font-bold text-[1rem] rounded-[100px]"
                                   type="primary"
                              >
                                   Log in with Facebook
                              </Button>
                              <Button className="min-w-[300px] h-[56px] font-bold text-[1rem] rounded-[100px]">Log in with Google</Button>
                         </div>
                         <div className="flex items-center gap-2">
                              <div className="flex-1 w-[300px] h-[1px] bg-gray-400"></div>
                              <div>or</div>
                              <div className="flex-1 h-[1px] bg-slate-400"></div>
                         </div>
                         <Form
                              style={{ maxWidth: 600 }}
                              onFinish={handleSubmit((data) => {
                                   console.log("data", data);
                              })}
                              autoComplete="off"
                              className=""
                         >
                              <FormItem control={control} className="font-bold mb-[6px] " name="username">
                                   <Input placeholder="Email" allowClear className=" min-w-[300px] shadow-sm min-h-[56px] custom-input" />
                              </FormItem>
                              <FormItem className="font-bold" control={control} name="password">
                                   <Input.Password
                                        placeholder="Password"
                                        allowClear
                                        className="w-full shadow-sm min-h-[56px] custom-input"
                                   />
                              </FormItem>
                         </Form>
                         <Button type="text">Forgot password</Button>
                         <Button
                              onClick={handleSubmit((data) => {
                                   console.log(data);
                              })}
                              className="custom-btn-orange "
                              type="primary"
                         >
                              Login
                         </Button>
                         <Button
                              onClick={() => {
                                   setIsLoginForm(false);
                              }}
                              type="text"
                         >
                              Don't have an account yet ? Sign up
                         </Button>

                         <DevTool control={control} />
                    </div>
               ) : (
                    <div className="login-container flex flex-col pt-[24px] justify-center items-center gap-[24px]">
                         <Typography.Text className="text-[1.5rem] text-center font-bold">
                              Sign up to take your trip planning to the next level
                         </Typography.Text>
                         <div className="flex flex-col gap-[6px]">
                              <Button
                                   className="min-w-[300px] !bg-[#3f52e3]  h-[56px] font-bold text-[1rem] rounded-[100px]"
                                   type="primary"
                              >
                                   Sign up with Facebook
                              </Button>
                              <Button className="min-w-[300px] h-[56px] font-bold text-[1rem] rounded-[100px]">Sign up with Google</Button>
                         </div>
                         <div className="flex items-center gap-2">
                              <div className="flex-1 w-[300px] h-[1px] bg-gray-400"></div>
                              <div>or</div>
                              <div className="flex-1 h-[1px] bg-slate-400"></div>
                         </div>
                         <Form
                              style={{ maxWidth: 600 }}
                              onFinish={handleSubmit((data) => {
                                   console.log("data", data);
                              })}
                              autoComplete="off"
                              className=""
                         >
                              <div className="flex gap-[6px]">
                                   <FormItem control={control} className="font-bold flex-1 mb-[6px] " name="firstname">
                                        <Input
                                             placeholder="First name"
                                             allowClear
                                             className=" min-w-[100px] shadow-sm min-h-[56px] custom-input"
                                        />
                                   </FormItem>
                                   <FormItem control={control} className="font-bold flex-1 mb-[6px] " name="lastname">
                                        <Input
                                             placeholder="Last name"
                                             allowClear
                                             className=" min-w-[100px] shadow-sm min-h-[56px] custom-input"
                                        />
                                   </FormItem>
                              </div>
                              <FormItem control={control} className="font-bold mb-[6px] " name="username">
                                   <Input
                                        placeholder="Username"
                                        allowClear
                                        className=" min-w-[300px] shadow-sm min-h-[56px] custom-input"
                                   />
                              </FormItem>
                              <FormItem control={control} className="font-bold mb-[6px] " name="email">
                                   <Input placeholder="Email" allowClear className=" min-w-[300px] shadow-sm min-h-[56px] custom-input" />
                              </FormItem>

                              <FormItem className="font-bold mb-[6px]" control={control} name="password">
                                   <Input.Password
                                        placeholder="Password"
                                        allowClear
                                        className="w-full shadow-sm min-h-[56px] custom-input"
                                   />
                              </FormItem>
                              <FormItem className="font-bold" control={control} name="confirmpassword">
                                   <Input.Password
                                        placeholder="Confirm Password"
                                        allowClear
                                        className="w-full shadow-sm min-h-[56px] custom-input"
                                   />
                              </FormItem>
                         </Form>
                         <Button
                              onClick={handleSubmit((data) => {
                                   console.log(data);
                              })}
                              className="custom-btn-orange "
                              type="primary"
                         >
                              Sign up with an email
                         </Button>
                         <Button
                              onClick={() => {
                                   setIsLoginForm(true);
                              }}
                              type="text"
                         >
                              Already have an account ? Login{" "}
                         </Button>
                    </div>
               )}
          </Modal>
     );
};

export default ModalLogin;
