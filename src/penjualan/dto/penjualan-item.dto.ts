import { Rekening } from "src/rekening/entities/rekening.entity"
import { User } from "src/user/entities/user.entity"

export class PenjualanDto{
    id : number
    tanggal_bayar : Date
    jumlah_bayar : number
    rekening : Rekening
    user : User
    //menit 3:29
}