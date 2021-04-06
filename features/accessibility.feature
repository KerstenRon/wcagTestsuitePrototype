# features/accessibility.feature
#
# @version 1.0.0
# @author Ron Kersten
#
# @description Implementierung einer Testsuite entlang der WCAG 2.1 Erfolgskriterien

Feature: WCAG Test Suite
  In order to be able to use a website
  As a person with disability
  I depend on an accessible website that implements the WCAG success criteria

  @3.1.1a
  @implemented
  # 3.1.1 Language of Page - Erfolgskriterium: https://www.w3.org/WAI/WCAG21/Understanding/language-of-page.html
  # Schrittdefinition: features/step-definitions/lang.steps.js
  Scenario: Persons with disabilities can perceive the content of a website in his chosen language
    Given I have to use a screenreader because I can not see well
    When I listen to my screenreader that is reading the websites content
    Then I recognise that the content is written in a specific language
    And I can perceive that the language is set correctly