import { Avatar, Typography } from "antd";
import React from "react";

const RecommendCard = (props) => {
     return (
          <div className="recommend-card w-[200px] cursor-pointer p-[8px] flex gap-2 flex-col">
               <img className="w-full rounded-lg" src={props.image} alt="card" />
               <Typography.Text strong>{props.title}</Typography.Text>
               <Typography.Text>{props.description}</Typography.Text>
               <div className="flex items-center gap-2">
                    <Avatar src={props.userImage} alt="userImage" />
                    <Typography.Text>{props.userName}</Typography.Text>
               </div>
          </div>
     );
};

export default RecommendCard;
