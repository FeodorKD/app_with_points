export interface IPoints {
    id: number;
    name: string;
    coordinate: Coordinates;
    labels: string[];
}

type Coordinates = [number, number]