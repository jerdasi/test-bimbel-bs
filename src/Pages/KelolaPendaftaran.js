import React from "react";
import FormPendaftaran from "../Components/FormPendaftaran";
import SideBar from "../Components/SideBar";
import TablePendaftaran from "../Components/TablePendaftaran";

export default function KelolaPendaftaran() {
    return (
        <div className="w-full md:w-screen md:h-screen md:flex p-2 pb-16 md:p-0">
            <SideBar />
            <TablePendaftaran />
        </div>
    );
}
