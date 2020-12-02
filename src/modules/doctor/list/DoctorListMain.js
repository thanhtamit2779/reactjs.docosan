import { useContext } from "react";
import { DoctorListContext } from '../DoctorListContainer';
import DoctorItem from './DoctorItem';

const DoctorListMain = () => {
    const { doctors = null } = useContext(DoctorListContext); 
    const doctorItem = doctors && doctors.length !== 0 && doctors.map((doctor, key) => <DoctorItem {...doctor} key={key} />);
    return <section className='doctor-main'>
        {doctorItem}
    </section>;
};
export default DoctorListMain;