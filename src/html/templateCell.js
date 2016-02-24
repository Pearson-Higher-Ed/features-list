

var templateCell =
		'<div class="o-feature-brand">{{primaryTitle}}</div>' +
		'<div class="o-feature-content"> ' +
			'<div class="o-feature-left"> ' +
				'<header class="o-feature-title"> ' +
					'{{secondaryTitle}} ' +
				'</header> ' +
				'<div class="o-feature-description"> ' +
					'<p>{{description}}</p> ' +
				'</div> ' +				
		'<div class="o-feature-button"> ' +
			'<button class=\"o-feature-action-button\" href="{{ctaUrl}}"><div>{{ctaText}}<\/div></button> ' +
		'</div> '
			'</div> ' +
			'<div class="o-feature-right"> ' +
				'<div class="o-feature-img-border"> ' +
					'<img src="{{resourceUrl}}"> ' +
				'</div> ' +
			'</div> ' +
			'<div class="o-feature-clearfix"></div>'+
		'</div> ';

module.exports = templateCell;
