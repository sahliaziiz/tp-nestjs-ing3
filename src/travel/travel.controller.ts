import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { TravelService } from './travel.service.js';
import { CreateTravelDto } from './dto/create-travel.dto.js';
import { ApiTags } from "@nestjs/swagger";

@ApiTags("travel")
@Controller('travel')
export class TravelController {
  constructor(private readonly voituresService: travelService) {}

  @Post()
  create(@Body() dto: CreatetravelDto) {
    return this.travelsService.create(dto);
  }

  @Get()
  findAll() {
    return this.travelService.findAll();
  }

  @Get(":id")
  findOne(@Param("id", ParseIntPipe) id: number) {
    return this.voituresService.findOne(id);
  }



  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.travelService.remove(+id);
  }
}





  