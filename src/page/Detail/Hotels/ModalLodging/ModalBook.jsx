import React, { useState } from "react";
import { Modal, Button, Input, Typography, DatePicker, Popover } from "antd";
import { MdLocalHotel } from "react-icons/md";
import { FaMinus, FaPlus, FaUser, FaSearch } from "react-icons/fa";
import { HiUsers } from "react-icons/hi2";
import { FaChildren } from "react-icons/fa6";

const { RangePicker } = DatePicker;
const ModalBook = ({ isShow, setIsShow }) => {
     const [open, setOpen] = useState(false);

     const handleOpenChange = (newOpen) => {
          if (newOpen !== open) setOpen(newOpen);
     };

     return (
          <Modal
               open={isShow}
               onCancel={() => {
                    setIsShow(false);
               }}
               centered
               title="Booking Hotel"
               closable
               footer={false}
          >
               <div>
                    <Typography.Text className="hotels-title">Where</Typography.Text>
                    <Input size="large" className="custom-input rounded-lg !bg-[#e9ecef]" value="Hồ Chí Minh city" />
               </div>
               <div>
                    <div>
                         <Typography.Text className="hotels-title">When</Typography.Text>
                         {/* <Input size="large" className="custom-input rounded-lg !bg-[#e9ecef]" value="Hồ Chí Minh city" /> */}
                         <RangePicker />
                    </div>
                    <div className="flex w-fit flex-col gap-1">
                         <Typography.Text strong>Rooms, guests</Typography.Text>
                         <Popover
                              content={
                                   <div className="">
                                        <Typography.Text strong>Rooms and guests</Typography.Text>
                                        <div className="flex flex-col gap-1 py-2">
                                             <div className="flex gap-2 items-center">
                                                  <MdLocalHotel size={24} />
                                                  <div className="flex flex-1 justify-end gap-1.5 items-center">
                                                       <Typography.Text>Rooms</Typography.Text>
                                                       <Button
                                                            className="flex items-center justify-center"
                                                            shape="circle"
                                                            icon={<FaMinus />}
                                                       ></Button>
                                                       <Input
                                                            value={5}
                                                            className="custom-input text-center w-full shadow-sm min-h-[40px] custom-input max-w-[60px] rounded-[6px]"
                                                       />
                                                       <Button
                                                            className="flex items-center justify-center"
                                                            shape="circle"
                                                            icon={<FaPlus />}
                                                       ></Button>
                                                  </div>
                                             </div>
                                             {/* ==================================== Adults =================== */}
                                             <div className="flex gap-2 items-center">
                                                  <FaUser size={24} />
                                                  <div className="flex flex-1 justify-end gap-1.5 items-center">
                                                       <Typography.Text>Adults</Typography.Text>
                                                       <Button
                                                            className="flex items-center justify-center"
                                                            shape="circle"
                                                            icon={<FaMinus />}
                                                       ></Button>
                                                       <Input
                                                            value={5}
                                                            className="custom-input text-center w-full shadow-sm min-h-[40px] custom-input max-w-[60px] rounded-[6px]"
                                                       />
                                                       <Button
                                                            className="flex items-center justify-center"
                                                            shape="circle"
                                                            icon={<FaPlus />}
                                                       ></Button>
                                                  </div>
                                             </div>
                                             {/* ==================================== Children =================== */}
                                             <div className="flex gap-2 items-center">
                                                  <FaChildren size={24} />
                                                  <div className="flex flex-1 justify-end gap-1.5 items-center">
                                                       <Typography.Text>Children</Typography.Text>
                                                       <Button
                                                            className="flex items-center justify-center"
                                                            shape="circle"
                                                            icon={<FaMinus />}
                                                       ></Button>
                                                       <Input
                                                            value={5}
                                                            className="custom-input text-center w-full shadow-sm min-h-[40px] custom-input max-w-[60px] rounded-[6px]"
                                                       />
                                                       <Button
                                                            className="flex items-center justify-center"
                                                            shape="circle"
                                                            icon={<FaPlus />}
                                                       ></Button>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="flex gap-1 pt-2 justify-end items-center">
                                             <Button className="rounded-[12px]" size="medium" type="text">
                                                  Reset
                                             </Button>
                                             <Button type="primary" className="rounded-[12px] custom-btn-orange" size="medium">
                                                  Save
                                             </Button>
                                        </div>
                                   </div>
                              }
                              trigger="click"
                              open={open}
                              onOpenChange={handleOpenChange}
                         >
                              <div className="custom-hotel-number shadow-sm ">
                                   <MdLocalHotel />
                                   <Typography.Text>5</Typography.Text>
                                   <HiUsers />
                                   <Typography.Text>2</Typography.Text>
                              </div>
                         </Popover>
                    </div>
               </div>
               <Button className="custom-btn-orange">Search</Button>
          </Modal>
     );
};

export default ModalBook;
