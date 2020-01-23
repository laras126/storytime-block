<?php
// This is a generated file. Refer to the relevant Twig file for adjusting this markup.
?>
<?php if ( ! empty( $is_nested ) ) { ?>
    <section class="panel // js-Panel <?php echo esc_attr( $panel_classes ?? '' ); ?>">
<?php } else { ?>
    <div class="panel // js-Panel js-Panel--nested <?php echo esc_attr( $panel_classes ?? '' ); ?>">
<?php } ?>
    <?php echo wp_kses_post( $panel_markup ?? '' ); ?>
<?php if ( ! empty( $is_nested ) ) { ?>
    </section>
<?php } else { ?>
    </div>
<?php } ?>