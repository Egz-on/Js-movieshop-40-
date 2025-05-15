export function authlinks(isloggedin) {
    const auth_div = document.querySelector('.auth')
    const guest_div = document.querySelector('.guest')

    if (isloggedin) {
        auth_div.style.display = 'block'
        guest_div.style.display = 'none'
    } else {
        auth_div.style.display = 'none'
        guest_div.style.display = 'block'
    }
};


export function renderCart (cart) {
    let cart_html = `<table>`
    cart = JSON.parse(cart)
    if (cart.length > 0) {
        for (let [index, item] of cart.entries()) {
            cart_html += `
            <tr>
            <td class="border  border-gray-300  py-2 px-6">${item.original_title}</td>
            <td class="border  border-gray-300  py-2 px-6">
            <button id="dec" item="${index}" class="text-green-500">-</button>
            </td>
            <td class="border  border-gray-300  py-2 px-6">${item.qty}</td>
            <td class="border  border-gray-300  py-2 px-6">
            <button id="inc" item="${index}" class="text-green-500">+</button>
            </td>
            <td class="border  border-gray-300  py-2 px-6">${item.vote_average} EUR </td>
            <td class="border  border-gray-300  py-2 px-6">${item.qty * item.vote_average} EUR </td>
            <td class="border  border-gray-300  py-2 px-6">
            <button id="delete" item="${index}" class="text-red-200">X</button>
            </td>
            </tr>
            `
        }
    }
    cart_html += `</table>`

    return cart_html
}