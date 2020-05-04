$(function() {
    country = $.url(location.href).param('country');

    if (country == 'GR') {
        gr_selected = 'selected="selected"';
    } else {
        gr_selected = '';
    }
    if (country == 'CY') {
        cy_selected = 'selected="selected"';
    } else {
        cy_selected = '';
    }


    selects = $("select[name='country']");
    selects.append('<option value="GR"' + gr_selected + '>Greece</option>');
    // selects.append('<option value="CY" ' + cy_selected + '>Cyprus</option>');

    var change = 0,
        updatePrices = function(item) {
            change = 1;

            $(item.children).each(function() {
                if (this.selected) sel = $(this).val();
            });

            if (typeof sel === 'undefined') {
                sel = 'GR';
            }

            if (sel == 'GR') {
                $('.old_price_val').html('78');
                $('.old_price_cur').html('EUR');
                $('.old_price_sig').html('&#8381;');
                $('.new_price_val').html('39');
                $('.new_price_cur').html('EUR');
                $('.new_price_sig').html('EUR');
                $('select').val('GR').trigger('change');
                initializeMask({ mask: "(+30)9999999999", removeMaskOnSubmit: false })
            }

            if (sel == 'CY') {
                $('.old_price_val').html('78');
                $('.old_price_cur').html('EUR');
                $('.old_price_sig').html('&#8381;');
                $('.new_price_val').html('39');
                $('.new_price_cur').html('EUR');
                $('.new_price_sig').html('EUR');
                $('select').val('CY').trigger('change');
                initializeMask({ mask: "(+357)99999999", removeMaskOnSubmit: false })
            }

            change = 0;
        };
    $("select").change(function() {
        if (change == 0) updatePrices(this);
    }).change();

    function initializeMask(mask) {
        $('[name=phone]').inputmask(mask);
    }
});