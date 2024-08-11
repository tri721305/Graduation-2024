import React from "react";
import { Typography, Input } from "antd";
import "./style.scss";
const CustomInput = (props) => {
     return (
          <div className="custom-input-container">
               <Typography.Text className="custom-input-title">{props.title}</Typography.Text>
               <Input size="large" className="custom-input rounded-lg !bg-[#e9ecef]" {...props} />
          </div>
     );
};

export default CustomInput;
