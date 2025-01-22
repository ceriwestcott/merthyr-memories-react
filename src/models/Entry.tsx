export interface Entry {
  id: number;
  name: string;
  area_id: number;
  location_id: number;
  date: string;
  streetName: string;
  people: string[];
}

export interface Location {
  id: number;
  name: string;
  image: string;
}
