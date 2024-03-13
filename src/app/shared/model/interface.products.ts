export interface Iptodut{
    Pname: string;
    Pdetails: string;
    Pstatus: IPstatus;
    id: string;
}

export type IPstatus = "Inpogress" | "Delivered" | "dispatched"