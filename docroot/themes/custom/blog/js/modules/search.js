/**
 * @file
 * Navigation javascript file for accessibility and toggling.
 */

((Drupal) => {
  'use strict';

  Drupal.behaviors.form = {
    attach: (context, settings) => {
      if (typeof context['location'] !== 'undefined') {

        const searchInput = document.getElementById('edit-keys--2');
        searchInput.addEventListener('focus', () => {
          searchInput.classList.add('open')
        }, false);

        searchInput.addEventListener('blur', () => {
          searchInput.classList.remove('open')
        }, false);

      }
    }
  }
})(Drupal);
