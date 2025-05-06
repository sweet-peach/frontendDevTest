import styles from "./Actions.module.css"
import {useState} from "react";
import CartService from "../../../services/cartService.js";
export default function Actions({product}){
    const [selectedColor, setSelectedColor] = useState(product.options.colors[0].code)
    const [selectedStorage, setSelectedStorage] = useState(product.options.storages[0].code)
    function handleStorageChange(event){
        setSelectedStorage(event.target.value)
    }

    function handleColorsChange(event){
        setSelectedColor(event.target.value)
    }

    function AddToCartButton({colorCode, storageCode}){
        const [isLoading, setIsLoading] = useState(false);
        const [error, setError] = useState("");

        async function handleAddToCart(){
            try {
                setIsLoading(true);
                setError("");
                await CartService.addToCart(product.id,colorCode,storageCode);
            } catch (e) {
                setError(e.message)
            } finally {
                setIsLoading(false);
            }
        }


        return <div>
            <p className="error">{error}</p>
            <button onClick={handleAddToCart} disabled={isLoading}>Add to cart</button>
        </div>
    }


    return <div className={styles.actionsBox}>
        <div className={styles.radioButtonsBox}>
            <p>Select storage</p>
            {product.options.storages.map((storage) => {
                return <label>
                    <input
                        type="radio"
                        name="storage"
                        value={storage.code}
                        checked={selectedStorage == storage.code}
                        onChange={handleStorageChange}
                    />
                    {storage.name}
                </label>
            })}
            <p>Select color</p>
            {product.options.colors.map((colors) => {
                return <label>
                    <input
                        type="radio"
                        name="colors"
                        value={colors.code}
                        checked={selectedColor == colors.code}
                        onChange={handleColorsChange}
                    />
                    {colors.name}
                </label>
            })}
        </div>

        <AddToCartButton colorCode={selectedColor} storageCode={selectedStorage}></AddToCartButton>
    </div>
}