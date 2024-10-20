import hcm1 from "../assets/images/hcm1.jpg";
import hcm2 from "../assets/images/hcm2.jpg";
import hcm3 from "../assets/images/hcm3.jpg";

export const dataDetail = {
     name: "Hồ Chí Minh city",
     tags: ["Verified guide", "HoChiMinh guide"],
     userName: "Minh Trí",
     createdAt: "xxx",
     views: 12322,
     liked: 208,
     description:
          "Thành phố Hồ Chí Minh không còn là cái tên xa lạ đối với tất cả mọi người nữa, đây là vùng đất có rất nhiều đặc điểm nổi bật mà nhiều nơi không có. Và để bạn có thêm nhiều thông tin về vùng đất này thì bài viết dưới đây chúng tôi sẽ giới thiệu về thành phố Hồ Chí Minh để bạn cùng tìm hiểu.Nội dung bài viết",

     places: [
          {
               conveninceName: "Neighborhoods",
               listPlaces: [
                    {
                         name: "Notting Hill",
                         tags: ["Town square"],
                         description:
                              "Hősök tere, also known as Heroes Square, is a significant part of Budapest's City Park. This historic public park offers locals and visitors the opportunity to connect with nature in the heart of the city. The park features attractions like Szechenyi Bath and a stunning skating rink, making it a popular destination for people of all ages.",
                         image: hcm1,
                    },
                    {
                         name: "House of Terror",
                         tags: ["Museum", "Specialty Museums"],
                         description:
                              "The House of Terror is a museum in Hungary documenting the effect of Nazi and Soviet regimes on Hungary and the victims. It includes a permanent exhibit about crimes and atrocities committed by both regimes.",
                         image: hcm2,
                    },
                    {
                         name: "Hungarian Parliament Building",
                         tags: ["Government office", "Sights & Landmarks"],
                         description:
                              "The Hungarian Parliament Building is an iconic landmark in Budapest and one of the oldest in Europe. It is home to the National Assembly of Hungary, and is one of the largest buildings in the whole of the country. The building is decorated with lavish Gothic Revival-style decorations and features a spectacular dome.",
                         image: hcm3,
                    },
               ],
          },
     ],
};
