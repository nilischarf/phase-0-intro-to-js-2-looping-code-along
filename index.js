function writeCards(names, event) {
    const messages = []

    for (let i = 0; i < names.length; i++) {
        const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
        messages.push(message)
    }

    return messages
}


function countDown(num) {
    while (num >= 0) {
        console.log(num);
        num --;
    }
}