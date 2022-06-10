import { Konsuman } from "src/konsumen/entities/konsuman.entity";
import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { PenjualanBayar } from "./penjualan-bayar.entity";
import { PenjualanItem } from "./penjualan-item.entity";

@Entity()
export class Penjualan {
    @PrimaryGeneratedColumn()
    id : number

    @Column()
    no_faktur : string

    @Column()
    tanggal : Date

    @Column()
    total_transaksi : number

    @Column()
    total_potongan : number

    @Column()
    total_bayar : number
    
    @ManyToOne(()=>Konsuman, kons => kons.id)
    konsumen : Konsuman

    @ManyToOne(()=>PenjualanItem, pjitem => pjitem.id,{cascade:true})
    item : PenjualanItem[]

    @ManyToOne(()=>PenjualanBayar, pjbyr => pjbyr.id,{cascade:true})
    bayar : PenjualanBayar[]

    @CreateDateColumn()
    create_at : Date

    @UpdateDateColumn({onUpdate:'CURRENT_TIMESTAMP(6)'})
    update_at : Date

    @ManyToOne(()=> User, usr => usr.id)
    user : User
}

