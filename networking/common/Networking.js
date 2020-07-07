

export async function getData(url) {
  try {
    let response = await fetch(url);
    let json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
    return error
  }
}

export async function postData(url, payload) {
  try {
    let response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    let json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
    return error
  }

}


// body: JSON.stringify({
//   firstParam: 'yourValue',
//   secondParam: 'yourOtherValue'
// })