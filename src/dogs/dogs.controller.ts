import { Controller, Get, Post, Body, Query, Param, Put, Delete, Res, HttpStatus } from '@nestjs/common';
import { CreateDogDto, UpdateDogDto, ListAllEntities } from './dto';
import { Response } from 'express';
import { DogsService } from './dogs.service';
import { Dog } from './dog.interface';

@Controller('dogs')
export class DogsController {
  constructor(private readonly dogsService: DogsService) {}

  @Post('service')
  async createService(@Body() createDogDto: CreateDogDto) {
    this.dogsService.create(createDogDto);
  }

  @Get('service')
  async findAllService(): Promise<Dog[]> {
    return this.dogsService.findAll();
  }

  @Get('res')
  findAllRes(@Res() res: Response) {
     res.status(HttpStatus.OK).json([]);
  }

  @Post('res')
  createRes(@Res() res: Response) {
    res.status(HttpStatus.CREATED).send();
  }

  @Post()
  create(@Body() createDogDto: CreateDogDto) {
    return 'This action adds a new dog';
  }

  @Get()
  findAll(@Query() query: ListAllEntities) {
    return `This action returns all dogs (limit: ${query.limit} items)`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} dog`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateDogDto: UpdateDogDto) {
    return `This action updates a #${id} dog`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} dog`;
  }
}
