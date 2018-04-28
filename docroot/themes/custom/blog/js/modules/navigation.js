/**
 * @file
 * Navigation javascript file for accessibility and toggling.
 */

((Drupal) => {
  'use strict';

  Drupal.behaviors.navigation = {
    attach: (context, settings) => {
      function NAVIGATION(mainNavClass, hamburgerToggleClass, headerClass) {
        this.mainNavClass = mainNavClass;
        this.hamburgerToggleClass = hamburgerToggleClass;
        this.headerClass = headerClass;

        this.mainNav = context.querySelector(`.${this.mainNavClass}`);
        this.hamburgerToggle = context.querySelector(`.${this.hamburgerToggleClass}`);
        this.header = context.querySelector(`.${this.headerClass}`);
        this.mainNavLinks = this.mainNav.getElementsByTagName('a');
        this.lastNavLink = this.mainNavLinks[this.mainNavLinks.length - 1];

        this.toggleMenu = function () {
          this.header.classList.toggle('open');
          this.hamburgerToggle.classList.toggle('open');
          for (let link of this.mainNavLinks) {
            link.tabIndex = 0;
          }
        }

        this.exitMenu = function (e) {
          if (e.type === 'blur' || e.keyCode === 27) {
            this.header.classList.remove('open');
            this.hamburgerToggle.classList.remove('open');

            for (let link of this.mainNavLinks) {
              link.tabIndex = -1;
            }
          }
        }

        for (let link of this.mainNavLinks) {
          link.tabIndex = -1;
          link.addEventListener('keyup', this.exitMenu.bind(this), false);
        }

        this.hamburgerToggle.addEventListener('click', this.toggleMenu.bind(this), false);
        this.lastNavLink.addEventListener('blur', this.exitMenu.bind(this), false);
      }

      const menu = new NAVIGATION('menu', 'hamburger-menu', 'header');

    }
  }
})(Drupal);
