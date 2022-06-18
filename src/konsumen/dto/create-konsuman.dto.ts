import { ApiProperty, OmitType, PickType } from "@nestjs/swagger";
import { IsEmail, IsObject, IsOptional, IsString } from "class-validator";
import { PageResponsDto } from "src/etc/dto/page-dto";
import { IsExist } from "src/etc/validator/exist-validator";
import { ProdukDto } from "src/produk/dto/create-produk.dto";
import { CreateUserDto } from "src/user/dto/create-user.dto";
import { Konsuman } from "../entities/konsuman.entity";

export class KonsumanDto {
    @ApiProperty()
    @IsExist([Konsuman, 'id'])
    id : number

    @ApiProperty()
    @IsString()
    nama_konsumen : string

    @ApiProperty()
    @IsString()
    alamat_konsumen : string

    @ApiProperty()
    @IsString()
    @IsEmail()
    email_konsumen : string

    @ApiProperty()
    @IsString()
    no_hp_konsumen : string

    @IsObject()
    user : CreateUserDto 
}
export class CreateKonsumanDto extends OmitType(KonsumanDto,['id']) {}
export class KonsumenId extends PickType(KonsumanDto,['id']){}

export class FindKosumenDto extends PageResponsDto{
    @ApiProperty({required:false})
    @IsString()
    @IsOptional()
    nama_konsumen : string

    @ApiProperty({required:false})
    @IsString()
    @IsOptional()
    alamat_konsumen : string

    @ApiProperty({required:false})
    @IsString()
    @IsOptional()
    @IsEmail()
    email_konsumen : string

    @ApiProperty({required:false})
    @IsString()
    @IsOptional()
    no_hp_konsumen : string  
}
export class ResponKonsumenDto{
    @ApiProperty({type:[ProdukDto]})
    data : ProdukDto[]
}