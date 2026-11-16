import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateTravelDto } from './dto/create-travel.dto.js';

import { Travel } from './entities/travel.entity.js';

@Injectable()
export class TravelService {
 
@Injectable()
export class TravelService {
  private Travel: Travel [] = [
    { id: 1, nom: "to china",  price: 9000 },
    { id: 1, nom: "to morocco",  price: 4000 },
  ];
  private nextId = 3;

  create(dto: CreatetravelDto): travel {
    const travel: travel = { id: this.nextId++, ...dto };
    this.travel.push(travel);
    return travel;
  }

  findAll(): travel[] {
    return this.travel;
  }

  findOne(id: number): travel {
    const travel = this.travel.find((v) => v.id === id);
    if (!travel) {
      throw new NotFoundException(`travel ${id} introuvable`);
    }
    return travel;
  }
}
}


