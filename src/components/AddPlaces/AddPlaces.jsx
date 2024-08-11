import React, { useState } from "react";
import { Button, Modal, Typography, Input, Select } from "antd";
import CustomInput from "../CustomInput/CustomInput";
import "./style.scss";
const { Option } = Select;
const AddPlaces = ({ isShow, setIsShow }) => {
     const [data, setData] = useState();
     return (
          <Modal
               open={isShow}
               onCancel={() => {
                    setIsShow(false);
               }}
               centered
               className="graduation-modal-container"
          >
               <CustomInput
                    title="NAME"
                    value={data}
                    // key="name"
                    onChange={(e) => {
                         setData(e.target.value);
                    }}
               />
               <div className="flex flex-col">
                    <Typography.Text className="custom-input-title">TYPE</Typography.Text>
                    <Select showSearch className="custom-select rounded-lg"></Select>
               </div>
               <div className="flex flex-col">
                    <Typography.Text className="custom-input-title">DESCRIPTION</Typography.Text>
                    <Select showSearch className="custom-select rounded-lg"></Select>
               </div>
               <div className="flex flex-col">
                    <Typography.Text className="custom-input-title">ADDRESS</Typography.Text>
                    <Select showSearch className="custom-select rounded-lg"></Select>
               </div>
               <div className="flex flex-col">
                    <Typography.Text className="custom-input-title">PROVINCE</Typography.Text>
                    <Select showSearch className="custom-select rounded-lg"></Select>
               </div>
               <div className="flex flex-col">
                    <Typography.Text className="custom-input-title">DISTRICT</Typography.Text>
                    <Select showSearch className="custom-select rounded-lg"></Select>
               </div>
               <div className="flex flex-col">
                    <Typography.Text className="custom-input-title">WARD</Typography.Text>
                    <Select showSearch className="custom-select rounded-lg"></Select>
               </div>
               <div className="flex justify-between gap-2">
                    <CustomInput title="Longitude" />
                    <CustomInput title="Latitude" />
               </div>
          </Modal>
     );
};

export default AddPlaces;
