import React from 'react'
import {
    CButton, CCol, CRow
} from '@coreui/react'

function Footer() {
    return (
        <div>
            <CRow>
                <CCol xs="12" sm="6">
                    <CButton className="btn-facebook mb-1" block><span>facebook</span></CButton>
                </CCol>
                <CCol xs="12" sm="6">
                    <CButton className="btn-twitter mb-1" block><span>twitter</span></CButton>
                </CCol>
            </CRow>
        </div>
    )
}

export default Footer
