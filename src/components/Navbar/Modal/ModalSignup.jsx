import React from "react";
import { Modal, Button, Typography, Input } from "antd";
import { useForm } from "react-hook-form";
const ModalSignup = ({ isShow, setIsShow }) => {
     const {
          register,
          handleSubmit,
          watch,
          formState: { errors },
     } = useForm;

     const onSubmit = (data) => console.log(data);
     console.log(watch("example"));
     return (
          <Modal
               open={isShow}
               onCancel={() => {
                    setIsShow(false);
               }}
               centered
               closable={false}
               className="modal-signup-container"
               footer={
                    <div className="flex gap-1 justify-end">
                         <Button className="custom-btn-text">Cancel</Button>
                         <Button className="custom-btn-orange">Sign up</Button>
                    </div>
               }
          >
               <div className="flex flex-col gap-4">
                    <Typography.Text className="text-[24px] text-center" strong>
                         Sign up to take your trip planning to the next level
                    </Typography.Text>
                    <div>
                         <div className="flex gap-2">
                              <div>
                                   <Typography.Text className="title-input-text">First Name</Typography.Text>
                                   <Input size="large" className="custom-input rounded-lg" />
                              </div>
                              <div>
                                   <Typography.Text className="title-input-text">Last Name</Typography.Text>
                                   <Input size="large" className="custom-input rounded-lg" />
                              </div>
                         </div>
                         <div>
                              <Typography.Text className="title-input-text">Phone</Typography.Text>
                              <Input size="large" className="custom-input rounded-lg" />
                         </div>
                         <div>
                              <Typography.Text className="title-input-text">Email</Typography.Text>
                              <Input size="large" className="custom-input rounded-lg" />
                         </div>
                         <div>
                              <Typography.Text className="title-input-text">Password</Typography.Text>
                              <Input size="large" className="custom-input rounded-lg" />
                         </div>
                         <div>
                              <Typography.Text className="title-input-text">Confirm Password</Typography.Text>
                              <Input size="large" className="custom-input rounded-lg" />
                         </div>
                    </div>
                    <div>
                         <Typography.Text className="">
                              Already have an account? <span className="font-bold">Log in</span>
                         </Typography.Text>
                    </div>
               </div>
          </Modal>
     );
};

export default ModalSignup;
