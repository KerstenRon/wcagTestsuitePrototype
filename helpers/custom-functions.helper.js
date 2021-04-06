/**
 * helpers/custom-functions.helper.js
 *
 * @author Ron Kersten
 * @version 1.0.0
 *
 * @description Datei mit selbsterstellten Helferfunktionen
 */

/**
 * Formatiert ein übergebenes HTML-Dokument
 * Quelle: https://stackoverflow.com/questions/3913355/how-to-format-tidy-beautify-in-javascript#60338028
 *
 * @param html
 * @returns {string}
 */
 function formatHtml(html) {
    let tab = '\t';
    let result = '';
    let indent= '';
  
    html.split(/>\s*</).forEach(function(element) {
      if (element.match( /^\/\w/ )) {
        indent = indent.substring(tab.length);
      }
  
      result += indent + '<' + element + '>\r\n';
  
      if (element.match( /^<?\w[^>]*[^\/]$/ ) && !element.startsWith("input")  ) {
        indent += tab;
      }
    });
  
    return result.substring(1, result.length-3);
  }
  
  /**
   * Prüft ob der übergebene Sprachcode in ISO 639-1 definiert ist.
   *
   * Sprach-Codes aus ISO 639-1:
   *
   * - https://www.loc.gov/standards/iso639-2/php/code_list.php
   * - https://www.ietf.org/rfc/bcp/bcp47.txt
   * - https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
   *
   * @param langCode - String
   * @returns {boolean}
   */
  function isValidIso639LangCode(langCode) {
    //
    let validLangCodes = [
      'ab','aa','af','sq','am','ar','hy','as','ay','az','ba','eu','bn','dz','bh','bi','br','bg',
      'my','be','km','ca','zh','zh','co','hr','cs','da','nl','en','eo','et','fo','fa','fj','fi',
      'fr','fy','gl','gd','gv','ka','de','el','kl','gn','gu','ha','he','hi','hu','is','id','ia',
      'ie','iu','ik','ga','it','ja','ja','kn','ks','kk','rw','ky','rn','ko','ku','lo','la','lv',
      'li','ln','lt','mk','mg','ms','ml','mt','mi','mr','mo','mn','na','ne','no','oc','or','om',
      'ps','pl','pt','pa','qu','rm','ro','ru','sm','sg','sa','sr','sh','st','tn','sn','sd','si',
      'ss','sk','sl','so','es','su','sw','sv','tl','tg','ta','tt','te','th','bo','ti','to','ts',
      'tr','tk','tw','ug','uk','ur','uz','vi','vo','cy','wo','xh','yi','yo','zu'
    ];
    return validLangCodes.includes(langCode);
  }
  
  /**
   * Grabber, um ein bestimmtes Attribut für alle übergebenen Elemente zu erhalten
   *
   * @param elements - Matcher[]
   * @param attribute - String
   * @returns {[]}
   */
  function getAttributesFormElements( elements, attribute ) {
    let elementsAttributes = [];
  
    for( let element of elements ) {
      elementsAttributes.push( $( element ).getAttribute( attribute ) );
    }
  
    return elementsAttributes;
  }
  
  
  /**
   * Grabber, um alle Eltern-Elemente für alle übergebenen Elemente zu erhalten
   *
   * @param elements - Matcher[]
   * @returns {[]}
   */
  function getParentsFormElements( elements ) {
    let elementsParents = [];
  
    for( let element of elements ) {
      elementsParents.push( $( element ).parentElement() );
    }
    return elementsParents;
  }
  
  /**
   * Grabber, um innere Texte aller übergebenen Elemente zu erhalten
   *
   * @param elements - Matcher[]
   * @returns {[]}
   */
  function getInnerTextFormElements( elements ) {
    let elementsTexts = [];
  
    for( let element of elements ) {
      elementsTexts.push( $( element ).getText() );
    }
    return elementsTexts;
  }
  
  exports.formatHtml = formatHtml;
  exports.isValidIso639LangCode = isValidIso639LangCode;
  exports.getAttributesFormElements = getAttributesFormElements;
  exports.getParentsFormElements = getParentsFormElements;
  exports.getInnerTextFormElements = getInnerTextFormElements;