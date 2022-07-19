import React from "react";
import FormSiswa from "../Components/FormSiswa";
import SideBar from "../Components/SideBar";
import TableSiswa from "../Components/TableSiswa";

export default function KelolaSiswa() {
    return (
        <div className="w-full md:w-screen md:h-screen md:flex p-2 pb-16 md:p-0">
            <SideBar />
            <TableSiswa />
            {/* <FormSiswa /> */}
        </div>
    );
}
