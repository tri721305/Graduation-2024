import React from "react";
import { MdLocalHotel } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { Modal, Typography, Button, Input } from "antd";
import { CiSearch } from "react-icons/ci";
const ModalLodging = ({ isShow, setIsShow }) => {
     return (
          <Modal
               centered
               footer={false}
               open={isShow}
               className="graduation-modal-container"
               onCancel={() => {
                    setIsShow(false);
               }}
          >
               <div className="p-[1rem]">
                    <div className="flex flex-col items-center gap-[1.5rem]">
                         <Typography.Text className="graduation-title">Add Hotels or lodging</Typography.Text>
                         <Button icon={<MdLocalHotel size={20} />} className="graduation-btn">
                              Book hotels
                         </Button>
                         <div className="flex items-center my-3 w-full">
                              <hr className="graduation-space" />
                              <div className="graduation-space-text">or</div>
                              <hr className="graduation-space" />
                         </div>
                         <Typography.Text>Already booked your accommodations</Typography.Text>
                         <Button icon={<AiOutlineMail />} className="graduation-btn">
                              Forward email
                         </Button>
                         <Input
                              prefix={<CiSearch size={20} />}
                              size="large"
                              className="graduation-input"
                              placeholder="Search by name or address"
                         ></Input>
                    </div>
               </div>
          </Modal>
     );
};

export default ModalLodging;
