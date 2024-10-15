function insertionSort(arr) {
    // Parcourir tous les éléments du tableau à partir du deuxième
    for (let i = 1; i < arr.length; i++) {
        // L'élément à insérer
        let key = arr[i];
        // Index du dernier élément trié
        let j = i - 1;

        // Déplacer les éléments du tableau qui sont plus grands que key
        // d'une position vers la droite
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Insérer l'élément à sa position correcte
        arr[j + 1] = key;
    }

    return arr;
}

// Exemple d'utilisation
const array = [5, 2, 9, 1, 5, 6];
const sortedArray = insertionSort(array);
console.log(sortedArray); // Affiche : [1, 2, 5, 5, 6, 9]
