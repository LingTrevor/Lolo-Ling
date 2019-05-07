module.exports = {
  addMediaField(items) {
    const imageObj = {
      url: "",
      medium: "",
      type: "",
      width: "",
      heigth: ""
    };
    const mediaField = [{ $: imageObj }];

    items.forEach(item => {
      if (item["media:content"] === undefined) {
        item["media:content"] = mediaField;
      }
    });
  }
};
