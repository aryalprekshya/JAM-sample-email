function selectLanguage(language) {
  switch (language) {
    case "EN":
      console.log("English");
      break;

    case "FR":
      console.log("French");
      break;

    default:
      console.log("Please set the language either EN or FR");
  }
}

let language = "EN";
selectLanguage(language);
