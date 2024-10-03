import React from "react";
import { Typography, Button } from "antd";
const Card = (props) => {
     return (
          <div className="card-booking-container">
               <div className="booking-image">
                    <img src={props?.image} alt="img" className="booking-img" />
               </div>
               <div className="booking-content">
                    <div className="booking-content-left">
                         <Typography.Text className="graduation-title">{props?.name}</Typography.Text>
                         <Typography.Text>{props?.detail}</Typography.Text>
                    </div>
                    <div className="booking-content-right">
                         <div className="star">10.0*</div>
                         <div className="number-user">
                              <Typography.Text>Few reviews</Typography.Text>
                              <Typography.Text>(12)</Typography.Text>
                         </div>
                    </div>
               </div>
               <div className="booking-cost">
                    <Typography.Text className="hotel-cost">
                         <span className="underline">đ</span>
                         {props?.cost}
                    </Typography.Text>
                    <Button className="custom-btn-orange">View deal</Button>
                    <Typography.Text className="graduation-subtitle">{props?.coop}</Typography.Text>
               </div>
          </div>
     );
};

export default Card;
