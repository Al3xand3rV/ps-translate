/* Developed by Al3xand3rV - PluginSoft.net - PS-Translate v1.0.0 */
class PsTranslate {
  constructor(jsonDictionary, defaultLang) {
    this.dictionary = jsonDictionary;
    this.defaultLang = defaultLang;
    this.activeLang = defaultLang;
    this.translateAll2(this.defaultLang);
  }
  //Getters
  getTranslation(key, lang) {
    return this.dictionary[key][lang];
  }
  //Methods
  setTranslation(key, lang, text) {
    this.dictionary[key][lang] = text;
  }
  addTranslation(key, objTranslation) {
    this.dictionary[key] = objTranslation;
  }
  translateAll2(lang) {
    let items = document.getElementsByClassName('ps-translate');
    this.activeLang = lang;
    for (let i = 0; i < items.length; i++) {
      try {
        let windex = items[i].dataset.key;
        if (this.dictionary[windex][lang] != undefined) {
          if ((items[i].tagName.toUpperCase() == 'INPUT' || items[i].tagName.toUpperCase() == 'TEXTAREA') && items[i].hasAttribute('placeholder')) {
            items[i].placeholder = this.dictionary[windex][lang];
          } else {
            items[i].innerText = this.dictionary[windex][lang];
          }
        } else {
          console.warn(`PS-Translate: I can't find the language '${lang}' for '${windex}' key.`);
        }
      } catch (error) {
        console.warn(error, `PS-Translate: I can't find the data-key for:`, items[i]);
      }
    }
  }
}