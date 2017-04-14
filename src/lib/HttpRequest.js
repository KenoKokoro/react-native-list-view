class HttpRequest {
  get(url) {
    this.data = [];
    return fetch(url)
      .then((response) => response.json())
      .then((json) => {
        return json
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

let instance = new HttpRequest();

export {
  instance
}
