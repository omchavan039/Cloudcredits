async function sendData() {
    const input = document.getElementById('userInput').value;
    const response = await fetch(https://3fcw0hzhc8.execute-api.ap-south-1.amazonaws.com/prod, {
        method: 'POST',
        body: JSON.stringify({ "data": input })
    });
    const result = await response.json();
    document.getElementById('response').innerText = result.message;
}