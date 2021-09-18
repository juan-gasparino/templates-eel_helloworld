/**
 * renderItem
 * render html template dinamically
 * @param {string} idTag
 * @param {string} childItemHtmlString
 */
export function renderItem(idTag, childItemHtmlString) {
    try {
        document.getElementById(idTag).innerHTML = ''; //clean old child elements first
        document.getElementById(idTag).innerHTML += childItemHtmlString;
    } catch (error) {
        console.error(error);
    }
}

/**
 * inject Class dinamically
 * @param {string} idTag //select the html tag
 * @param {string} myClass //class you want to add
 */
export function addClass(idTag, myClass) {
    try {
        const element = document.getElementById(idTag);
        element.classList.add(myClass);
    } catch (error) {
        console.error(error);
    }
}

/**
 * inject Class dinamically delayed
 * @param {string} idTag //select the html tag
 * @param {string} myClass //class you want to add
 * @param {number} seconds //delay in seconds
 */
export function addClassDelayed(idTag, myClass, seconds) {
    try {
        setTimeout(() => {
            const element = document.getElementById(idTag);
            element.classList.add(myClass);
        }, seconds * 1000);
    } catch (error) {
        console.error(error);
    }
}

/**
 * remove Class dinamically
 * @param {string} idTag //select the html tag
 * @param {string} myClass //class you want to remove
 */
export function removeClass(idTag, myClass) {
    try {
        const element = document.getElementById(idTag);
        element.classList.remove(myClass);
    } catch (error) {
        console.error(error);
    }
}

/**
 * remove Class dinamically delayed
 * @param {string} idTag //select the html tag
 * @param {string} myClass //class you want to remove
 * @param {number} seconds //delay in seconds
 */
export function removeClassDelayed(idTag, myClass, seconds) {
    try {
        setTimeout(() => {
            const element = document.getElementById(idTag);
            element.classList.remove(myClass);
        }, seconds * 1000);
    } catch (error) {
        console.error(error);
    }
}

/**
 * removeHtml
 * remove html template dinamically
 * @param {string} idTag
 */
export function removeHtml(idTag) {
    try {
        if (document.getElementById(idTag) != null) {
            document.getElementById(idTag).remove();
        } else {
            let items = document.getElementsByClassName(idTag);
            while (items.length > 0) {
                items[0].parentNode.removeChild(items[0]);
            }
        }
    } catch (error) {
        console.error(error);
    }
}
