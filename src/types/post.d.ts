interface ILabels {
  id: number;
  name: string;
  color: string;
}

declare interface IPost {
  id: number;
  number: number;
  title: string;
  created_at: string;
  labels: ILabels[];
  body: string;
  $body?: string;
}
