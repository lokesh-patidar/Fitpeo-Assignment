import { AiOutlineDollarCircle } from "react-icons/ai";
import { BsFileText } from "react-icons/bs";
import { SlHandbag } from "react-icons/sl";

export const dashData = [
     {
          id: 1,
          img: <AiOutlineDollarCircle size={'40%'} color="#077d0d"/>,
          title: 'Earning',
          value: '$198k',
          perMonth: '37.8% this month',
     },
     {
          id: 2,
          img: <BsFileText size={'40%'} color="#a507e3"/>,
          title: 'Orders',
          value: '$2.4k',
          perMonth: '2% this month',
     },
     {
          id: 3,
          img: <AiOutlineDollarCircle size={'40%'} color="#3946bd"/>,
          title: 'Balance',
          value: '$2.4k',
          perMonth: '2% this month',
     },
     {
          id: 4,
          img: <SlHandbag size={'40%'} color="#bd3944"/>,
          title: 'Total Sales',
          value: '$89k',
          perMonth: '11% this week',
     }
];