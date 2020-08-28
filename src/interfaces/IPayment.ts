export default interface IPayment {
  order_id: number;
  totalPrice: number;
  card_number: string;
  card_validate: string;
}
