import { ApiProperty, OmitType } from "@nestjs/swagger";
import { IsArray, IsDate, IsNumber, IsString, ValidateNested } from "class-validator";
import { IsExist } from "src/etc/validator/exist-validator";
import { IsUnique } from "src/etc/validator/unique-validator";
import { KonsumenId } from "src/konsumen/dto/create-konsuman.dto";
import { UserDto, UserIdDto } from "src/user/dto/create-user.dto";
import { PenjualanBayar } from "../entities/penjualan-bayar.entity";
import { PenjualanItem } from "../entities/penjualan-item.entity";
import { Penjualan } from "../entities/penjualan.entity";
import { PenjualanBayarDto } from "./penjualan-bayar.dto";
import { PenjualanItemDto } from "./penjualan-item.dto"

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

    @ApiProperty({type:[PenjualanItemDto]})
    @IsArray()
    @ValidateNested({each:true})
    item : PenjualanItemDto[] 

    @ApiProperty({type:[PenjualanBayarDto]})
    @IsArray()
    @ValidateNested({each:true})
    bayar : PenjualanBayarDto[]

    user : UserIdDto

}
export class CreatePenjualanDto extends OmitType(PenjualanDto,['id']) {}
