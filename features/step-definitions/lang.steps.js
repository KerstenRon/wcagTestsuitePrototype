/**
 * features/step-definitions/lang.steps.js
 *
 * @version 1.0.0
 * @author Ron Kersten
 *
 * @description Schrittdefinition zu Testfall 3.1.1a Hauptsprache angegeben - Erfolgskriterium: https://www.w3.org/WAI/WCAG21/Understanding/language-of-page.html
 */

 const { Given, When, Then } = require('@cucumber/cucumber');
 const { assert } = require('chai');
 const { isValidIso639LangCode } = require('../../helpers/custom-functions.helper');
 
 
 let lang = '';
 let xmlLang = '';
 
 Given('I have to use a screenreader because I can not see well', () => {
    browser.url('https://www.t-systems-mms.com/');
 });
 
 When('I listen to my screenreader, that ist reading the websites content', () => {
     let html = $('html');
     lang = html.getAttribute('lang');
     xmlLang = html.getAttribute('xml:lang');
 });
 
 Then('I recognise that the content is written in a specific language', () => {
     assert.isNotEmpty(lang||xmlLang);
     
     if(lang && xmlLang) {
         assert.strictEqual(lang, xmlLang);
     }
     
     assert.isTrue(isValidIso639LangCode(lang||xmlLang));
 });
 
 Then('I can perceive that the language is set correctly', () => {
     assert.strictEqual(lang||xmlLang, process.env.TESTOBJECT_LANG);
 });