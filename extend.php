<?php

/*
 * This file is part of defendervex/bbextend.
 *
 * Copyright (c) 2023 DefenderVex.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace DefenderVex\BBExtend;

use Flarum\Extend;
use Flarum\Frontend\Document;
use s9e\TextFormatter\Configurator;

return [
	(new Extend\Frontend('forum'))
		->js(__DIR__.'/js/dist/forum.js'),
        
	(new Extend\Formatter)
	->configure(function (Configurator $config) {
		$config->BBCodes->addCustom(
			'[right]{TEXT}[/right]',
			'<div style="text-align: right;">{TEXT}</div>'
		);
		$config->BBCodes->addCustom(
			'[justify]{TEXT}[/justify]',
			'<div style="text-align: justify;">{TEXT}</div>'
		);
		$config->BBCodes->addCustom(
			'[hr]',
			'<hr style="border-top: 1px solid var(--muted-color);">'
		);
		$config->BBCodes->addCustom(
			'[indent={NUMBER}]{TEXT}[/indent]',
			'<div style="padding-left: {NUMBER}px;">{TEXT}</div>'
		);
	})
];
