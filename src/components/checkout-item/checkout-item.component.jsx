import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector.js";
import { clearItemFromCart, addItemToCart, removeItemFromCart } from "../../store/cart/cart.action";

import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from "./checkout-item.styles";

const CheckoutItem = ({ item }) => {
  const { name, imageUrl, price, quantity } = item;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, item));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, item));
  const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, item));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan> {name} </BaseSpan>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan> {price}</BaseSpan>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
