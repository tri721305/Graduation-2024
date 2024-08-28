import React, { useState } from "react";
import { DatePicker, Button, Input, Select, Typography, Popover } from "antd";
import { MdLocalHotel } from "react-icons/md";
import { HiUsers } from "react-icons/hi2";
import { FaMinus, FaPlus, FaUser, FaSearch } from "react-icons/fa";
import { FaChildren } from "react-icons/fa6";
import "./style.scss";
const { RangePicker } = DatePicker;
const { Option } = Select;
const SearchBar = () => {
     const [open, setOpen] = useState(false);

     const handleOpenChange = (newOpen) => {
          if (newOpen !== open) setOpen(newOpen);
     };
     return (
          <div className="search-bar-custom  relative m-4 mr-8 flex gap-2 p-4 rounded-lg bg-white shadow-lg">
               <div className="flex flex-col flex-1 gap-1">
                    <Typography.Text strong>Where</Typography.Text>
                    <Input className="flex-1 w-full shadow-sm min-h-[40px] custom-input" placeholder="Search destinations" />
               </div>
               <div className="flex flex-col flex-1 gap-1">
                    <Typography.Text strong>When</Typography.Text>
                    <RangePicker className="graduation-datepicker-range flex-1 w-full shadow-sm min-h-[40px]" />
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
               <Button className="custom-btn-orange" icon={<FaSearch />}>
                    Search
               </Button>
          </div>
     );
};

export default SearchBar;
