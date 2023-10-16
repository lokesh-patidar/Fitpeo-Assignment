import { Box, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { dashData, tableData } from "../Data/DashboardData";
import { BiDownArrowAlt } from "react-icons/bi";
import { BsArrowUpShort } from "react-icons/bs";
import BarChart from "../Components/DashboardComponent/BarChart";
import PolarAreaChart from "../Components/DashboardComponent/DonutChart";


const Dashboard = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    console.log({ tableData });

    return (
        <Box
            width={{ base: '100%', md: '75%', lg: '80%' }}
            display='flex'
            flexDir='column'
            p={3}
        >
            <Navbar />
            <Box display='grid' gridTemplateColumns={{ base: 'repeat(1,1fr)', sm: 'repeat(2,1fr)', md: 'repeat(3,1fr)', lg: 'repeat(4,1fr)' }}>
                {
                    dashData?.map((el) => {
                        return <DashBordDataCard key={el.id} {...el} />
                    })
                }
            </Box>
            <Box w='full' mt={3} display='flex' flexDir={{ base: 'column-reverse', lg: 'row' }}>
                <Box w={{ base: "full", lg: '60%' }}>
                    <BarChart />
                </Box>
                <Box w={{ base: "full", lg: '40%' }}>
                    <PolarAreaChart />
                </Box>
            </Box>
            <Box>
                {
                    tableData?.map((el) => {
                        return <TableDataCard key={el} {...el} />
                    })
                }
            </Box>
        </Box>
    );
};

export { Dashboard };



const DashBordDataCard = ({ img, title, value }) => {
    return (
        <Box display='flex' justifyContent='center' m={2} bg='white' borderRadius='10px' p={3} pt={5} pb={5}>
            <Box
                borderRadius={'full'}
                bg={
                    (title === 'Earning' && '#e6fce6') ||
                    (title === 'Orders' && '#f5d9fc') ||
                    (title === 'Balance' && '#c3ecfa') ||
                    (title === 'Total Sales' && '#fc95c5')
                }>
                <Box className="circle">{img}</Box>
            </Box>
            <Box w='55%' display='flex' flexDir='column' justifyContent='center' alignItems='flex-start' pl={2}>
                <Text textAlign='left' color='gray' className="topFont">{title}</Text>
                <Text textAlign='left' color='black' fontSize={{ base: '150%', sm: '120%', md: '130%', lg: '130%', xl: '150%' }} fontWeight='bold'>{value}</Text>
                <Text textAlign='left' display='flex' w='100%' alignItems='center' className="fontForLast">
                    {title === 'Earning' ? <span style={{ color: 'green', display: 'flex', alignItems: 'center', fontWeight: '500' }}><BiDownArrowAlt />37.8%</span> : ''}
                    {title === 'Orders' ? <span style={{ color: 'red', display: 'flex', alignItems: 'center', fontWeight: '500' }}><BsArrowUpShort />2%</span> : ''}
                    {title === 'Balance' ? <span style={{ color: 'red', display: 'flex', alignItems: 'center', fontWeight: '500' }}><BsArrowUpShort />2%</span> : ''}
                    {title === 'Total Sales' ? <span style={{ color: 'green', display: 'flex', alignItems: 'center', fontWeight: '500' }}><BiDownArrowAlt />11%</span> : ''}
                    {<span style={{ paddingLeft: '2%' }}>this month</span>}
                </Text>
            </Box>
        </Box>
    );
};

const TableDataCard = ({ id, img, title, description, stock, price, totalSales }) => {
    return (
        <Box></Box>
    );
};
