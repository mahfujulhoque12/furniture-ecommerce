import OfficeChair from '@/components/OfficeChair';
import OfficeSofa from '@/components/OfficeSofa';
import OfficeFileCabinet from '@/components/OfficeFileCabinet';
import OfficeWorkStation from '@/components/OfficeWorkStation';
import OfficeTable from '@/components/OfficeTable';
import OfficeBookShelf from '@/components/OfficeBookShelf';


const page = () =>{
    return (
        <div>
            <OfficeChair/>
            <OfficeSofa/>
            <OfficeFileCabinet/>
            <OfficeWorkStation/>
            <OfficeTable/>
            <OfficeBookShelf/>
        </div>
    )
}
export default page;