import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import {
    REQUEST,
    getDoctors as getActionDoctors
} from './DoctorAction';
import {
    ApiDataSelector
} from '../../store/selectors';
import DoctorListFilter from './list/DoctorListFilter';
import DoctorListMain from './list/DoctorListMain';
import Logo from '../../assets/images/docosan-logo.jpg';

const DoctorListContainer = (props) => {
    const dispatch = useDispatch();

    const [request, setRequest] = useState({
        lang: '',
        order: 'distance',
        page: 1,
        limit: 1000,
        fakeDb: true
    });

    const getDoctors = (params = undefined) => {
        params && setRequest({
            ...request,
            ...params
        });

        return dispatch(getActionDoctors(request));
    }

    useEffect(() => getDoctors(), [request]);

    const doctors = useSelector(state => ApiDataSelector(state, REQUEST.GET_DOCTORS));

    return <DoctorListContext.Provider
                value={{
                    request,
                    doctors,
                    getDoctors
                }}>
                    <Container className='mb-3 py-3'>
                        <Row>
                            <Col xs={12} md={3}>
                                <img className="img-fluid" src={Logo}/>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <h2 className='mb-1 py-1'>Danh sách bác sỹ</h2>
                        <Row >
                            <Col xs={12}>
                                <DoctorListFilter />
                                <DoctorListMain />
                            </Col>
                        </Row>
                    </Container>
    </DoctorListContext.Provider>
}
export const DoctorListContext = React.createContext(null);
export default DoctorListContainer;