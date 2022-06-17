import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PageService } from 'src/etc/service/page/page.service';
import { Repository } from 'typeorm';
import { CreatePenjualanDto } from './dto/create-penjualan.dto';
import { UpdatePenjualanDto } from './dto/update-penjualan.dto';
import { Penjualan } from './entities/penjualan.entity';

@Injectable()
export class PenjualanService extends PageService {
  constructor(
    @InjectRepository(Penjualan) private PenjualanRepo : Repository<Penjualan>
  ){
    super()
  }
  create(createPenjualanDto: CreatePenjualanDto) {
    return this.PenjualanRepo.save(createPenjualanDto);
  }

  findAll(filter) {
    return this.generatePage(filter,this.PenjualanRepo,{relations:['user','konsumen']});
  }

  findOne(id: number) {
    return this.PenjualanRepo.findOne(id,{relations:['user','konsumen','item','item.produk','bayar','bayar.rekening']});
  }

  update(id: number, updatePenjualanDto: UpdatePenjualanDto) {
    updatePenjualanDto.id = id
    return this.PenjualanRepo.save(updatePenjualanDto);
  }

  async remove(id: number) {
    let jual = await this.PenjualanRepo.findOne(id)
    return this.PenjualanRepo.remove(jual);
  }
}
