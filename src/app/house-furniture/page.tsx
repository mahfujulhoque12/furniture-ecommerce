import HouseChair from '@/components/HouseChair';
import HouseTable from '@/components/HouseTable';
import HouseCabinet from '@/components/HouseCabinet';
import HouseSofa from '@/components/HouseSofa';
import HouseWaredrobe from '@/components/HouseWaredrobe';
import HouseCorner from '@/components/HouseCorner';




const page = () =>{
    return (
        <div>
            <HouseChair/>
            <HouseTable/>
            <HouseCabinet/>
            <HouseSofa/>
            <HouseWaredrobe/>
            <HouseCorner/>
        </div>
    )
}

export default page;
