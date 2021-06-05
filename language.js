function selectLanguage(language) {
  switch (language) {
    case "EN":
      console.log("English selected");
      break;

    case "FN":
      console.log("French selected");
      break;

    default:
      console.log("Please select either EN or FN");
  }
}

selectLanguage(language);
