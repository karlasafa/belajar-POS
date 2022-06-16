import { ApiProperty } from "@nestjs/swagger"
import { IsDate, IsNumber, IsObject, IsOptional, Min, ValidateNested } from "class-validator"
import { ProdukIdDto } from "src/produk/dto/create-produk.dto"
import { Produk } from "src/produk/entities/produk.entity"
import { RekeningIdDto } from "src/rekening/dto/create-rekening.dto"
import {  UserIdDto } from "src/user/dto/create-user.dto"
import { Penjualan } from "../entities/penjualan.entity"

export class PenjualanItemDto{
    @IsOptional()
    id : number

    @ApiProperty()
    @Min(1)
    @IsNumber()
    jumlah_jual : number

    @ApiProperty()
    @IsNumber()
    harga_jual : number

    @ApiProperty()
    @IsNumber()
    potongan : number

    @ApiProperty({type:ProdukIdDto})
    @IsObject()
    @ValidateNested()
    produk : ProdukIdDto

    @IsObject()
    user : UserIdDto
    
}