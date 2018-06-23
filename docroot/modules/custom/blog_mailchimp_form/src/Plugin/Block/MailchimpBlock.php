<?php

namespace Drupal\blog_mailchimp_form\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'Mail Chimp Form' Block.
 *
 * @Block(
 *   id = "blog_mailchimp_form",
 *   admin_label = @Translation("Mail Chimp Form"),
 * )
 */
class MailChimpBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    return [
      '#theme' => 'blog_mailchimp_form',
      '#attached' => [
        'library' => [
          'blog_mailchimp_form/mailchimp',
        ],
      ],
    ];
  }

}
