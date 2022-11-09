export function message(messageType = "success", message = "") {
    return `<div class="alert ${messageType}">${message}</div>`;
}