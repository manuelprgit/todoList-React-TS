import { useEffect, useState } from "react";
import { Todo } from "../App";

type LocalStorageType = {
    items: Todo[],
    saveItems: (newItems: Todo[]) => void,
    loading: boolean,
    error: boolean
}


const useLocalStorage = (itemName: string, initialValue: Todo[]): LocalStorageType => {

    const [items, setItems] = useState(initialValue); //Creamos un estado para guardar y actualizar la data al momento de asignarle un valor a setItems;
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItems: any;
                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.parse(initialValue.toString()))
                    parsedItems = initialValue;
                } else {
                    parsedItems = JSON.parse(localStorageItem); //Parceamos la información que vino del localStorage
                    setItems(parsedItems);
                }
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(false);
        }
        },2000);

    }, []);

    const saveItems = (newItems: any) => {
        localStorage.setItem(itemName, JSON.stringify(newItems));
        setItems(newItems);
    } //Esta función se encarga de guardar en el localStorage y actualizar el estado;

    return {
        items,
        saveItems,
        loading,
        error
    }; //retorna el nuevo estado y la función que se comunica con el actualizador del estado;

} //custom hook

export { useLocalStorage }