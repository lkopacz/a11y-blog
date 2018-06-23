/**
 * @file
 * Navigation javascript file for accessibility and toggling.
 */

((Drupal) => {
    'use strict';
    Drupal.behaviors.form = {
      attach: (context, settings) => {
        if (typeof context['location'] !== 'undefined') {
        const inputWrappers = document.querySelectorAll('.form-item:not(.form-no-label)');

        for (let item of inputWrappers) {
            const input = item.querySelector('input');
            if (input === null) {
                item.querySelector('label').classList.add('focus');
            }
            else if (input.getAttribute('type') === 'text' || 'email') {
                input.addEventListener('focus', function () {
                    input.previousElementSibling.classList.add('focus');
                }, false);
                input.addEventListener('blur', function () {
                    const value = input.value;
                    if (value.length === 0) {
                        input.previousElementSibling.classList.remove('focus');
                    }
                    else {
                        input.previousElementSibling.classList.add('focus');
                    }
                }, false);
            }
        }

        }
      }
    }
})(Drupal);
