enum Sweet {
  'strawberry',
  'berry',
  'love',
  'star',
  'clover',
  'ribbon',
}

export interface Alcremie {
  id: string;
  name: string;
  sweet: Sweet;
  caught: boolean;
}

export interface AlcremieFamily {
  name: string;
  members: Alcremie[];
  instructions: string;
}
