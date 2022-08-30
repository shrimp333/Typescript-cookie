import { Colours } from './Colours.js'

export class Cookie {
    name:string
    colour:Colours
    chocolateChipAmount:number
    sprinkleColour:Colours
    constructor(name:string, colour:Colours, chocolateChipAmount:number, sprinkleColour: Colours) {
        this.name = name;
        this.colour = colour;
        this.chocolateChipAmount = chocolateChipAmount;
        this.sprinkleColour = sprinkleColour;
    }
}