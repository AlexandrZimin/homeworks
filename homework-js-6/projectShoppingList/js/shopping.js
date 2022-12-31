/* shopping.js */
/**
 * @param {string[]} items
 * @param {string} item
 */
 export function addItem(items, item) {
	item = item.trim();
    items.push(item);
    return items
}


/**
 * @param {string[]} items
 */
export function exportLowerCasedCSV(items) {
	items.forEach(function(item, index, items){
        item = item.toLowerCase();
        items[index] = item;
    })
    return items.join(", ")
}