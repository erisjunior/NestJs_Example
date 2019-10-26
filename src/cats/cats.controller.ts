import { Controller, Get, Req, Post, HttpCode, Header, Redirect, Query, Param, Body, Res } from '@nestjs/common'
import { Request } from 'express'
import { CreateCatDto } from './create-cat.dto';

@Controller('cats')
export class CatsController {
  @Post()
  @HttpCode(204)
  @Header('Cache-Control', 'none')
  create(): string {
    return 'This action adds a new cat';
  }

  @Get('*')
  findAll(@Req() request: Request): string {
    return 'This actions return all cats'
  }

  @Get()
  findAllRes(@Res() response): string {
    return response.status(200).send('all dogs')
  }

  @Get(':id')
  findOne(@Param() params): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }
  
  @Post()
  async createCat(@Body() createCatDto: CreateCatDto ) {
    return 'This action adds a new cat';
  }

  @Get(':id')
  findAnotherOne(@Param('id') id): string {
    return `This action returns a #${id} cat`;
  }

  @Get()
  async findAllPromisable(): Promise<any[]> {
    return [];
  }

  @Get('redirector')
  @Redirect('vondme.com.br', 301)
  redirect(): string {
    return 'This actions return all cats'
  }

  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  } 
}