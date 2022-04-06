import { AiOutlineShoppingCart } from "react-icons/ai"
export const CART = 'cart'
const renderIcons=(iconString)=>{
    if(iconString === 'cart'){
        return <AiOutlineShoppingCart />
    }
}
export default renderIcons