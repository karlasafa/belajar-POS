import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PenjualanService } from './penjualan.service';
import { CreatePenjualanDto } from './dto/create-penjualan.dto';
import { UpdatePenjualanDto } from './dto/update-penjualan.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { PenjualanProses } from './penjualan-proses.decorator';

@ApiTags('Penjualan')
@Controller('penjualan')
export class PenjualanController {
  constructor(private readonly penjualanService: PenjualanService) {}

  @Post()
  @ApiBody({type:CreatePenjualanDto})
  create(@PenjualanProses() createPenjualanDto: CreatePenjualanDto) {
    return this.penjualanService.create(createPenjualanDto);
  }

  @Get()
  findAll() {
    return this.penjualanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.penjualanService.findOne(+id);
  }

  @Patch(':id')
  @ApiBody({type:UpdatePenjualanDto})
  update(@Param('id') id: string, @PenjualanProses() updatePenjualanDto: UpdatePenjualanDto) {
    return this.penjualanService.update(+id, updatePenjualanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.penjualanService.remove(+id); //menit 3:42
  }
}
