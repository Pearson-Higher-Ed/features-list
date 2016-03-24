var templateCell = '<div class="o-feature-content"> '
    + '<div class="o-feature-left">'
    + '<div class="o-feature-brand">{{primaryTitle}}</div>'
    + '<header class="o-feature-title"> '
    + '{{secondaryTitle}} ' + '</header> '
    + '<div class="o-feature-description"> '
    + '<p>' + '{{#hasImage}}'
    + '<img class="o-feature-img pull-right" width="160" height="160" src="{{resourceUrl}}">'
    + '{{/hasImage}}'
    + '{{description}}</p> ' + '</div>'
    + '{{#hasCTA}}<div class="o-feature-button clearfix"> '
    + '<a class=\"o-feature-action-button\" href="{{ctaUrl}}" target="_blank"><div>{{ctaText}}<\/div></a> '
    + '</div>{{/hasCTA}}</div> ' + '</div>'
    + '<div class="o-feature-clearfix"></div>';
module.exports = templateCell;

