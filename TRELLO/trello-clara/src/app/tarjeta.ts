export default interface Tarjeta {
  titulo: string;
  descripcion: string;
  assignedTo: string;
  startDate: string;
  endDate: string;
  status: string;
  priority: string;
  comments: Array<string>;
}
