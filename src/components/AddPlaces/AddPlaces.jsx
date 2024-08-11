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
               <div className="">
                    <Typography.Text>PROVINCE</Typography.Text>
                    <Select className="custom-select rounded-lg"></Select>
               </div>
               <CustomInput title="DISTRICT" />
               <CustomInput title="WARD" />
               <CustomInput title="TYPE" />
          </Modal>
     );
};

export default AddPlaces;
