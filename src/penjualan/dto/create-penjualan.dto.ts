import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNumber, IsString, ValidateNested } from "class-validator";
import { IsExist } from "src/etc/validator/exist-validator";
import { IsUnique } from "src/etc/validator/unique-validator";
import { KonsumenId } from "src/konsumen/dto/create-konsuman.dto";
import { UserDto } from "src/user/dto/create-user.dto";
import { PenjualanBayar } from "../entities/penjualan-bayar.entity";
import { PenjualanItem } from "../entities/penjualan-item.entity";
import { Penjualan } from "../entities/penjualan.entity";

export class PenjualanDto{
    @ApiProperty()
    @IsExist([Penjualan,'id'])
    id : number

    @ApiProperty()
    @IsString()
    @IsUnique([Penjualan, 'no_faktur'])
    no_faktur : string

    @ApiProperty()
    @IsDate()
    tanggal : Date

    @IsNumber()
    total_transaksi : number

    @IsNumber()
    total_potongan : number

    @IsNumber()
    total_bayar : number

    @ApiProperty({type:KonsumenId})
    @ValidateNested()
    konsumen : KonsumenId

    @ApiProperty()
    item : PenjualanItem[]

    @ApiProperty()
    bayar : PenjualanBayar[]

    @ApiProperty()
    user : UserDto

}
export class CreatePenjualanDto {}
